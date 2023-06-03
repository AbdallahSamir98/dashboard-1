import React , {useState} from "react";
import TopNav from "../component/TopNav";
import LeftNav from "../component/LeftNav";
import { Outlet } from "react-router-dom";
const MainNavigation = () => {
    const [isNotActive, setNotActive] = useState("true");
    return (
        <>
            <TopNav  isNotActive={isNotActive} setNotActive={setNotActive}/>
                <div className="d-flex" >
            <LeftNav isNotActive={isNotActive} setNotActive={setNotActive}/>
            <div className="outlet container-fluid " style={{
                paddingLeft : isNotActive ? '4rem' : '16rem' 
            }} >
            <Outlet/>

            </div>
                </div> 
           
                 
        </>
    );
};

export default MainNavigation;
