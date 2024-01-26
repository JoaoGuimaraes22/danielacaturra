import { Link } from "react-router-dom";
import ptf1 from "../../img/arch_pantyfier/pantyfier1.png";
import ptf2 from "../../img/arch_pantyfier/pantyfier2.png";
import ptf3 from "../../img/arch_pantyfier/pantyfier3.gif";
import ptf4 from "../../img/arch_pantyfier/pantyfier4.png";
import ptf5 from "../../img/arch_pantyfier/pantyfier5.png";
import ptf6 from "../../img/arch_pantyfier/pantyfier6.gif";
import ptf7 from "../../img/arch_pantyfier/pantyfier7.png";
import ptf8 from "../../img/arch_pantyfier/pantyfier8.gif";
import "../../style/arch_pantyfier.css";

const Arch_Pantyfier = () => {
  return (
    <section className="arch_pantyfier">
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
        {" "}
        <div className="header_text">
          <p>
            (2023) <br></br> Typography / Type Specimen <br></br>:::::: Personal
            Project
          </p>
        </div>
        <div className="description">
          <p>
            Pantyfier by Daniela Caturra. Geometric display font that embraces
            capital letters, numbers, and glyphs. It combines circles and
            squares, resulting in a bold and impactful design. (Drop me a line
            if you want the type!
          </p>
        </div>
        <div className="showcase">
          <img src={ptf1} className="ptf"></img>
          <img src={ptf2} className="ptf"></img>
          <img src={ptf3} className="ptf"></img>
          <img src={ptf4} className="ptf"></img>
          <img src={ptf5} className="ptf"></img>
          <img src={ptf6} className="ptf"></img>
          <img src={ptf7} className="ptf"></img>
          <img src={ptf8} className="ptf"></img>
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

export default Arch_Pantyfier;
