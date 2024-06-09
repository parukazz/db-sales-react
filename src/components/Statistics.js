import React from "react";

const Statistics = ({ sales }) => {
  const totalSales = sales.reduce((total, sale) => total + sale.sales, 0);
  const totalRevenue = sales.reduce((total, sale) => total + sale.revenue, 0);
  const bestProduct = sales.reduce((max, sale) => sale.sales > max.sales ? sale : max, sales[0]);

  return (
    <div>
      <h2>Statistik Penjualan</h2>
      <p>Total Penjualan: {totalSales}</p>
      <p>Total Pendapatan: {totalRevenue}</p>
      <p>Best Selling Product: {bestProduct ? bestProduct.product : 'N/A'}</p>
    </div>
  );
};

export default Statistics;