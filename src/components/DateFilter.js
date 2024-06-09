import React from "react";

const DateFilter = ({ setDateRange }) => {
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({ ...prev, [name]: value}));
  };

  return (
    <div>
      <input type="date" name="start" onChange={handleDateChange} />
      <input type="date" name="end" onChange={handleDateChange} />
    </div>
  );
};

export default DateFilter;