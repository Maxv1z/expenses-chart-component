import './App.scss';
import BarChart from './BarChart';
import UserData from './data.json'
import { useState } from 'react';



function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        label: "Spent",
        data: UserData.map((data) => data.amount),
        backgroundColor: 'hsla(10, 79%, 65%, 1)',
        hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        borderRadius: 5,
      }
    ],
  });

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: () => '',
          label: (tooltipItem) => '$' + tooltipItem.formattedValue,
        },
        enabled: true, // Enable tooltips
        intersect: false,
        mode: 'index',
        position: 'nearest',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        titleFontColor: 'white',
        bodyFontColor: 'white',
        displayColors: false,
        cornerRadius: 5,
        caretSize: 0,
        xPadding: 30,
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        display: false
      }
    },
  };

  return (
    <div className="App">
      <div className="my-balance">
        <div className="balance"><p>My balance</p> <h1>$921.48</h1></div>
        <div className="logo"><svg svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg" > <g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24" /><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" /></g></svg></div>
      </div>
      <div className="speedings">
        <h className="header">Spending - Last 7 days</h>
        <div className="diagram">
          <BarChart chartData={userData} chartOptions={chartOptions} />
        </div>
        <div className='line'></div>
        <div className="bottom">
          <div className="total">Total this month <h1>$478.33</h1></div>
          <div className="percentage">
            +2.4%
            <h1>from last month</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
