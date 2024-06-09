import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input className="search-bar" type="text" placeholder="Cari Produk..." onChange={handleSearch} />
  );
};

export default SearchBar;
