import React, { useEffect, useState } from "react";
import API from "../../../utils/api";
import FilterDates from "../../../utils/date";
import Gauge from 'react-gauge-chart'

const Pendapatan = () => {


    const [Pendapatan, setPendapatan] = useState(0);
    const [PendatanAvg, setPendatanAvg] = useState(0);
    const [percent, setPercent] = useState(0);

    const fetchData = async () => {
        await API.post('keuangan/pendapatan', FilterDates)
            .then(res => {
                const data = res.data
                const targetTahun = data.targetTahun.pop()
                setPendatanAvg(data.totalavg)
                setPendapatan(data.total)
                const math = data.total / targetTahun.total
                if (math > 1) {
                    setPercent(1)
                } else {
                    setPercent(math)
                }
            })
    }

    useEffect(() => {
        const dataInterval = setInterval(fetchData, 15000);
        fetchData()
        return () => clearInterval(dataInterval)
    })

    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-2/4 w-full p-1">
                <div className="h-full p-1 rounded flex flex-col justify-center items-center">
                    <div className="text-sm text-center text-white mb-1">Target Pendapatan</div>
                    <div >
                        <Gauge
                            id="gauge-chart1"
                            colors={["#F87171", "#FCD34D", "#34D399"]}
                            arcWidth={0.4}
                            nrOfLevels={3}
                            hideText={false}
                            arcPadding={0}
                            cornerRadius={0}
                            percent={percent}
                            needleColor="#FFFFFF"
                            needleBaseColor="#FFFFFF"
                        /></div>
                </div>
            </div>
            <div className="h-1/4 w-full p-1">
                <div className="h-full p-1 bg-yellow-500 rounded flex flex-col justify-center items-center">
                    <div className="text-sm text-center text-white ">Pendapatan Total</div>
                    <div className="text-3xl font-bold text-white">{Pendapatan}</div>
                </div>
            </div>
            <div className="h-1/4 w-full p-1">
                <div className="h-full p-1 bg-red-700 rounded flex flex-col justify-center items-center">
                    <div className="text-sm text-center text-white ">Pendapatan rata-rata</div>
                    <div className="text-3xl font-bold text-white">{PendatanAvg}</div>
                </div>
            </div>
        </div>
    )
}

export default Pendapatan
