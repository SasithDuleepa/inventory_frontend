import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function Graph3() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: 'bar-chart',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
            formatter: function (val) {
              return val + '%';
            },
          },
        },
      },
      xaxis: {
        categories: ['category A', 'category B', 'category C'],
      },
    },
    series: [
      {
        data: [10, 18, 13],
      },
    ],
  });

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="380"
      />
    </div>
  );
}
