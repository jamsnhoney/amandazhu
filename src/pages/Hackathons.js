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
                <p> dr. dodo | qhacks 2024 (QU) | 2nd place | best AI in education </p>
                <p> weve | hackville 2024 (sheridan) | 2nd place </p>
                <p> paper orchestra | methacks 2023 (TMU) | 3rd place </p>
            </div>
            <div className="hackathons-RIGHT">
                <img src={weve_img}/>
            </div>
        </main>
    );
}

export default HackathonsPage