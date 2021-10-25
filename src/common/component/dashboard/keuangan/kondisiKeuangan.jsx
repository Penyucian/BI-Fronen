import React, { useEffect, useState } from "react";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";

const KondisiKeuangan = () => {


    const [kondisi, setKondisi] = useState('indikator');
    const [bg, setBG] = useState('bg-green-500');

    useEffect(() => {
        async function fetchData() {
            await API.post('keuangan/pendapatan', FilterDates)
                .then(res => {
                    const dataKondisi = res.data.kondisi
                    if (dataKondisi === "Keuangan Rumah Sakit Sedang Kurang Aman") {
                        setKondisi(dataKondisi)
                        setBG('bg-yellow-500')
                    } else if (dataKondisi === "Keuangan Rumah Sakit Sedang Tidak Aman") {
                        setKondisi(dataKondisi)
                        setBG('bg-red-500')
                    } else if (dataKondisi === "Keuangan Rumah Sakit Aman") {
                        setKondisi(dataKondisi)
                        setBG('bg-green-500')
                    }
                })
        }
        const dataInterval = setInterval(fetchData, 15000);
        fetchData()
        return () => clearInterval(dataInterval)
    })

    return (
        <div className={`w-full h-full p-1 flex items-center justify-center text-white rounded font-bold ${bg}`}>
            {kondisi}
        </div>
    )
}

export default KondisiKeuangan