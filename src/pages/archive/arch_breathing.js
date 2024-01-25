import { Outlet, Link } from "react-router-dom";
import "../../style/arch_breathing.css";
import br1 from "../../img/arch_breathing/br1.png";
import br2 from "../../img/arch_breathing/br2.png";
import br3 from "../../img/arch_breathing/br3.png";
import br4 from "../../img/arch_breathing/br4.png";
import br5 from "../../img/arch_breathing/br5.png";
import br6 from "../../img/arch_breathing/br6.png";
import br7 from "../../img/arch_breathing/br7.png";
import br8 from "../../img/arch_breathing/br8.png";
import brvid from "../../img/arch_breathing/br8.mp4";
import br9 from "../../img/arch_breathing/br9.png";
import br10 from "../../img/arch_breathing/br10.gif";
import br11 from "../../img/arch_breathing/br11.png";
import br12 from "../../img/arch_breathing/br12.png";
import br13 from "../../img/arch_breathing/br13.png";
import br14 from "../../img/arch_breathing/br14.png";

const Arch_Breathing = () => {
  return (
    <section className="arch_breathing">
      <div className="header">
        <p>
          <Link to="/archive">Archive</Link>
        </p>
        <p>!!!!!!</p>
      </div>
      <div className="archive_container">
        <div className="archive_links_fixed">
          <Link to="breathing">
            <div className="indv_link indv_link_first">
              <p className="link_text_first">:::: Breathing Shapes</p>
              <p className="link_text">
                Editorial Design / Research Reflection
              </p>
            </div>
          </Link>

          <Link to="viaggio">
            <div className="indv_link ">
              <p className="link_text_first">:::: Viaggio</p>
              <p className="link_text">Editorial Design / Personal Project </p>
            </div>
          </Link>

          <Link to="ice">
            <div className="indv_link ">
              <p className="link_text_first">:::: Ice Ice Baby</p>
              <p className="link_text">
                Visual Identity / Comunication Design{" "}
              </p>
            </div>
          </Link>

          <Link to="pantyfier">
            <div className="indv_link ">
              <p className="link_text_first">:::: Pantyfier</p>
              <p className="link_text">Typography / Typography Specimen </p>
            </div>
          </Link>

          <Link to="maat">
            <div className="indv_link ">
              <p className="link_text_first">:::: Maat Transversal</p>
              <p className="link_text">
                Visual Identity / Comunication Materials
              </p>
            </div>
          </Link>

          <Link to="cinema">
            <div className="indv_link ">
              <p className="link_text_first">:::: Cinemateca Portuguesa </p>
              <p className="link_text">Rebranding / Comunication Design </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="arch_content">
        <div className="header_text">
          <p>
            (2023) <br></br> Editorial Design / Photography / Art Direction /
            Video / Web Design / Research Reflection <br></br>:::::: Academic
            Project
          </p>
        </div>
        <div className="description">
          <p>
            Breathing Shapes reflects on the synesthetic and emotional
            relationship we have with objects. As subjects immersed in a
            consumer society, we live surrounded by objects and are defined in
            terms of identity by and through them. Understanding how people
            interact with and attach meaning to objects can help us better
            understand their values, needs, and behaviors. (Object) Noun,
            anything that is visible or tangible and is relatively stable in
            form.
          </p>
          <br></br>
          <p>IG @breathing_shapes // Pictures by @iichaubert</p>
          <br></br>
          <p>
            Exhibited on How I Learned to Stop Worrying and Love the Bomb at
            Galerias Municipais, Pavilhão Branco (June 2023)
          </p>
        </div>
        <div className="showcase">
          <img src={br1}></img>
          <div className="split_space_imgs">
            <img src={br2} className="img_resize"></img>
            <img src={br3} className="img_resize"></img>
          </div>
          <img src={br4} className="img_resize_3"></img>
          <img src={br5} className="img_resize_2"></img>
          <div className="split_space_imgs">
            <img src={br6} className="img_resize"></img>
            <img src={br7} className="img_resize"></img>
          </div>
          <img src={br8}></img>
          <video src={brvid} autoPlay className="video_resize"></video>
          <img src={br9} className="img_resize_3"></img>
          <img src={br10} className="img_resize"></img>
          <img src={br11}></img>
          <img src={br12}></img>
          <img src={br13}></img>
          <img src={br14}></img>
        </div>
      </div>
    </section>
  );
};

export default Arch_Breathing;
