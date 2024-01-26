import { Link } from "react-router-dom";
import "../../style/arch_maat.css";
import maat1 from "../../img/arch_maat/maat1.png";
import maat2 from "../../img/arch_maat/maat2.png";
import maat3 from "../../img/arch_maat/maat3.gif";
import maat4 from "../../img/arch_maat/maat4.png";
import maat5 from "../../img/arch_maat/maat5.png";
import maat6 from "../../img/arch_maat/maat6.png";
import maat7 from "../../img/arch_maat/maat7.png";

const Arch_Maat = () => {
  return (
    <section className="arch_maat">
      <div className="header">
        <p>
          <Link to="/archive">Archive</Link>
        </p>
        <p>!!!!!!</p>
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
        {" "}
        <div className="header_text">
          <p>
            (2020) <br></br> Visual Identity / Comunication Materials<br></br>
            :::::: Academic Project
          </p>
        </div>
        <div className="description">
          <p>
            Visual identity for MAAT TRANSVERSAL, a (made-up) cultural program
            for the Museum of Art, Architecture and Technology. Welcomes events
            of an ephemeral nature, consists of a series of works and exhbitions
            which includes fine arts, performance, music, installation, video
            and mixed-media.
          </p>
        </div>
        <div className="showcase">
          <img src={maat1} className="maat1"></img>
          <img src={maat2} className="maat"></img>
          <img src={maat3} className="maat"></img>
          <img src={maat4} className="maat"></img>
          <img src={maat5} className="maat"></img>
          <img src={maat6} className="maat"></img>
          <img src={maat7} className="maat"></img>
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

export default Arch_Maat;
