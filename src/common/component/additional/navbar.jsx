import moment from "moment";
import { React, useState } from "react";
import { firstDate, lastDate } from "../../utils/date";
import Name from "../dashboard/private/name";
import { DateFilter, DateTime } from "./dateTime";
import Modal from "./modal";

function Navbar({ between, title }) {

    const [showModal, setShowModal] = useState(false)

    const filterShow = (firstDate, lastDate) => {
        if (firstDate) {
            const first = moment(firstDate).format('DD-MM-YYYY')
            const last = moment(lastDate).format('DD-MM-YYYY')
            return (
                <>
                    <div className="text-white font-bold py-0.5 px-2 bg-blue-700 rounded">
                        {first}
                    </div>
                    <p className="mx-2">ke</p>
                    <div className="text-white font-bold py-0.5 px-2 bg-blue-700 rounded">
                        {last}
                    </div>
                    <button className="bg-gray-600 mx-2 px-1 flex border border-gray-600 
                                    justify-center text-xl material-icons-round 
                                    rounded transition-colors 
                                    hover:bg-gray-700 focus:border-gray-500 
                                    hover:text-gray-300 hover:shadow" type="submit"
                        onClick={() => {
                            window.sessionStorage.removeItem("firstDate")
                            window.location.reload();
                        }}>
                        close
                    </button>
                </>
            )
        }
    }

    const setDate = () => {
        const firstDate = document.getElementById('dateFirst').value
        const lastDate = document.getElementById('dateLast').value

        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("firstDate", firstDate);
            sessionStorage.setItem("lastDate", lastDate);
        } else {
            alert("Sorry, your browser does not support Web Storage...")
        }
    }

    return (
        <>
            <nav className="fixed bg-gray-700 top-0 inset-x-0 ">
                <div className=" px-3 py-2 w-full h-12 flex flex-row justify-between items-center">
                    <div className="w-1/3 flex items-center">
                        <div className="text-white text-base font-bold">SIMRS</div>
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                        <div className="p-1">
                            <div className="text-white text-2xl font-bold">
                                {title}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-row-reverse items-center">
                        <div className="p-1 text-white">
                            <Name />
                        </div>
                    </div>
                </div>
                <div className={`bg-gray-700 px-3 py-1 w-full h-8 text-white flex flex-row items-center ${between}`}>
                    <div className="flex flex-row">
                        {filterShow(firstDate, lastDate)}
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-2">{DateTime()}</div>
                        <button className="bg-gray-600 px-1 flex border border-gray-600 
                                    justify-center text-base material-icons-round 
                                    rounded transition-colors 
                                    hover:bg-gray-700 focus:border-gray-500 
                                    hover:text-gray-300 hover:shadow"
                            id="filterDate"
                            onClick={() => setShowModal(true)}>
                            search
                        </button>
                    </div>
                </div>
            </nav>
            <Modal onClose={() => { setShowModal(false) }} title="Filter Tanggal" show={showModal}>
                <div className="flex items-center justify-center">
                    <input className="px-3 py-1 mr-2 rounded outline-none text-gray-500"
                        defaultValue={DateFilter()}
                        type="date" name="dateFirst" id="dateFirst" />
                    <p>ke</p>
                    <input className="px-3 py-1 mx-2 rounded outline-none text-gray-500"
                        defaultValue={DateFilter()}
                        type="date" name="dateLast" id="dateLast" />
                    <button className="bg-gray-600 px-1 flex border border-gray-600 
                                    justify-center text-xl material-icons-round 
                                    rounded transition-colors 
                                    hover:bg-gray-700 focus:border-gray-500 
                                    hover:text-gray-300 hover:shadow" type="submit"
                        onClick={() => {
                            setShowModal(false)
                            setDate()
                            window.location.reload()
                        }}>
                        search
                    </button>
                </div>
            </Modal>
        </>)
}

export default Navbar