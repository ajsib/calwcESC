import React, { createContext, useContext, useState, useEffect, ReactNode, ChangeEvent } from 'react';
import { fetchTicketData, fetchTicketsByIds, fetchTicketIdsByUserId } from './services/fetchTicketData';
import { Ticket } from '@/public/Types/GlobalTypes';
import { useUserProfile } from '@/globalContexts/userContext';

interface TicketContextType {
  isTicketEntryPageOpen: boolean;
  setIsTicketEntryPageOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tickets: Ticket[];
  selectedPriority: string;
  setSelectedPriority: React.Dispatch<React.SetStateAction<string>>;
  filteredTickets: Ticket[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  isFilterBarOpen: boolean;
  setIsFilterBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define the context
const TicketContext = createContext<TicketContextType | null>(null);

// Create a provider component
interface TicketProviderProps {
  children: ReactNode;
}

export const TicketProvider: React.FC<TicketProviderProps> = ({ children }) => {
  const [isTicketEntryPageOpen, setIsTicketEntryPageOpen] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

  const { profile } = useUserProfile();

  useEffect(() => {
    const loadTickets = async () => {
      if (profile?.role === "Staff") {
        try {
          const ticketIds = await fetchTicketIdsByUserId(profile.employee_id);
          const tickets = await fetchTicketsByIds(ticketIds);
          setTickets(tickets);
        } catch (error) {
          console.error("Error fetching tickets for Staff:", error);
        }
      } else if (profile?.role === "ESC Staff") {
        try {
          const tickets = await fetchTicketData();
          setTickets(tickets);
        } catch (error) {
          console.error("Error fetching tickets for ESC Staff:", error);
        }
      }
    };

    loadTickets();
  }, [profile]);

  useEffect(() => {
    const filteredTickets = tickets.filter(ticket =>
      (selectedPriority === '' || ticket.priority === selectedPriority) &&
      (searchTerm === '' || ticket.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setFilteredTickets(filteredTickets);
  }, [selectedPriority, searchTerm, tickets]); // Add searchTerm to the dependency array

  return (
    <TicketContext.Provider value={{
      isTicketEntryPageOpen,
      setIsTicketEntryPageOpen,
      tickets,
      selectedPriority,
      setSelectedPriority,
      filteredTickets,
      searchTerm,
      setSearchTerm,
      isFilterBarOpen,
      setIsFilterBarOpen
    }}>
      {children}
    </TicketContext.Provider>
  );
};

// Custom hook to use the TicketContext
export const useTicketContext = (): TicketContextType => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicketContext must be used within a TicketProvider');
  }
  return context;
};
