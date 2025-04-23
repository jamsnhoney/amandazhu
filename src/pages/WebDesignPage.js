import React from "react";
import { useEffect } from "react";
import "../pwetty/DesignStuffPage.css"
import dragElement from "../functions/StickersheetFx";

import sticker_bg from "../assets/stickers/background.png"
import blue_circle_sticker from "../assets/stickers/blue-circle.png"
import brown_square_sticker from "../assets/stickers/brown-square.png"
import green_circle_sticker from "../assets/stickers/green-circle.png"
import purple_rect_sticker from "../assets/stickers/purple-rectangle.png"
import yellow_circ_sticker from "../assets/stickers/yellow-circle.png"

function DesignStuffPage() {
    useEffect(()=>{
        const stickers = document.querySelectorAll('.stkr')
        stickers.forEach((sticker)=>{
            dragElement(sticker)
        })
    },[])
    return(
        <main className="design-main">
            <div className="design-title">
                <h1> design & creatives </h1>
                <p>
                    i like creating for the sake of creating. ui, illustrations, product design, silly animations, a little bit of everything. even since co-founding a ux club, i find myself drawn to designing and marketing roles. i love the creative process and making s***. if you think it's bad, i think it's fun.
                </p>
                <p>
                    more drag & drop stickers here btw. ➝ ➝ ➝ ➝
                </p>
            </div>
            <div className="design-gallery">
                <p>
                    thing
                </p>
                <p>
                    thing
                </p>
                <p>
                    thing
                </p>
                <p>
                    thing
                </p>
                <p>
                    thing
                </p>
            </div>
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

export default DesignStuffPage;