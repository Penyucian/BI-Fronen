import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";


const KunjunganDanPengunjung = () => {

    const [dKBL1Data, setdKBL1Data] = useState(null);
    const [dKBL2Data, setdKBL2Data] = useState(null);
    const [dKJK1Data, setdKJK1Data] = useState(null);
    const [dKJK2Data, setdKJK2Data] = useState(null);
    const [dPBL1Data, setdPBL1Data] = useState(null);
    const [dPBL2Data, setdPBL2Data] = useState(null);

    const fetchData = async () => {
        await API.post('pelayanan/kunjunganDanPengunjung', FilterDates)
            .then(res => {
                const data = res.data
                setdKBL1Data(data.kunjunganBL[0].jumlah);
                setdKBL2Data(data.kunjunganBL[1].jumlah);
                setdKJK1Data(data.kunjunganLP[0].jumlah);
                setdKJK2Data(data.kunjunganLP[1].jumlah);
                setdPBL1Data(data.pengunjungBL[0].jumlah);
                setdPBL2Data(data.pengunjungBL[1].jumlah);
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
            gradient.addColorStop(0, "#F59E0B");
            gradient.addColorStop(1, "#FCD34D");
        }

        return gradient;
    }

    const data = {
        labels: ["K-BL"],
        datasets: [
            {
                label: 'Lama',
                data: [dKBL1Data],
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
            {
                label: 'Baru',
                data: [dKBL2Data],
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
    const data2 = {
        labels: ["K-JK"],
        datasets: [
            {
                label: 'Laki-Laki',
                data: [dKJK1Data],
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
            {
                label: 'Perempuan',
                data: [dKJK2Data],
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
    const data3 = {
        labels: ["P-BL"],
        datasets: [
            {
                label: 'Lama',
                data: [dPBL1Data],
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
            {
                label: 'Baru',
                data: [dPBL2Data],
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
        //indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
                fontColor: "white"
            },
            title: {
                display: false
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
                stacked: true,
                gridLines: {
                    display: false,
                    color: "white"
                },
            },
            y: {
                ticks: {
                    display: false,
                    color: "white"
                },
                stacked: true,
            },
        }
    };

    return <div className="flex">
        <div className="w-1/3 h-full flex flex-col items-center">
            <Bar data={data} options={options} />
        </div>
        <div className="w-1/3 h-full flex flex-col items-center">
            <Bar data={data2} options={options} />
        </div>
        <div className="w-1/3 h-full flex flex-col items-center">
            <Bar data={data3} options={options} />
        </div>
    </div>
}

export default KunjunganDanPengunjung