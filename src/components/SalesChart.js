import { Tooltip } from "@mui/material";
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

const SalesChart = ({ sales }) => {
  return (
    <div className="diagram-wrapper">
      <div className="chart-box">
        <h3>Tren Penjualan</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={sales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tabel Batang */}
      <div className="chart-box">
        <h3>Komparasi Produk</h3>
        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={sales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" stroke="#8884d8" />
            <YAxis />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;