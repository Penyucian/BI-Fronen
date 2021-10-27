import axios from "axios";
import React, { useState } from "react";

function Login(props) {

    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    // handle button click of login form
    const handleLogin = () => {
        setLoading(true)
        if ((username.value && password.value) !== "") {
            axios.post("http://149.28.157.18:2000/api/user/login",
                {
                    username: username.value,
                    password: password.value
                }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    if (response.data.data) {
                        if (response.data.data) {
                            localStorage.setItem("authorization", response.data.data);
                            localStorage.setItem("group", response.data.group)
                            setError(null)
                            window.location.reload();
                        }
                        return response.data;
                    } else {
                        setLoading(false)
                        setError(response.data.message)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            setLoading(false)
            setError("Masukkan username dan password")
        }
    }

    return (

        <div className="h-screen bg-gray-900 flex items-center justify-center text-white">
            {loading ? <div className="text-white p-1 bg-blue-700 rounded-lg">Loading...</div> :
                <div className="flex flex-col">
                    <div className="font-bold">Selamat Datang</div>
                    <h1 className="text-3xl font-bold">Real-Time Business Intelligence <br /> Rumah Sakit</h1>
                    <br />
                    {error && <>
                        <div className="px-3 py-2 w-full h-auto bg-red-500 rounded">
                            {error}
                        </div>
                        <br />
                    </>
                    }
                    <div className="">
                        Username <br />
                        <input required className="
                        w-full px-3 py-2 bg-gray-900 border border-gray-500 rounded outline-none
                        hover:border-gray-100
                        focus:border-4 focus:border-blue-500"
                            placeholder="username"
                            type="text"
                            {...username}
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="mt-2">
                        Password <br />
                        <input className="
                        w-full px-3 py-2 mb-2 bg-gray-900 border border-gray-500 rounded outline-none
                        hover:border-gray-100
                        focus:border-4 focus:border-blue-500"
                            placeholder="password"
                            type="password"
                            {...password}
                            autoComplete="new-password"
                            required
                        />
                    </div>
                    <input className="w-full bg-gray-900 text-right outline-none cursor-pointer" type="button" value="Lupa Password" /><br />
                    <input className="w-full px-3 py-2 bg-blue-500 border border-blue-500 rounded font-bold outline-none
                    hover:bg-blue-600 cursor-pointer
                    focus:border-4 focus:border-blue-500 focus:bg-blue-700"
                        value="Sign in"
                        type="button"
                        onClick={handleLogin}
                        disabled={loading}
                    />
                </div>}
        </div>
    )
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login