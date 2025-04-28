import Section from "../actual_components/Section";

import bioimg1 from "../assets/hero_imgs/hero-bio.png"
import bioimg2 from "../assets/hero_imgs/hero-bio2.png"
import designimg1 from "../assets/hero_imgs/hero-design.png"
import designimg2 from "../assets/hero_imgs/design2.png"

function Homepage2() {
  return (
    <main className="section-page-main">
      <Section
        title="bioinformatics work ⤦"
        image1={bioimg1}
        image2={bioimg2}
        subheading="biomedical computing honours"
        description="See the academic works and research and experience as an undergraduate bio/cs student."
      />
      <Section
        title="design & creatives ˎˊ˗"
        image1={designimg1}
        image2={designimg2}
        subheading="art & design is my fun."
        description="See my design portfolio, mini creatives & art things I’ve made for fun."
      />
    </main>
  );
}

export default Homepage2;
