import {useState, useRef, ChangeEvent} from 'react'; 
import SearchBar from "./SearchBar";

export default function SearchBarCon() {
    const [searchTerm, setSearchTerm] = useState("");
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