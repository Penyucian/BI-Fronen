import React, { useEffect, useState } from "react";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";

const BarberJohnson = () => {


    const [gdr, setGDR] = useState(0);
    const [ndr, setNDR] = useState(0);
    const [bor, setBOR] = useState(0);

    useEffect(() => {
        async function fetchData() {
            await API.post('pelayanan/barberjohnson', FilterDates)
                .then(res => {
                    const dataGDR = res.data.result.gdr
                    const dataNDR = res.data.result.ndr
                    const dataBOR = res.data.result.bor
                    setGDR(dataGDR)
                    setNDR(dataNDR)
                    setBOR(dataBOR)
                })
        }
        const dataInterval = setInterval(fetchData, 15000);
        fetchData()
        return () => clearInterval(dataInterval)
    })

    return (
        <div className="w-full h-full p-1 bg-blue-500 flex flex-row rounded">
            <div className="w-1/3 h-full flex flex-col items-center">
                <div className="text-sm text-center text-white ">BOR</div>
                <div className="text-lg text-center font-bold text-white">{bor}</div>
                <div className="text-xs text-center text-white ">%</div>
                <div className="text-xs text-center text-white ">(60-85)</div>
            </div>
            <div className="w-1/3 h-full flex flex-col items-center">
                <div className="text-sm text-center text-white ">NDR</div>
                <div className="text-lg text-center font-bold text-white">{ndr}</div>
                <div className="text-xs text-center text-white ">‰</div>
                <div className="text-xs text-center text-white ">{`(<45)`}</div>
            </div>
            <div className="w-1/3 h-full flex flex-col items-center">
                <div className="text-sm text-center text-white ">GDR</div>
                <div className="text-lg text-center font-bold text-white">{gdr}</div>
                <div className="text-xs text-center text-white ">‰</div>
                <div className="text-xs text-center text-white ">{`(<25)`}</div>
            </div>
        </div>
    )
}

export default BarberJohnson