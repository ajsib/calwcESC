/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const NewsSearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleSearch = () => {
        console.log(`Searching for: ${searchTerm} from ${dateFrom} to ${dateTo}`);
        // Implement search functionality here
    };

    const formStyle = css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 20px;
        padding: 10px;
        background: #f3f3f3;
        border-radius: 8px;
    `;

    const labelStyle = css`
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    `;

    const inputStyle = css`
        padding: 8px;
        margin-right: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
    `;

    const buttonStyle = css`
        padding: 8px 16px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
            background-color: #0056b3;
        }
    `;

    return (
        <form css={formStyle} onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <div>
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
            <button css={buttonStyle} type="submit">Search</button>
        </form>
    );
};

export default NewsSearchComponent;
