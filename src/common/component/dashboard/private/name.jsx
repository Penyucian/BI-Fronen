import React, { useEffect, useState } from "react";
import API from "../../../utils/api";

const Name = () => {


    const [name, setName] = useState(null);
    const [on1, setOn1] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await API.get('user/')
                .then(res => {
                    const data = res.data.data
                    setName(data.name)
                })
        }
        fetchData()
    })


    const logout = () => {
        localStorage.removeItem("authorization")
        localStorage.removeItem("group")
        window.location.reload()
    }

    return (
        <>
            <div className="relative">
                <button
                    className="px-2 py-1 rounded-lg
                    hover:bg-gray-700 focus:border-gray-500 
                    hover:text-gray-300 hover:shadow"
                    onClick={() => {
                        if (on1) {
                            setOn1(false)
                        } else {
                            setOn1(true)
                        }
                    }}>
                    {name}
                </button>
                {on1 ?
                    <button
                        className="right-0 top-8 mt-2 absolute bg-white text-gray-900 
                        border border-grey-100 px-2 py-1 rounded-lg
                        hover:bg-gray-700 focus:border-gray-500 
                        hover:text-gray-300 hover:shadow"
                        onClick={logout}>
                        Logout
                    </button> : null}

            </div>
        </>
    )
}

export default Name