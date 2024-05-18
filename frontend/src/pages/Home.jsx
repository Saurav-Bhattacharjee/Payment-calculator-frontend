import { Heading } from "../components/Heading"
import { Homebody } from "../components/Homebody"



export const Home=()=>{
    return<div>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div>
                <div className='block h-64 w-96 bg-white p-4 rounded shadow-lg'>
                    <Heading label={"Your Personal Money Tracker App"}/>
                    <Homebody/>

                </div>
           
            </div>
            
        </div>
        
    </div>
}