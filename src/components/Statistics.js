import React from "react";

const Statistics = ({ sales }) => {
  const totalSales = sales.reduce((total, sale) => total + sale.sales, 0);
  const totalRevenue = sales.reduce((total, sale) => total + sale.revenue, 0);
  const bestProduct = sales.reduce((max, sale) => sale.sales > max.sales ? sale : max, sales[0]);

  return (
    <div className="statistics-wrapper">
      <div className="card-statistics">
        <img className="icon-stat" src="/assets/img/icon-buy.png" alt="Buy Icon" />
        <div className="desc">
          <h3>{totalSales}</h3>
          <p>Total Penjualan</p>
        </div>
      </div>
      <div className="card-statistics">
        <img className="icon-stat" src="/assets/img/icon-sell.png" alt="Sell Icon" />
        <div className="desc">
          <h3>{totalRevenue}</h3>
          <p>Total Pendapatan</p>
        </div>
      </div>
      <div className="card-statistics">
        <img className="icon-stat" src="/assets/img/icon-favorite.png" alt="Favorite Icon" />
        <div className="desc">
          <h3>{bestProduct ? bestProduct.product : 'N/A'}</h3>
          <p>Best Selling Product</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;