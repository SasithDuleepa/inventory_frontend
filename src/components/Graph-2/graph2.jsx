import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Axios from 'axios';

export default function Graph2() {
  const [inventoryData, setInventoryData] = useState([]);
  const [state, setState] = useState({
    options: {
      labels: ['A', 'B', 'C', 'D', 'E']
    },
    series: [44, 55, 41, 17, 15]
  });

  const fetchData = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/products/searchAll');
      
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
      const seriesData = inventoryData.map(item => parseInt(item.product_SKU));
      const labelsData = inventoryData.map(item => item.product_name);

      setState(prevState => ({...prevState,
        series: seriesData,
        options: {...prevState.options,
          labels: labelsData
        }
      }));
    }
  }, [inventoryData]);

  return (
    <div>
      <h1>Graph2</h1>
      <Chart options={state.options} series={state.series} type="donut" width="380" />
    </div>
  );
}
