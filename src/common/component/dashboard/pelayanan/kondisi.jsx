import React, { useEffect, useState } from "react";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";

const KondisiPelayanan = () => {


    const [kondisi, setKondisi] = useState('indikator');
    const [bg, setBG] = useState('false');

    useEffect(() => {
        async function fetchData() {
            await API.post('pelayanan/barberjohnson', FilterDates)
                .then(res => {
                    const dataKondisi = res.data.result.indikator
                    if (dataKondisi === "Pelayanan kurang aman") {
                        setKondisi(dataKondisi)
                        setBG(true)
                    } else if (dataKondisi === "Pelayanan keadaan aman") {
                        setKondisi(dataKondisi)
                    }
                })
        }
        const dataInterval = setInterval(fetchData, 15000);
        fetchData()
        return () => clearInterval(dataInterval)
    })

    return (
        <div className={
            bg ?
                `w-full h-full p-1 flex flex-row rounded bg-yellow-500 flex text-white text-center text-2xl font-bold items-center justify-center`
                : `w-full h-full p-1 flex flex-row rounded bg-green-500 flex text-white text-center text-2xl font-bold items-center justify-center`}>
            {kondisi}
        </div>
    )
}

export default KondisiPelayanan