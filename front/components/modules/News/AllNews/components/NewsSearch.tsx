/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SearchIcon from '@/components/UI/icons/SearchIcon';

interface NewsSearchProps {
    searchTerm: string;
    dateFrom: string;
    dateTo: string;
    setSearchTerm: (term: string) => void;
    setDateFrom: (date: string) => void;
    setDateTo: (date: string) => void;
    handleSearch: () => void;
}

const formStyle = css`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    gap: 2rem;
    align-items: center;
`;

const inputStyle = css`
    border: 1px solid #ccc;
`;

const inputContainerStyle = css`
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    height: 100%;
    input {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        background-color: var(--secondary-color);
        color: white;
        border: 1px solid white;
        cursor: pointer;
        display: flex;
        transition: all 0.1s ease-in-out;
        height: 100%;
        padding: 0.5rem;
        &:hover {
            border: 1px solid #ccc;
        }
    }
`;

const textInputStyle = css`
    width: 50%;
`;

const dateInputStyle = css`
    width: 20%;
`;

const NewsSearch: React.FC<NewsSearchProps> = ({ searchTerm, dateFrom, dateTo, setSearchTerm, setDateFrom, setDateTo, handleSearch }) => (
    <form css={formStyle} onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <div css={[inputContainerStyle, textInputStyle]}>
            <label htmlFor="searchTerm">Search Term:</label>
            <input name='searchTerm' css={inputStyle} type="text" placeholder="Search news" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div css={[inputContainerStyle, dateInputStyle]}>
            <label htmlFor="dateFrom">Date From:</label>
            <input name='dateFrom' css={inputStyle} type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        </div>
        <div css={[inputContainerStyle, dateInputStyle]}>
            <label htmlFor="dateTo">Date To:</label>
            <input name='dateTo' css={inputStyle} type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
        <div css={inputContainerStyle}>
            <label htmlFor="search">&nbsp;</label>
            <button type="submit">
                <SearchIcon size={20} />
            </button>
        </div>
    </form>
);

export default NewsSearch;
