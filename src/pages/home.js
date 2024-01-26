import cm from "../img/cm.png";
import gc from "../img/gd.png";
import dc from "../img/dc.png";
import { Outlet, Link } from "react-router-dom";
import "../style/home.css";
import "../style/repeatable.css";

const Home = () => {
  return (
    <section className="home">
      <div className="header">
        <p>
          <Link to="/archive">Archive</Link>
        </p>
        <Link to="/cenas">
          <p className="extra_nudge">!!!!!!</p>
        </Link>
      </div>
      <div className="img-container">
        <img src={cm}></img>
        <img src={gc}></img>
        <img src={dc}></img>
      </div>
      <div className="footer">
        <p>
          <Link to="/">Daniela!Caturra</Link>
        </p>
        <p className="about_nudge">
          <Link to="/about">About</Link>
        </p>
      </div>
      <Outlet />
    </section>
  );
};

export default Home;
