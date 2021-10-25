import { useEffect, useState } from "react";
import moment from "moment";
import Login from "./common/component/login";
import Dashboard from "./common/component/dashboard";
import { firstDate } from "./common/utils/date";


function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [between, setBetween] = useState("justify-between")

    useEffect(() => {
        const middleware = () => {
            const date = new Date()
            const auth = localStorage.getItem("authorization")
            window.sessionStorage.setItem("lastDate", moment(date).format(`YYYY-MM-DD`));
            window.sessionStorage.setItem("limit", 10);
            if (auth) {
                setIsAuth(true)
            }
        }
        const filter = () => {
            if (firstDate) {
                setBetween("justify-between")
            } else {

            }
        }
        filter()
        middleware()
    })

    return (
        <>
            {isAuth ? <Dashboard between={between} /> : <Login />}
        </>
    );
}

export default App;
