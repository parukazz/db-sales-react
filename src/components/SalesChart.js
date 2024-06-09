import { Tooltip } from "@mui/material";
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, BarChart, Bar } from 'recharts';

const SalesChart = ({ sales }) => {
  return (
    <div>
      <h2>Tren Penjualan</h2>
      <LineChart width={600} height={300} data={sales}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>

      {/* Tabel Batang */}
      <BarChart width={600} height={300} data={sales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default SalesChart;