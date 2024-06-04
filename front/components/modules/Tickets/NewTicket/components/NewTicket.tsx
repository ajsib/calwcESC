import { useTicketContext } from "../../TicketContext";
const NewTicket = () => {
    const { setIsTicketEntryPageOpen } = useTicketContext();
    return (
        <div>
            New Ticket
            <button onClick={() => setIsTicketEntryPageOpen(false)}>Back</button>
        </div>
    );
};

export default NewTicket;