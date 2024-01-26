import { Link } from "react-router-dom";
import daniGif from "../img/danielagif.gif";
import "../style/cenas.css";

const Cenas = () => {
  return (
    <section className="cenas">
      <div className="header">
        <p>
          <Link to="/">Daniela!Caturra</Link>
        </p>
      </div>
      <div className="content">
        <img src={daniGif} className="cenas_img"></img>
      </div>
    </section>
  );
};

export default Cenas;
