import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChart = () => {
    const xValues = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ];

    const yValues = [
        4.5, 12, 17, 13.5, 7, 10.5, 22.5, 17, 20.5, 4.5,
        22.5, 9, 15, 9, 13, 5, 13, 6, 21, 13,
        15, 19, 14, 7.5, 21, 15, 9, 24, 0, 0
    ];

    const data = {
        labels: xValues,
        datasets: [
            {
                label: ' Values Per Day(lakhs)',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(0,0,255,1.0)',
                borderColor: 'rgba(0,0,255,0.1)',
                data: yValues,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 25,
                ticks: {
                    callback: function (value) {
                        return value + 'L'; // Adds 'L' to each tick value
                    }
                }
            }
        }
    };

    return (
        <div style={{ maxWidth: '1050px', width: '100%' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
