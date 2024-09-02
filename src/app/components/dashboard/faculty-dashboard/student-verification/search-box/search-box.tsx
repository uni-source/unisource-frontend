import React from 'react';
import './search-box.css';

interface SearchBoxProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={onSearchChange} 
            />
            <button className="search-button">Search</button>
        </div>
    );
};

export default SearchBox;
