import React from "react";
import KondisiKeuangan from "./kondisiKeuangan";
import Pendapatan from "./pendapatan";
import PendapatanCaraBayar from "./pendapatanCaraBayar";
import PendapatanPerCaraBayar from "./pendapatanPerCaraBayar";
import PendapatanPerJenis from "./pendapatanPerJenis";
import PendapatanPerPenunjang from "./pendapatanPerPenunjang";
import PendapatanPerRanap from "./pendapatanPerRanap";
import PendapatanPerUnit from "./pendapatanPerUnit";
import StatusKlaim from "./statusKlaim";
import TrendPendapatan from "./trendPendapatan";

const Keuangan = () => {

    return (
        <div className="h-screen w-full pt-20 px-2 pb-2 flex flex-row flex-wrap justify-between">
            <div className="w-2/12 h-full flex flex-col">
                <div className="h-2/3 w-full">
                    <Pendapatan />
                </div>
                <div className="h-1/3 w-full">
                    <div className="w-full h-full p-1">
                        <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                            <PendapatanCaraBayar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-10/12 h-full flex flex-row">
                <div className="w-1/3 h-full flex flex-col h-full">
                    <div className="w-full h-1/6 flex flex-col">
                        <div className="w-full h-full p-1">
                            <KondisiKeuangan />
                        </div>
                    </div>
                    <div className="w-full h-5/6 flex flex-col">
                        <div className="w-full h-1/2">
                            <div className="w-full h-full p-1">
                                <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                    <TrendPendapatan />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-1/2">
                            <div className="w-full h-full p-1">
                                <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                    <StatusKlaim />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col h-full">
                    <div className="h-2/3">
                        <div className="w-full h-full p-1">
                            <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                <PendapatanPerUnit />
                            </div>
                        </div>
                    </div>
                    <div className="h-1/3">
                        <div className="w-full h-full p-1">
                            <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                <PendapatanPerCaraBayar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col h-full">
                    <div className="h-1/3">
                        <div className="w-full h-full p-1">
                            <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                <PendapatanPerPenunjang />
                            </div>
                        </div>
                    </div>
                    <div className="h-1/3">
                        <div className="w-full h-full p-1">
                            <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                <PendapatanPerRanap />
                            </div>
                        </div>
                    </div>
                    <div className="h-1/3">
                        <div className="w-full h-full p-1">
                            <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                <PendapatanPerJenis />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keuangan