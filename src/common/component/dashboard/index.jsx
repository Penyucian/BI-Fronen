import React, { useEffect, useState } from "react";
import Loading from "../../utils/loading";
import Navbar from "../additional/navbar";
import Keuangan from "./keuangan";
import Pelayanan from "./pelayanan/index";

const Dashboard = ({ between }) => {

    const groupAccess = parseInt(localStorage.getItem('group'))

    if (groupAccess === 1) {
        return (

            <div className="bg-gray-700">
                <Navbar between={between} title={"BI"} />
                <Pelayanan />
                <Keuangan />
            </div>
        )
    } else if (groupAccess === 2) {
        return (

            <div className="bg-gray-700">
                <Navbar between={between} title={"BI Pelayanan"} />
                <Pelayanan />
            </div>
        )
    } else if (groupAccess === 3) {
        return (
            <div className="bg-gray-700">
                <Navbar between={between} title={"BI Keuangan"} />
                <Keuangan />
            </div>
        )
    }
}

export default Dashboard