import React from "react";
import "../pwetty/Bioinformatics.css" 

function Bioinformatics() {
    return(
        <main className="bioinfo-main">
            <div className="bio-top">
                <h1>bioinformatics</h1>
                <p>
                as a fourth year biomedical computing student, i’ve had the <br></br>
                opportunity to work on  my own research projects as well as aid others <br></br>
                in theirs. i hope to work in a hospital to help the healthcare field in <br></br>
                clinical research in the bioinformatics field.
                </p>
            </div>
            <div className="bio-paper">
                <h1> AI in DNA analysis research paper </h1>
                <p> A research paper I wrote over 4 months, applying AI techniques into the world of bioinformatics.
                    i learned how to apply different AI techniques: CSPs, HMMs, CNNs into various DNA sequence analyses (Smith-Waterman, MSA, DeepBind, etc.).
                    (written jan-april 2025, for CISC 352 taught by Professor Christian Muise)</p>
                <button> pdf document </button>
            </div>

        </main>
    );
}

export default Bioinformatics