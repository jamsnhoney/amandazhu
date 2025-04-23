import React from "react";
import "../pwetty/Extracurriculars.css"

import qux1 from "../assets/extracur/qux.jpg"
import qux2 from "../assets/extracur/qux2.jpg"

import ccdc1 from "../assets/extracur/ccdc1.jpg"
import ccdc2 from "../assets/extracur/ccdc2.jpg"

import qwic1 from "../assets/extracur/qwic1.jpg"
import qwic2 from "../assets/extracur/qwic2.jpg"


function Extracurriculars() {
    return(
        <main className="extracurr-main">
            <div className="extra-title">
                <h1> extracurriculars ⟡⟡</h1>
            </div>
            <div className="extra-GALLERY">
            <div className="extra-left">
                <div class="qux-img-wrapper">
                    <img class="qux-img-normal" src={qux1} />
                    <img class="qux-img-hover" src={qux2} />
                </div>
                    <h3> queen's ux club </h3>
                    <p> my baby, the ux club i co-founded in <br></br>
                        april of 2025 </p>
                </div>
            <div className="extra-mid">
                <div class="ccdc-img-wrapper">
                    <img class="ccdc-img-normal" src={ccdc1} />
                    <img class="ccdc-img-hover" src={ccdc2} />
                </div>
                    <h3> ccdc </h3>
                    <p> i love dance, teaching dance, and <br></br> competitive dance! </p>
            </div>
            <div className="extra-right">
                <div class="qwic-img-wrapper">
                    <img class="qwic-img-normal" src={qwic1} />
                    <img class="qwic-img-hover" src={qwic2} />
                </div>
                    <h3> qwic graphic design </h3>
                    <p> i love womennn yesss </p>
            </div> 
            </div>
        </main>
    );
}

export default Extracurriculars;