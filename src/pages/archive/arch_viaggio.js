import { Link } from "react-router-dom";
import viaggio1 from "../../img/viaggio1.gif";
import "../../style/arch_viaggio.css";

const Arch_Viaggio = () => {
  return (
    <section className="arch_viaggio">
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
        <div className="header_text">
          <p>
            (2021) <br></br> Editorial Design <br></br>:::::: Personal Project
          </p>
        </div>
        <div className="description">
          <p>
            Physical memories. The diary of a passionate collector of travel
            memories, which takes her back to an important and challenging
            period in her life, during Erasmus in Brescia, Italy.
          </p>
        </div>
        <div className="showcase">
          <img src={viaggio1} className="viaggio"></img>
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

export default Arch_Viaggio;
