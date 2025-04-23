import React from "react";
import "../pwetty/GraphicIllustration.css"

// import sojuprint_img from "../assets/graphic_imgs/soju-print.jpg"
import sojuposter_img from  "../assets/graphic_imgs/soju-poster.jpg"
import stickers_img from "../assets/stickers/imamanda.jpg"

function GraphicIllustrationPage() {
    return(
        <main className="graphill-main">
            <div className="graphill-top">
                <h1>graphics &amp; illustration.</h1>
                <p>soju !</p>
                <p>personalized sticker sheets</p>
                <p></p>
            </div>
            <div className="graphill-left">
                {/* <img src={sojuprint_img} alt="wompwomp"/> */}
                <img src={sojuposter_img} />
                <p>"if i had a soju brand"</p> 
            </div>
            <div className="graphill-MIDDLE">
                <img src={stickers_img} />
                <p> "if i had a sticker sheet"</p>

            </div>
            {/* <div className="graphill-right">

            </div> */}
        </main>
    );
}

export default GraphicIllustrationPage