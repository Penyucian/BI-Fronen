import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import API from "../../../utils/api";
import FilterDates from "../../../utils/date";

const PendapatanCaraBayar = () => {

    const [CaraBayar, setCaraBayar] = useState(0);
    const [Pendapatan, setPendapatan] = useState(0);

    const fetchData = async () => {
        await API.post('keuangan/pendapatanCaraBayar', FilterDates)
            .then(res => {
                const data = res.data.result
                const resultName = data.map(x => x.name)
                const resultPendapatan = data.map(x => x.final)
                setCaraBayar(resultName)
                setPendapatan(resultPendapatan)
            })

    }

    useEffect(() => {
        const dataInterval = setInterval(fetchData, 15000);
        return () => clearInterval(dataInterval)
    })


    const data = {
        labels: CaraBayar,
        datasets: [
            {
                data: Pendapatan,
                fill: true,
                backgroundColor: ['#34D399', '#60A5FA', '#A78BFA', "#F472B6", '#B45309', '#1D4ED8']
            },
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                fontColor: "white",
                font: {
                    size: 8
                }
            },
            title: {
                display: true,
                color: "white",
                text: 'Distribusi Berdasarkan Cara Bayar'
            }
        },
        segmentShowStroke: false,
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
        }
    };

    return <Doughnut data={data} options={options} />
}

export default PendapatanCaraBayar