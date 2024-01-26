import { Link } from "react-router-dom";
import "../../style/arch_cinema.css";
import cin1 from "../../img/arch_cinema/cinema1.png";
import cin2 from "../../img/arch_cinema/cinemateca2.png";
import cin3 from "../../img/arch_cinema/cinemateca3.png";
import cin4 from "../../img/arch_cinema/cinemateca4.png";
import cin5 from "../../img/arch_cinema/cinemateca5.png";
import cin6 from "../../img/arch_cinema/cinemateca8.png";
import cin7 from "../../img/arch_cinema/cinemateca9.png";
import cin8 from "../../img/arch_cinema/cinemateca10.png";
import cin9 from "../../img/arch_cinema/cinemateca11.png";

const Arch_Cinema = () => {
  return (
    <section className="arch_cinema">
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
            (2021) <br></br> Comunication Design / Rebranding <br></br>::::::
            Academic Project
          </p>
        </div>
        <div className="description">
          <p>
            Rebranding of Cinemateca Portuguesa. The new identity shows an
            instituition with personality, distinctive and visually
            recognizable. Build upon the balance between the classic and the
            contemporary, covering all types of audiences. The multiple key
            visuals were inspired by the architecture and the cinema museum
            elements.
          </p>
        </div>
        <div className="showcase">
          <img src={cin1} className="cin"></img>
          <img src={cin2} className="cin"></img>
          <img src={cin3} className="cin"></img>
          <img src={cin4} className="cin"></img>
          <img src={cin5} className="cin"></img>
          <img src={cin6} className="cin"></img>
          <img src={cin7} className="cin"></img>
          <img src={cin8} className="cin"></img>
          <img src={cin9} className="cin"></img>
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

export default Arch_Cinema;
