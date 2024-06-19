import React, { useState } from 'react';
import styled from "@emotion/styled";
import SearchIcon from '@/components/UI/icons/SearchIcon'; // Importing the SearchIcon component
import SearchBarProps from "@/components/modules/Dashboard/SearchBar/Types";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -2rem 2rem 0 2rem;
`;

const SearchContainer = styled.div<{ isFilterBarVisible: boolean; isFocused: boolean }>`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);
  width: 100%;
  margin-bottom: ${({ isFilterBarVisible }) => (isFilterBarVisible ? '1rem' : '0')};
`;

const InnerSearchContainer = styled.div<{ isFocused: boolean }>`
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

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);
  width: 100%;
  margin-top: 1rem;
`;

const SearchBar = ({isFocused, searchTerm, inputRef, handleSearchChange, handleBlur, handleFocus} : SearchBarProps) => {
  const [isFilterBarVisible, setIsFilterBarVisible] = useState(false);

  const toggleFilterBar = () => {
    setIsFilterBarVisible(!isFilterBarVisible);
  };

  return (
    <MainContainer>
      <SearchContainer isFocused={isFocused} isFilterBarVisible={isFilterBarVisible}>
        <InnerSearchContainer isFocused={isFocused} onClick={handleFocus}>
          <SearchIcon size={20} />
          <StyledInput
            ref={inputRef}
            placeholder="Search..."
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </InnerSearchContainer>
        {searchTerm && <FilterButton onClick={toggleFilterBar}>Filters</FilterButton>}
      </SearchContainer>
      {isFilterBarVisible && <FilterBar />}
    </MainContainer>
  );
};

export default SearchBar;
