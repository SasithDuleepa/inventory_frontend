// import React, { useState } from 'react'
// import Chart from "react-apexcharts";
// import Axios from 'axios';

// export default function Graph4() {

	
// 	const[state, setState] = useState(
// 		{
// 			options: {
// 			  chart: {
// 				id: "basic-bar"
// 			  },
// 			  xaxis: {
// 				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
// 			  }
// 			},
// 			series: [
// 			  {
// 				name: "series-1",
// 				data: [30, 40, 45, 50, 49, 60, 70, 91]
// 			  }
// 			]
// 		  }
// 	)

// 	const fetch = async() =>{
// 		const res =await Axios.get('http://localhost:8080/dashboad/stock_products')
// 		console.log(res.data)
// 	}
// 	fetch()
//   return (
// 	<div>
// 		<div>
// 		<Chart
//               options={state.options}
//               series={state.series}
//               type="bar"
//               width="500"
//             />
// 		</div>
// 	</div>
//   )
// }
 

import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import Axios from 'axios';

export default function Graph4() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: "series-1",
        data: []
      }
    ]
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/dashboad/stock_products');
    //   console.log(res.data);
      const categories = res.data.map(item => item.product_name); // Extract product_name from the fetched data
      const data = res.data.map(item => item.total_units); // Extract total_units from the fetched data
      setState(prevState => ({
        ...prevState,
        options: {
          ...prevState.options,
          xaxis: {
            categories: categories // Assign the fetched categories directly
          }
        },
        series: [
          {
            name: "series-1",
            data: data // Assign the fetched data directly
          }
        ]
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        />
      </div>
    </div>
  );
}
