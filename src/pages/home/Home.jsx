/*Home Page*/

import "./home.css"
import NaviBar from "../../components/NaviBar/NaviBar";
import React from "react";
import Head from "../../components/Head/Head";
import Featured from "../../components/featured/Featured";


const Home = ()=> {
    return(
        <div>
            <NaviBar/>
            <Head/>
            <div className="HomeContainer">
                <Featured/>
            </div>

            </div>
    )
}
export default Home;