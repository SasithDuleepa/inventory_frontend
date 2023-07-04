import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

// export default function Graph3() {
//   const[api_data, setApi_data] = useState([]);
//   const [data_list, set_data_List] = useState([]);
//   const [category_list, set_category_listList] = useState([]);
//   const [state, setState] = useState({
//     options: { chart: {id: 'bar-chart', },
//       plotOptions: {bar: {
//           horizontal: true,
//           dataLabels: {
//             position: 'top',
//             formatter: function (val) {
//               return val + '%';
//             },
//           },
//         },
//       },
//       xaxis: {
//         categories: ['category A', 'category B', 'category C'],
//       },
//     },
//     series: [
//       {
//         data: [10, 18, 13],
//       },
//     ],
//   });

//   const fetchData = async () => {
//     const response = await Axios.get('http://localhost:8080/dashboad/sale_catergory')
//     console.log(response.data)
//     setApi_data(response.data);
    
//   }
//   useEffect(() => {
//     fetchData();
//   },[])


//   return (
//     <div>
//       <Chart
//         options={state.options}
//         series={state.series}
//         type="bar"
//         width="380"
//       />
//     </div>
//   );
// }

export default function Graph3() {
  const [api_data, setApi_data] = useState([]);
  const [state, setState] = useState({
    options: {
      chart: { id: 'bar-chart' },
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
        categories: [], // Initialize with an empty array
      },
    },
    series: [
      {
        data: [], // Initialize with an empty array
      },
    ],
  });

  const fetchData = async () => {
    const response = await Axios.get('http://localhost:8080/dashboad/sale_catergory');
    
    setApi_data(response.data);
    const categories = response.data.map(item => item.product_name); // Extract product_name from api_data
    const data = response.data.map(item => item.total_units); // Extract total_units from api_data
    setState(prevState => ({
      ...prevState,
      options: {
        ...prevState.options,
        xaxis: {
          categories: categories, // Update categories
        },
      },
      series: [
        {
          data: data, // Update data
        },
      ],
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Chart options={state.options} series={state.series} type="bar" width="380" />
    </div>
  );
}

