import { useContext, useEffect } from "react";
import { Context } from "../Context";
import { Home } from "./Home";
import { Intro } from "./Intro";
import { Dashboard } from "./Dashboard";


export const Router = () => {
    const { ActualScreen, MapScreens, ChangeScreen, showModal} = useContext(Context)
 
    return (
       <div className={`w-full flex flex-col gap-3 relative px-10 bg-primary ${ showModal ? "overflow-hidden w-full h-screen" : "" }`}>
        <header className='absolute py-5'>
            <h1 onClick={() => ActualScreen !== 2 ? ChangeScreen(0) : ChangeScreen(2)} className="cursor-pointer font-poppins font-extrabold text-3xl text-actionDark">MGTK HOTEL</h1>
        </header>
        {
            MapScreens.get(ActualScreen) === "Home" ? 
            <Home />
            : MapScreens.get(ActualScreen) === "Intro" ?
            <Intro />
            : MapScreens.get(ActualScreen) === "Dashboard" ?
            <Dashboard />
            : <div>
                <h3>404</h3>
            </div>
        }   
       </div>
    )

}