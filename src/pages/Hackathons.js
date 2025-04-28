import React from "react";
import "../pwetty/Hackathons.css"

import weve_img from "../assets/hackathons/weve.jpeg"

function HackathonsPage() {
    return(
        <main className="hackathons-MAIN">
            <div className="hackathons-TITLE">
                <h1>hackthon projects .</h1>
            </div>
            <div className="hackathons-LEFT">

            </div>
            <div className="hackathons-RIGHT">
                <img src={weve_img}/>
            </div>
        </main>
    );
}

export default HackathonsPage