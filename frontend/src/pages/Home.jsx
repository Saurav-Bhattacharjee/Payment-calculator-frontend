import { Heading } from "../components/Heading"
import { Homebody } from "../components/Homebody"



export const Home=()=>{
    return<div>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div>
                <div className='block h-96 w-196 bg-white mt-8 p-4 rounded shadow-lg'>
                    <Heading label={"Your Personal Money Tracker App"}/>
                    <div className="block w-196 h-32 m-6 bg-blue-300">
                        <Homebody/>
                    </div>
                    

                </div>
           
            </div>
            
        </div>
        
    </div>
}