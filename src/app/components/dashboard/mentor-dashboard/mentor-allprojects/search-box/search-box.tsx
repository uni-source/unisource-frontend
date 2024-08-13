import React, { useState } from "react";
import "./search-box.css";

const SearchBox: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search by Project Name..."
                value={query}
                onChange={handleInputChange}
            />
            <button className="search-button" onClick={() => onSearch(query)}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;
