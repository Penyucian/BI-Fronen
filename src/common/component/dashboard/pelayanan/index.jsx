import React from "react";
import SepuluhBesarPenyakitRJ from "./sepuluhBesarPenyakitRJ";
import SepuluhBesarPenyakitRI from "./sepuluhBesarPenyakitRI";
import TrendKunjungan from "./trendKunjungan";
import KunjunganRJ from "./kunjunganRJ";
import KunjunganRI from "./kunjunganRI";
import KunjunganCaraBayar from "./kunjunganCaraBayar";
import Kunjungan from "./kunjungan";
import TempatTidur from "./tempatTidur";
import CovidState from "./covidstate";
import KunjunganKecamatan from "./kunjunganKecamatan";
import Kondisi from "./kondisi";
import KunjunganDanPengunjung from "./kunjunganDanPengunjung";
import BarberJohnson from "./barberJohnson";
import StockObat from "./stockObat";
import PenggunaanObatTertinggi from "./penggunaanObat";

const Pelayanan = () => {

    return (
        <section className="h-screen w-full pt-20 px-2 pb-2 flex flex-row flex-wrap justify-between">
            <div className="w-1/4 h-full">
                <div className="h-1/3 w-full flex flex-wrap">
                    <div className="w-1/2 h-1/2 p-1">
                        <div className="w-full h-full p-1 bg-yellow-500 flex flex-col items-center rounded">
                            <Kunjungan />
                        </div>
                    </div>
                    <div className="w-1/2 h-1/2 p-1">
                        <div className="w-full h-full p-1 bg-red-700 flex flex-col items-center rounded">
                            <div className="text-center font-bold text-white">TT Tersedia</div>
                            <TempatTidur />
                        </div>
                    </div>
                    <div className="w-1/2 h-1/2 p-1">
                        <BarberJohnson />
                    </div>
                    <div className="w-1/2 h-1/2 p-1">
                        <div className="w-full h-full p-1 bg-red-500 flex flex-col items-center rounded">
                            <CovidState />
                        </div>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <div className="w-full h-full p-1">
                        <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                            <div className="text-center font-bold text-white">Kunjungan dan Pengunjung</div>
                            <KunjunganDanPengunjung />
                        </div>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <div className="w-full h-full flex flex-row">
                        <div className="w-1/2 h-full p-1">
                            <div className="w-full h-full p-1 rounded bg-gray-700 border border-blue-500">
                                <PenggunaanObatTertinggi />
                            </div>
                        </div>
                        <div className="w-1/2 h-full p-1">
                            <div className="w-full h-full p-1 rounded bg-gray-700 border border-blue-500">
                                <StockObat />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 h-full">
                <div className="h-1/3 w-full flex flex-wrap">
                    <div className="w-full h-full p-1">
                        <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                            <KunjunganRJ />
                        </div>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <div className="w-full h-full p-1">
                        <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                            <KunjunganRI />
                        </div>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <div className="w-full h-full p-1">
                        <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                            <KunjunganCaraBayar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 h-full">
                <div className="h-1/2 w-full flex flex-wrap">
                    <div className="w-full h-full p-1">
                        <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                            <TrendKunjungan />
                        </div>
                    </div>
                </div>
                <div className="h-1/2 w-full flex flex-wrap">
                    <div className="w-full h-full p-1">
                        <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                            <KunjunganKecamatan />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 h-full">
                <div className="h-1/6 w-full">
                    <div className="w-full h-full p-1">
                        <Kondisi />
                    </div>
                </div>
                <div className="h-5/6 w-full">
                    <div className="h-1/2 w-full">
                        <div className="w-full h-full p-1">
                            <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                <SepuluhBesarPenyakitRJ />
                            </div>
                        </div>
                    </div>
                    <div className="h-1/2 w-full">
                        <div className="w-full h-full p-1">
                            <div className="w-full h-full p-1 flex flex-col rounded bg-gray-700 border border-blue-500">
                                <SepuluhBesarPenyakitRI />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pelayanan