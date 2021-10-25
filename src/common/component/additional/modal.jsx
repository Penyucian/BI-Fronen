import React from "react";

function Modal(props) {
    return(
    <>
        <div className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-screen flex items-center justify-center ${props.show ? 
             'bg-gray-900 px-48 bg-opacity-80 z-50 text-white duration-300 ease-in-out' : 'hidden'}`} 
             onClick={props.onClose}>
            <div className="mt-10 p-3 pb-6 w-full bg-gray-700 rounded shadow-lg" onClick={e => e.stopPropagation()}>
                <div className="flex flex-row justify-between">
                    <div className="">{props.title}</div>
                    <button className="material-icons-round" onClick={props.onClose}>close</button>
                </div>
                <div className="divide-y-2 divide-black mt-3">
                    {props.children}
                </div>
            </div>
        </div>
    </>)
}

export default Modal