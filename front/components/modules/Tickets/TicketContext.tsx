import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
    const filteredTickets = selectedPriority !== ''
        ? tickets.filter(ticket => ticket.priority === selectedPriority) 
        : tickets;

    setFilteredTickets(filteredTickets);
  }, [selectedPriority, tickets]); // Add tickets to the dependency array

  return (
    <TicketContext.Provider value={{
      isTicketEntryPageOpen,
      setIsTicketEntryPageOpen,
      tickets,
      selectedPriority,
      setSelectedPriority,
      filteredTickets
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
