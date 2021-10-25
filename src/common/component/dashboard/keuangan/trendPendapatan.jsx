import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import API from "../../../utils/api";
import FilterDates from "../../../utils/date";

const TrendPendapatan = () => {

    const [pendapatan, setPendapatan] = useState(null);
    const [pendapatanBulan, setPendapatanBulan] = useState(null);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const fetchData = async () => {
        await API.post('keuangan/trendPendapatan', FilterDates)
            .then(res => {
                const data = res.data.result
                const resultbulan = data.map(obj => months[obj.bulan - 1])
                const resultTotal = data.map(obj => obj.total)
                setPendapatan(resultTotal)
                setPendapatanBulan(resultbulan)
            })

    }

    useEffect(() => {
        const dataInterval = setInterval(fetchData, 15000);
        return () => clearInterval(dataInterval)
    })

    const data = {
        labels: pendapatanBulan,
        datasets: [
            {
                data: pendapatan,
                fill: true,
                cubicInterpolationMode: 'monotone',
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#93C5FD"
            },
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                fontColor: "white"
            },
            title: {
                display: true,
                color: "white",
                text: 'Trend Pendapatan'
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
                    color: "white"
                },
                gridLines: {
                    display: false,
                    color: "white"
                },
            },
            y: {
                ticks: {
                    color: "white"
                }
            },
        }
    };
    return <Line data={data} options={options} />
}

export default TrendPendapatan