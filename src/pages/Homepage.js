import React, { useEffect, useState } from "react";
import "../pwetty/Homepage.css";
import { dragElement } from "../functions/HomepageStickersFx";

import sticker1 from "../assets/icons/cake.png";
import sticker2 from "../assets/icons/coffee.png";
import sticker3 from "../assets/icons/turtle.png";

function Homepage() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Check size on initial load
    window.addEventListener("resize", handleResize); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const stickers = document.querySelectorAll('.stkr');
      stickers.forEach((sticker) => {
        sticker.style.position = "absolute"; 
        dragElement(sticker);
      });
    }
  }, [isMobile]);

  return (
    <main className="homepage-main">
      <div className="homepage-LEFT">
        {/* Left side can be used for other content if needed */}
      </div>

      <div className="homepage-title">
        <h1>hi, i’m amanda zhu ᵎᵎ</h1>
        <p>
          hello! i’m amanda, a biomedical computing student. outside of bioinformatics. <br />
          i love design and going on mini creative journeys .ᐟ  ꒰ᐢ. .ᐢ꒱
        </p>
        <button>what i've been up to recently ...</button>
      </div>

      <div className={`homepage-RIGHT ${isMobile ? "no-stickers" : ""}`}>
        {/* Hide text on mobile */}
        {!isMobile && <p>drag & drop stickers !</p>}
        {!isMobile && (
          <>
            <img src={sticker1} alt="sticker 1" className="stkr" />
            <img src={sticker2} alt="sticker 2" className="stkr" />
            <img src={sticker3} alt="sticker 3" className="stkr" />
          </>
        )}
      </div>
    </main>
  );
}

export default Homepage;
