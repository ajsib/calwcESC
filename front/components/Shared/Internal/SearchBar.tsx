import React, { useState, useRef, ChangeEvent, FocusEvent } from "react";
import styled from "@emotion/styled";
import SearchIcon from '@/components/UI/icons/SearchIcon'; // Importing the SearchIcon component

const MainContainer = styled.div`
  // margin-top: 2rem;
  display: flex;
  align-items: center;
  height: 4rem;
  margin-left: 2rem;
  margin-right: 2rem;
  background-color: #fff;
  border: 1px solid #e9e9e9; 
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 10px 25px -5px,
    rgba(0, 0, 0, 0.03) 0px 10px 10px -5px;
`;

const SearchContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 24px;
  height: calc(4rem - 2px);
  border: ${({ isFocused }) =>
    isFocused ? "1px solid #eee" : "1px solid transparent"};
  box-shadow: ${({ isFocused }) => (isFocused ? "0 0 0 1px #364132" : "none")};
  cursor: text;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  font-size: 16px;
  padding: 8px 20px;
  outline: none;
  border: none;
`;

const FilterButton = styled.button`
  background-color: #fff;
  padding-left: 16px;
  margin-left: 1px;
  border: none;
  height: 100%;
  padding: 8px 32px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SearchBar = () => {
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
    <MainContainer>
      <SearchContainer
        isFocused={isFocused}
        onClick={() => inputRef.current?.focus()}
      >
        <SearchIcon size={26} />
        <StyledInput
          ref={inputRef}
          placeholder="Search..."
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </SearchContainer>
      <FilterButton>Filters</FilterButton>
    </MainContainer>
  );
};

export default SearchBar;
