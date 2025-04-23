import React from "react";
import { useEffect } from "react";
import "../pwetty/Homepage.css"
import { dragElement } from "../functions/HomepageStickersFx";

import sticker1 from "../assets/icons/cake.png"
import sticker2 from "../assets/icons/coffee.png"
import sticker3 from "../assets/icons/turtle.png"

function Homepage() {
    useEffect(() => {
        const stickers = document.querySelectorAll('.stkr');
        stickers.forEach((sticker) => {
            sticker.style.position = "absolute"; 
            dragElement(sticker);
        });
    }, []);
    
    return(
        <main className="homepage-main">
            <div className="homepage-LEFT">
            </div>
            <div className="homepage-title">
                <h1> hi, i’m amanda zhu ᵎᵎ  </h1>
                <p> hello! i’m amanda, a biomedical computing student. outside of bioinformatics. <br></br>
                     i love design and going on mini creative journeys .ᐟ  ꒰ᐢ. .ᐢ꒱</p>
                <button> what i've been up to recently ...</button>
            </div>
            <div className="homepage-RIGHT">
                <p> drag & drop stickers ! </p>
                <img src={sticker1} alt="." id="gc_stkr" className = 'stkr'/>
                <img src={sticker2} alt="." id="pr_stkr" className = 'stkr'/>
                <img src={sticker3} alt="." id="yc_stkr" className = 'stkr'/>
            </div>

        </main>
    );
}

export default Homepage;