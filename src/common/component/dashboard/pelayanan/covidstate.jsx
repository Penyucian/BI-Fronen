import React, { useEffect, useState } from "react";
import FilterDates from "../../../utils/date";
import API from "../../../utils/api";

const CovidState = () => {
    const [covidState, setCovidState] = useState(0);

    useEffect(() => {
        async function fetchData() {
            await API.post('pelayanan/stateCovid', FilterDates)
                .then(res => {
                    const data = res.data.data
                    if (data) {
                        setCovidState(data)
                    }
                })
        }
        const dataInterval = setInterval(fetchData, 15000);
        return () => clearInterval(dataInterval)
    })

    return (
        <div className="h-full w-full flex flex-col mt-1">
            <div className="text-center text-xs text-white">Infectious Disease</div>
            <div className="text-center font-bold text-sm text-white">Covid-19</div>
            <div className="text-center font-bold text-3xl text-white">{covidState} </div>
        </div>
    )
}

export default CovidState
