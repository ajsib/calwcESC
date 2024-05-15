export default interface SearchBarProps {
    searchTerm: string;
    isFocused: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFocus: () => void;
    handleBlur: () => void;
}