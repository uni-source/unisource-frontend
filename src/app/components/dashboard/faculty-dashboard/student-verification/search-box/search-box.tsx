import React from 'react';
import './search-box.css';

const SearchBox: React.FC = () => {
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">Search</button>
        </div>
    );
};

export default SearchBox;
