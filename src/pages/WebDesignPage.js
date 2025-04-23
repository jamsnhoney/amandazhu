import React from "react";
import { useEffect } from "react";
import "../pwetty/WebDesignPage.css"
import dragElement from "../functions/StickersheetFx";

import wdys_img from "../assets/web design dev/whatdoyousee.png"

import sticker_bg from "../assets/stickers/background.png"
import blue_circle_sticker from "../assets/stickers/blue-circle.png"
import brown_square_sticker from "../assets/stickers/brown-square.png"
import green_circle_sticker from "../assets/stickers/green-circle.png"
import purple_rect_sticker from "../assets/stickers/purple-rectangle.png"
import yellow_circ_sticker from "../assets/stickers/yellow-circle.png"

function WebdesignPage() {
    useEffect(()=>{
        const stickers = document.querySelectorAll('.stkr')
        stickers.forEach((sticker)=>{
            dragElement(sticker)
        })
    },[])
    return(
        <main className="web-design-main">
            <div className="web-design-GALLERY">
                <h1> web-design </h1>
                <img src={wdys_img} alt="wompwomp"/>
                <p>whatdoyousee.co</p>
                <p>𓆝 𓆟 𓆞 𓆝 𓆟</p>
            </div>
            {/* <div className="web-design-RIGHT">
                <h1>website  - design + dev .</h1>
                <p>this website .ᐟ</p>
                <p>whatdoyousee.co</p>
                <p>casuallycooldanceclub.co</p>
                <p>couplii.co</p>
            </div> */}
            <p> drag & drop my stickers !</p>
            <div className="sticker-sheet">
                <img src={sticker_bg} alt="." id="bg_stkr"/>
                <img src={blue_circle_sticker} alt="." id="bc_stkr" className = 'stkr'/>
                <img src={brown_square_sticker} alt="." id="bs_stkr" className = 'stkr'/>
                <img src={green_circle_sticker} alt="." id="gc_stkr" className = 'stkr'/>
                <img src={purple_rect_sticker} alt="." id="pr_stkr" className = 'stkr'/>
                <img src={yellow_circ_sticker} alt="." id="yc_stkr" className = 'stkr'/>
            </div>

        </main>
    );
}

export default WebdesignPage;