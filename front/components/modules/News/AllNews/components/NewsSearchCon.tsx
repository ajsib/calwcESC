import { useState } from 'react';
import NewsSearch from './NewsSearch';

const NewsSearchCon = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleSearch = () => {
        console.log(`Searching for: ${searchTerm} from ${dateFrom} to ${dateTo}`);
        
    };

    return (
        <NewsSearch
            searchTerm={searchTerm}
            dateFrom={dateFrom}
            dateTo={dateTo}
            setSearchTerm={setSearchTerm}
            setDateFrom={setDateFrom}
            setDateTo={setDateTo}
            handleSearch={handleSearch}
        />
    );
};

export default NewsSearchCon;
