import { Link } from "react-router-dom";
import "../../style/arch_ice.css";
import ice1 from "../../img/arch_ice/ice1.gif";
import ice2 from "../../img/arch_ice/ice2.png";
import ice3 from "../../img/arch_ice/ice3.gif";
import ice4 from "../../img/arch_ice/ice4.png";
import ice5 from "../../img/arch_ice/ice5.gif";
import ice6 from "../../img/arch_ice/ice6.png";
import ice7 from "../../img/arch_ice/ice7.png";

const Arch_Ice = () => {
  return (
    <section className="arch_ice">
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
            (April, 2023) <br></br> Visual Identity / Communication Design{" "}
            <br></br>:::::: Personal Project
          </p>
        </div>
        <div className="description">
          <p>
            Ice Ice Baby, located in the charming Príncipe Real neighbourhood,
            is a savoury gelateria that breaks concepts. Original and authentic,
            it is a haven for adventurous and daring palates who want to explore
            new and different flavours.
          </p>
        </div>
        <div className="showcase">
          <img src={ice1} className="ice"></img>
          <img src={ice2} className="ice"></img>
          <img src={ice3} className="ice"></img>
          <img src={ice4} className="ice"></img>
          <img src={ice5} className="ice"></img>
          <img src={ice6} className="ice"></img>
          <img src={ice7} className="ice"></img>
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

export default Arch_Ice;
