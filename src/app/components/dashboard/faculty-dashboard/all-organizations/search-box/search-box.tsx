import React, { useState } from 'react';
import './search-box.css';

interface SearchBoxProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                className="search-input" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
                className="search-button" 
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBox;
