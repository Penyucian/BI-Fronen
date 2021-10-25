import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";

const KunjunganRI = () => {


    const [kunjunganRI, setkunjunganRI] = useState(null);
    const [kunjunganRITotal, setskunjunganRITotal] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await API.post('pelayanan/kunjunganRI', FilterDates)
                .then(res => {
                    const data = res.data.result
                    const resultLabel = data.map(x => x.label)
                    const resultTotal = data.map(x => x.jml)
                    setkunjunganRI(resultLabel)
                    setskunjunganRITotal(resultTotal)
                })

        }
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
            gradient.addColorStop(0, "#FCA5A5");
            gradient.addColorStop(1, "#B91C1C");
        }

        return gradient;
    }

    const data = {
        labels: kunjunganRI,
        datasets: [
            {
                data: kunjunganRITotal,
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
                text: 'Kunjungan Rawat Inap'
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
                        size: 4,
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
                        size: 4,
                    },
                    color: "white",
                }
            },
        }
    };

    return <Bar data={data} options={options} />
}

export default KunjunganRI