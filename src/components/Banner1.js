import React from "react";
import "../pwetty/Banner1.css"

import smiski1 from "../assets/smiski/meditatesmiski.png"


function Banner1() {
    return(
        <main className="banner1-main">
            <div className="banner1-img">
                <img src={smiski1}></img>
            </div>
        </main>
    );
}

export default Banner1;