import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import Axios from 'axios';

export default function Graph1() {
	const [data, setData] = useState([]);
	const[state, setState] = useState(
		{
			options: {
			  chart: {
				id: "basic-bar"
			  },
			  xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
			  }
			},
			series: [
			  {
				name: "series-1",
				data: [30, 40, 45, 50, 49, 60, 70, 91]
			  },
			  {
				name: "series-2",
				data: [20, 50, 85, 20, 49, 69, 10, 81]
			  }
			]
		  }
	)
	const getData = async( )=>{
		try {
			const res = await Axios.get('http://localhost:8080/sales/daily');
			setData(res.data);
			

		} catch (error) {
			console.log(error)
		}
	};
	useEffect(() => {
		getData();
	  }, []);
	useEffect(() => {
		if(data.length > 0){
			const seriesData = data.map(item=>item.sale_date);//xaxis
			const labelsData = data.map(item=>item.product_name);//serias name
			const seriesData1 = data.map(item=>parseInt(item.total_quantity_sold));//seriasdata

			// console.log(data)
			console.log(seriesData)

			console.log(labelsData)
			console.log(seriesData1)
			

			// setState(prevState=>({
			// 	...prevState,
			// 	series:{...prevState.series,
			// 	  name:labelsData,
			// 	  data:seriesData1},
			// 	  options:{...prevState.options,
			// 		  xaxis:{
			// 			  categories:seriesData
			// 		  }}
				

			// }))
		}
	},[data])  
	
  return (
	<div>
		<div>
		{/* <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            /> */}

<Chart
  options={{
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }}
  series={[
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    {
      name: "series-2",
      data: [20, 50, 85, 20, 49, 69, 10, 81]
    }
  ]}
  type="line"
  width="500"
/>

		</div>
	</div>
  )
}
 