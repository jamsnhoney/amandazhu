import React from "react";
import "../pwetty/Bioinformatics.css" 

import abstract from "../assets/abstract.png"

function Bioinformatics() {
    return(
        <main className="bioinfo-main">
            <div className="bio-top">
                <h1>bioinformatics</h1>
                <p>
                as a fourth year biomedical computing student, i’ve had the
                opportunity to work on my own research projects as well as aid others 
                in theirs. since taking my first AI course the past year, it has sparked a new
                interest in how AI will change the future of biotech.
                i hope to one day work in a hospital to help the healthcare field in
                clinical research in the bioinformatics field.
                </p>
            </div>
            <div className="bio-container">
                <div className="bio-paper">
                    <h1>AI in DNA analysis research paper</h1>
                    <p> A research paper I wrote over 4 months, applying AI techniques into the world of bioinformatics.
                    i learned how to apply different AI techniques: CSPs, HMMs, CNNs into various DNA sequence analyses (Smith-Waterman, MSA, DeepBind, etc.).
                    (written jan-april 2025, for CISC 352 taught by Professor Christian Muise) </p>
                    <p> Please contact me if you are interested in reading the entire 25 pages and/or would like to see the code!</p>
                </div>
                <div className="bio-paper-img">
                    <img src={abstract} alt="paper-abstract" />
                </div>
            </div>

        </main>
    );
}

export default Bioinformatics
