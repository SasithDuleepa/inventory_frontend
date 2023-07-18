import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import './raw_stock.css'

const RawStock = () => {
  const [inventoryData, setInventoryData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/dashboad/raw_avalable');
      setInventoryData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (inventoryData.length > 0) {
      const labels = inventoryData.map((item) => item.raw_material_name);
      const series = inventoryData.map((item) => Number(item.available_quantity));

      setState({
        options: {
          labels: labels,
        },
        series: series,
      });
    }
  }, [inventoryData]);

  const [state, setState] = useState({
    options: {
      labels: [],
    },
    series: [],
  });

  return (
    <div className="chart">
      <h2 className='row_stock_h'>Raw stock level</h2>
      <Chart options={state.options} series={state.series} type="donut" width="410" />
    </div>
  );
};

export default RawStock;
