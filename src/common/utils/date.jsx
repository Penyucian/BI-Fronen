let filterDates
const lastDate = window.sessionStorage.getItem("lastDate");
const firstDate = window.sessionStorage.getItem("firstDate");
const limit = window.sessionStorage.getItem("limit");

if (firstDate) {
    filterDates = {
        dateFirst: firstDate,
        dateLast: lastDate,
        limit: limit
    }
} else {
    filterDates = {
        dateLast: lastDate,
        limit: limit
    }
}

export default filterDates
export { lastDate, firstDate }