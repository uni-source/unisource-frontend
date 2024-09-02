import React, { useState } from 'react';
import './search-box.css';

interface SearchBoxProps {
    onSearch: (query: string) => void;
}

const SearchBox: React.FC= () => {

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search Project"
            />
            <button className="search-button">
                Search
            </button>
        </div>
    );
};

export default SearchBox;
