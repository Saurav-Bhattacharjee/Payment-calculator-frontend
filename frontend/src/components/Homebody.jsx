import React from "react";
import {useNavigate} from "react-router-dom";

export const Homebody =()=>{
    const navigate =useNavigate();
    return<div>
        <div className="flex flex-col items-center">
            <div className="mb-4">        
                Want to calculate your  expense?? Click the button below:
            </div>
            <div >
            <button className="  bg-black text-white hover:bg-green-300 font-bold rounded shadow-lg py-2 px-4" onClick={()=>{
                
                navigate('/Calculation')
            }}>
                Click Here 
            </button>
            </div>
        </div>

    </div>

}