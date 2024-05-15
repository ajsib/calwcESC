import {useState, useEffect} from "react";
import Stats from "./Stats";
import { Ticket } from "../Types";
import fetchTicketData from "../services/fetchTicketData";

const StatsCon = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        fetchTicketData().then((data) => {
            setTickets(data);
        });
    }, []);

    const openTickets = tickets.filter(ticket => ticket.status === "Open");
    const highPriorityTickets = tickets.filter(ticket => ticket.priority === "High");
    const mediumPriorityTickets = tickets.filter(ticket => ticket.priority === "Medium");
    const lowPriorityTickets = tickets.filter(ticket => ticket.priority === "Low");
    return (
      <Stats openTickets={openTickets} highPriorityTickets={highPriorityTickets} mediumPriorityTickets={mediumPriorityTickets} lowPriorityTickets={lowPriorityTickets}/>
    );
};

export default StatsCon;