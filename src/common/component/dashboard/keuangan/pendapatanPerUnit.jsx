import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import API from "../../../utils/api";
import FilterDates from "../../../utils/date";

const PendapatanPerUnit = () => {

    const [klinik, setKlinik] = useState(null);
    const [Pendapatan, setPendapatan] = useState(null);

    const fetchData = async () => {
        await API.post('keuangan/pendapatanPerUnit', FilterDates)
            .then(res => {
                const data = res.data.result
                const resultName = data.map(x => x.name)
                const resultPendapatan = data.map(x => x.pendapatan)
                setKlinik(resultName)
                setPendapatan(resultPendapatan)
            })

    }

    useEffect(() => {
        const dataInterval = setInterval(fetchData, 15000);
        return () => clearInterval(dataInterval)
    })

    let width, height, gradient;
    function getGradient(ctx, chartArea) {
        const chartWidth = chartArea.right - chartArea.left;
        const chartHeight = chartArea.bottom - chartArea.top;
        if (gradient === null || width !== chartWidth || height !== chartHeight) {
            // Create the gradient because this is either the first render
            // or the size of the chart has changed
            width = chartWidth;
            height = chartHeight;
            gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, "#93C5FD");
            gradient.addColorStop(1, "#1D4ED8");
        }

        return gradient;
    }

    const data = {
        labels: klinik,
        datasets: [
            {
                data: Pendapatan,
                fill: true,
                cubicInterpolationMode: 'monotone',
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // This case happens on initial chart load
                        return null;
                    }
                    return getGradient(ctx, chartArea);
                },
            },
        ]
    };

    const options = {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
                fontColor: "white"
            },
            title: {
                display: true,
                color: "white",
                text: 'Pendapatan Berdasarkan Unit'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8,
                    },
                    color: "white",
                },
                gridLines: {
                    display: false,
                    color: "white"
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 6,
                    },
                    color: "white",
                }
            },
        }
    };

    return <Bar data={data} options={options} />
}

export default PendapatanPerUnit