import { Outlet, Link } from "react-router-dom";
import "../style/archive.css";

const Archive = () => {
  return (
    <section className="archive">
      <div className="header">
        <p>
          <Link to="/archive">Archive</Link>
        </p>
        <Link to="/cenas">
          <p>!!!!!!</p>
        </Link>
      </div>
      <div className="archive_links">
        <Link to="breathing">
          <div className="indv_link indv_link_first">
            <p className="link_text_first">:::: Breathing Shapes</p>
            <p className="link_text">Editorial Design / Research Reflection</p>
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
            <p className="link_text">Visual Identity / Comunication Design </p>
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
      <div className="footer">
        <p>
          <Link to="/">Daniela!Caturra</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
      <Outlet />
    </section>
  );
};

export default Archive;
