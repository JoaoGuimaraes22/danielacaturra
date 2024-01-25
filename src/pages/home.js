import cm from "../img/cm.png";
import gc from "../img/gd.png";
import dc from "../img/dc.png";
import { Outlet, Link } from "react-router-dom";
import style from "../style/home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="header">
        <p>
          <Link to="/archive">Archive</Link>
        </p>
        <p>!!!!!!</p>
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
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
      <Outlet />
    </section>
  );
};

export default Home;
