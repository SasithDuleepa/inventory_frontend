// 

import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import Axios from 'axios';

export default function Graph1() {
  const [data, setData] = useState([]);
  const [xaxis, setXaxis] = useState([]);
  const [series, setSeries] = useState([]);

  const getData = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/selection/sale_details');
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const seriesData = {};
      data.forEach(item => {
        if (!seriesData[item.product_name]) {
          seriesData[item.product_name] = [];
        }
        seriesData[item.product_name].push(parseInt(item.units));
      });

      const xaxisData = data.map(item => item.date);

      setSeries(Object.keys(seriesData).map(name => ({ name, data: seriesData[name] })));
      setXaxis(xaxisData);
    }
  }, [data]);

  return (
    <div>
      <div>
        <Chart
          options={{
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: xaxis
            }
          }}
          series={series}
          type="line"
          width="500"
        />
      </div>
    </div>
  );
}
