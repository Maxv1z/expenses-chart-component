import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'

const BarChart = ({ chartData, chartOptions }) => {
    return (
        <Bar data={chartData} options={chartOptions} />
    )
}

export default BarChart
