import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import API from "../../../utils/api";
import FilterDates from "../../../utils/date";

const StatusKlaim = () => {

    const [accept, setAccept] = useState(0);
    const [pending, setPending] = useState(0);
    const [decline, setDecline] = useState(0);
    const [bulan, setBulan] = useState(null);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const fetchData = async () => {
        await API.post('keuangan/klaimStatus', FilterDates)
            .then(res => {
                const data = res.data.result
                const resultbulan = data.map(obj => months[obj.bulan - 1])
                const resultAcc = data.map(obj => obj.accept)
                const resultPen = data.map(obj => obj.pending)
                const resultDec = data.map(obj => obj.refuse)
                setBulan(resultbulan)
                setAccept(resultAcc)
                setPending(resultPen)
                setDecline(resultDec)
            })
    }

    useEffect(() => {
        const dataInterval = setInterval(fetchData, 15000);
        return () => clearInterval(dataInterval)
    })

    const data = {
        labels: bulan,
        datasets: [
            {
                label: "Accept",
                data: accept,
                fill: true,
                cubicInterpolationMode: 'monotone',
                backgroundColor: "#10B981",
                borderColor: "#10B981"
            },
            {
                label: "Pending",
                data: pending,
                fill: false,
                cubicInterpolationMode: 'monotone',
                backgroundColor: "#F59E0B",
                borderColor: "#F59E0B"
            },
            {
                label: "Decline",
                data: decline,
                fill: false,
                cubicInterpolationMode: 'monotone',
                backgroundColor: "#eaeaea",
                borderColor: "#eaeaea"
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
                text: 'Status Klaim BPJS'
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
                offset: true

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

export default StatusKlaim