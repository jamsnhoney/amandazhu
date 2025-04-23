import React from "react";
import "../pwetty/Heropage.css" 
import bioimg1 from "../assets/hero_imgs/hero-bio.png"
import bioimg2 from "../assets/hero_imgs/hero-bio2.png"
import designimg1 from "../assets/hero_imgs/hero-design.png"
import designimg2 from "../assets/hero_imgs/design2.png"

function Heropage() {
    return(
        <main className="heropage-main">
            <div className="heropage-left">
                <h1>bioinformatics work ⤦</h1>
                <div class="bio-img-wrapper">
                    <img class="bio-img-normal" src={bioimg1} />
                    <img class="bio-img-hover" src={bioimg2} />
                </div>
                <h3>biomedical computing honours</h3>
                <p> see the academic works and research and experience <br></br>
                    as an undergraduate bio/cs student. </p>
            </div>
            <div className="heropage-right">
                <h1>design & creatives ˎˊ˗</h1>
                <div class="design-img-wrapper">
                    <img class="design-img-normal" src={designimg1} />
                    <img class="design-img-hover" src={designimg2} />
                </div>
                <h3>art & design is my fun.</h3>
                <p> see my design portfolio, mini creatives & art things i’ve made for fun.   </p>
            </div>
        </main>
    );
}

export default Heropage