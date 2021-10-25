import { useEffect, useState } from "react";
import moment from "moment";

export const DateTime = () => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu']
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', "Juni", 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    const today = new Date();
    const current = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`

    const [dateTime, setDateTime] = useState(current)

    useEffect(() => {
        const id = setInterval(() => setDateTime(current),1000)
        return () => {
            clearInterval(id)
        }
    })

    return dateTime
}
export const DateFilter = () => {
    const today = new Date();
    const current = moment(today).format('YYYY-MM-DD')

    return current
}