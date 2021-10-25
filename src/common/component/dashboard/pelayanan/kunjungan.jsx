import React, { useEffect, useState } from "react";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";

const Kunjungan = () => {


    const [kunjungan, setkunjungan] = useState(null);
    const [kunjunganAvg, setkunjunganAvg] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await API.post('pelayanan/kunjungan', FilterDates)
                .then(res => {
                    const data = res.data.kunjungan
                    const dataAvg = res.data.kunjunganAVG
                    setkunjungan(data)
                    setkunjunganAvg(dataAvg)
                })
        }
        const dataInterval = setInterval(fetchData, 15000);
        fetchData()
        return () => clearInterval(dataInterval)
    })

    return (
        <div className="h-full w-full flex flex-col justify-center">
            <div className="text-center font-bold text-white mb-1">Kunjungan</div>
            <div className="flex flex-row">
                <div className="w-1/2 flex-col text-2xl text-center font-bold text-white">
                    {kunjungan}
                    <div className="text-xs font-bold"> total</div>
                </div>
                <div className="w-1/2 flex-col text-2xl text-center font-bold text-white">
                    {kunjunganAvg}
                    <div className="text-xs font-bold"> rata-rata</div>
                </div>
            </div>
        </div>
    )
}

export default Kunjungan