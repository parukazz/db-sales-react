import React, { useState, useEffect } from "react";
import { getSales } from './api';
import SalesTable from './components/SalesTable';
import SalesChart from './components/SalesChart';
import DateFilter from "./components/DateFilter";
import SearchBar from "./components/SearchBar";
import Statistics from "./components/Statistics";

function App() {
  const [sales, setSales] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  useEffect(() => {
    getSales().then(response => {
      setSales(response.data);
      setFilteredSales(response.data);
    });
  }, []);

  useEffect(() => {
    let data = sales;

    if (searchQuery) {
      data = data.filter(item => item.product.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (dateRange.start && dateRange.end) {
      data = data.filter(item => new Date(item.date) >= new Date(dateRange.start) && new Date(item.date) <= new Date(dateRange.end));
    }

    setFilteredSales(data);
  }, [sales, searchQuery, dateRange]);

  return (
    <div className="App">
      <h2>Dashboard Analitik Penjualan</h2>
      <DateFilter setDateRange={setDateRange} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <Statistics sales={filteredSales} />
      <SalesChart sales={filteredSales} />
      <SalesTable sales={filteredSales} />
    </div>
  );
}

export default App;
