import { useState, useRef, ChangeEvent } from 'react'; 
import SearchBar from "./SearchBar";
import { useTicketContext } from '../../TicketContext';

export default function SearchBarCon() {
    const { searchTerm, setSearchTerm } = useTicketContext();
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <SearchBar
            searchTerm={searchTerm}
            isFocused={isFocused}
            inputRef={inputRef}
            handleSearchChange={handleSearchChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
        />
    );
}
