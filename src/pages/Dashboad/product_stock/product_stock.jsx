

import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import './product_stock.css'

const ProductStock = () => {
  const [inventoryData, setInventoryData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/products/available');
      setInventoryData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [state, setState] = useState({
    options: {
      labels: [],
    },
    series: [],
  });

  useEffect(() => {
    if (inventoryData.length > 0) {
      const labels = inventoryData.map((item) => item.product_name);
      const series = inventoryData.map((item) => Number(item.total_quantity));

      setState({
        options: {
          labels: labels,
        },
        series: series,
      });
    }
  }, [inventoryData]);

  return (
    <div className="chart">
      <h2 className='product_stock_title'>Product stock level</h2>
      <Chart options={state.options} series={state.series} type="donut" width="380" />
    </div>
  );
};

export default ProductStock;
