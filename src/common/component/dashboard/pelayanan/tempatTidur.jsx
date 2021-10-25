import React, { useEffect, useState } from "react";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";

const TempatTidur = () => {


    const [TempatTidurNonCovid, setTempatTidurNonCovid] = useState(null);
    const [TempatTidurCovid, setTempatTidurCovid] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await API.post('pelayanan/ketersediaanBedNonCovid', FilterDates)
                .then(res => {
                    const data = res.data.semuaBedTersedia
                    setTempatTidurNonCovid(data)
                })
            await API.post('pelayanan/ketersediaanBedCovid', FilterDates)
                .then(res => {
                    const data = res.data.semuaBedTersedia
                    setTempatTidurCovid(data)
                })
        }
        const dataInterval = setInterval(fetchData, 15000);
        fetchData()
        return () => clearInterval(dataInterval)
    })

    return (
        <div className="h-full w-full flex flex-row mt-1">
            <div className="w-1/2 flex-col text-2xl text-center font-bold text-white">
                {TempatTidurNonCovid}
                <div className="text-xs font-bold">umum</div>
            </div><div className="w-1/2 flex-col text-2xl text-center font-bold text-white">
                {TempatTidurCovid}
                <div className="text-xs font-bold">covid</div>
            </div>
        </div>
    )
}

export default TempatTidur
