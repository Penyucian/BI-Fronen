import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import API from "../../../utils/api";
import FilterDates from "../../../utils/date";

const TrendKunjungan = () => {

    const [kunjunganRJ, setKunjuganRJ] = useState(null);
    const [kunjunganRI, setKunjuganRI] = useState(null);
    const [kunjunganbulan, setKunjuganbulan] = useState(null);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const fetchData = async () => {
        await API.post('pelayanan/trendMasukRumahSakit', FilterDates)
            .then(res => {
                const dataRJ = res.data.kunjunganRJ
                const dataRI = res.data.kunjunganRI
                const resultbulan = dataRJ.map(obj => months[obj.bulan - 1])
                const resultTotalRJ = dataRJ.map(obj => obj.jml)
                const resultTotalRI = dataRI.map(obj => obj.jml)
                setKunjuganRJ(resultTotalRJ)
                setKunjuganRI(resultTotalRI)
                setKunjuganbulan(resultbulan)
            })
    }

    useEffect(() => {
        const dataInterval = setInterval(fetchData, 15000);
        return () => clearInterval(dataInterval)
    })

    const data = {
        labels: kunjunganbulan,
        datasets: [
            {
                label: "Rawat Jalan",
                data: kunjunganRJ,
                fill: true,
                cubicInterpolationMode: 'monotone',
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#93C5FD"
            },
            {
                label: "Rawat Inap",
                data: kunjunganRI,
                fill: false,
                borderColor: "#3B82F6"
            }
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
                text: 'Trend Kunjungan'
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

export default TrendKunjungan