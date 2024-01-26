import { Outlet, Link } from "react-router-dom";
import "../../style/arch_breathing.css";
import br1 from "../../img/arch_breathing/breathing1.jpg";
import br2 from "../../img/arch_breathing/breathing2.jpg";
import br3 from "../../img/arch_breathing/breathing3.jpg";
import br4 from "../../img/arch_breathing/breathing4.png";
import br5 from "../../img/arch_breathing/breathing5.jpg";
import br6 from "../../img/arch_breathing/breathing6.jpg";
import br7 from "../../img/arch_breathing/breathing7.jpg";
import br8 from "../../img/arch_breathing/breathing8.jpg";
import br9 from "../../img/arch_breathing/breathing9.jpg";
import br10 from "../../img/arch_breathing/breathing10.gif";
import br11 from "../../img/arch_breathing/breathing11.jpg";
import br12 from "../../img/arch_breathing/breathing12.jpg";
import br13 from "../../img/arch_breathing/breathing13.jpg";
import br14 from "../../img/arch_breathing/IMG_9589.png";

const Arch_Breathing = () => {
  return (
    <section className="arch_breathing">
      <div className="header">
        <p>
          <Link to="/archive">Archive</Link>
        </p>{" "}
        <Link to="/cenas">
          <p>!!!!!!</p>
        </Link>
      </div>
      <div className="archive_container">
        <div className="archive_links_fixed">
          <Link to="/archive/breathing">
            <div className="indv_link indv_link_first">
              <p className="link_text_first">:::: Breathing Shapes</p>
              <p className="link_text">
                Editorial Design / Research Reflection
              </p>
            </div>
          </Link>

          <Link to="/archive/viaggio">
            <div className="indv_link ">
              <p className="link_text_first">:::: Viaggio</p>
              <p className="link_text">Editorial Design / Personal Project </p>
            </div>
          </Link>

          <Link to="/archive/ice">
            <div className="indv_link ">
              <p className="link_text_first">:::: Ice Ice Baby</p>
              <p className="link_text">
                Visual Identity / Comunication Design{" "}
              </p>
            </div>
          </Link>

          <Link to="/archive/pantyfier">
            <div className="indv_link ">
              <p className="link_text_first">:::: Pantyfier</p>
              <p className="link_text">Typography / Typography Specimen </p>
            </div>
          </Link>

          <Link to="/archive/maat">
            <div className="indv_link ">
              <p className="link_text_first">:::: Maat Transversal</p>
              <p className="link_text">
                Visual Identity / Comunication Materials
              </p>
            </div>
          </Link>

          <Link to="/archive/cinema">
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
          <img src={br1} className="img_1"></img>
          <div className="split_space_imgs">
            <img src={br2} className="img_2"></img>
            <img src={br3} className="img_3"></img>
          </div>
          <img src={br4} className="img_4"></img>
          <img src={br5} className="img_5"></img>
          <div className="split_space_imgs">
            <img src={br6} className="img_6"></img>
            <img src={br7} className="img_7"></img>
          </div>
          <img src={br8} className="img_8"></img>
          <img src={br9} className="img_9"></img>
          <img src={br10} className="img_10"></img>
          <img src={br14} className="img_14"></img>
          <div className="img_collumn">
            <img src={br11} className="img_11"></img>
            <img src={br12} className="img_12"></img>
            <img src={br13} className="img_13"></img>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          <Link to="/">Daniela!Caturra</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
    </section>
  );
};

export default Arch_Breathing;
