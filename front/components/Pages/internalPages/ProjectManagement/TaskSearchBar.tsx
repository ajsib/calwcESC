/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import SearchIcon from '@/components/UI/icons/SearchIcon'; // Importing the SearchIcon component
import FilterIcon from '@/components/UI/icons/FilterIcon';

const searchBarContainerStyle = css`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  margin: 2rem;
  padding: 0.5rem;
`;

const taskSearchBarStyle = css`
  padding: 15px; /* Increased padding */
  border: none;
  flex-grow: 1;
  margin-right: 0.5rem;
  font-size: 1rem;
  
  &:focus {
    outline: none; // Removes the bold black border on focus
  }
`;

const filterDivStyle = css`
  border: 1px solid #ddd;
  margin-left: 1rem;
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  width: 5rem;
  &:hover {
    background-color: #eaeaea;
  }
`;

const searchButtonStyle = css`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
`;

const dropdownStyle = css`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-top: 0.5rem;
  padding: 1rem;
  right: 3.3rem;
  z-index: 10; // Ensure the dropdown appears above other elements
`;

const TaskSearchBarWithFilters = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Simple function to apply filters to the search logic
  const handleFilterClick = (filterName: string) => {
    console.log(`Applying filter: ${filterName}`);
    // Logic to apply filter to search results will go here
    setShowFilters(false); // Close the dropdown after selecting a filter
  };

  // Submit handler for the search button
  const handleSubmit = () => {
    console.log('Search button clicked');
    // Add logic to handle search here
  };

  return (
    <div css={searchBarContainerStyle}>
      {/* Search Icon wrapped in a div acting as a submit button */}
      <div css={searchButtonStyle} onClick={handleSubmit} role="button" tabIndex={0}>
        <SearchIcon size={24} />
      </div>
      <input
        css={taskSearchBarStyle}
        type="search"
        placeholder="Search tasks..."
        // Add onChange handler as needed
      />

      <div
        css={filterDivStyle}
        onClick={() => setShowFilters(!showFilters)}
        role="button" 
        tabIndex={0} 
      >
        Filters
        <FilterIcon size={24} />
      </div>
      {showFilters && (
        <div css={dropdownStyle}>
          {/* Dropdown content for selecting filters */}
          <p role="button" tabIndex={0} onClick={() => handleFilterClick('Filter 1')}>Filter 1</p>
          <p role="button" tabIndex={0} onClick={() => handleFilterClick('Filter 2')}>Filter 2</p>
          <p role="button" tabIndex={0} onClick={() => handleFilterClick('Filter 3')}>Filter 3</p>
          {/* Add more filters as needed */}
        </div>
      )}
    </div>
  );
};

export default TaskSearchBarWithFilters;
