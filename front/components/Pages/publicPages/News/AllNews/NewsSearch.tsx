/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import SearchIcon from '@/components/UI/icons/SearchIcon';

const NewsSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleSearch = () => {
        console.log(`Searching for: ${searchTerm} from ${dateFrom} to ${dateTo}`);
        // Implement search functionality here
    };

    const formStyle = css`
        display: flex;
        align-items: center; /* Align items vertically */
        justify-content: space-between;
        margin-top: 1rem;
    `;

    const labelStyle = css`
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    `;

    const searchParentStyle = css`
        width: 60%;
    `;

    const inputStyle = css`
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
    `;

    const buttonStyle = css`
    padding: 1rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    width: 10%;
    height: 100%;
    cursor: pointer;
    align-self: flex-end; /* Align the button to the bottom of its container */
    &:hover {
        background-color: #0056b3;
    }
`;


    return (
        <form css={formStyle} onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <div css={searchParentStyle}>
                <label css={labelStyle} htmlFor="searchTerm">Search Articles</label>
                <input
                    css={inputStyle}
                    id="searchTerm"
                    type="text"
                    placeholder="Enter search term"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <label css={labelStyle} htmlFor="dateFrom">Date From</label>
                <input
                    css={inputStyle}
                    id="dateFrom"
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                />
            </div>
            <div>
                <label css={labelStyle} htmlFor="dateTo">Date To</label>
                <input
                    css={inputStyle}
                    id="dateTo"
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                />
            </div>
            <button css={buttonStyle} type="submit"><SearchIcon size={24} /></button>
        </form>
    );
};

export default NewsSearch;