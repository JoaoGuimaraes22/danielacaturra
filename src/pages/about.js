import styles from "../style/about.css";
import "../style/repeatable.css";
import { Link } from "react-router-dom";
import dani_about from "../img/dani_about.png";
import dc from "../img/dc.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="sub_container">
          <p>danielacaturradesign@gmail.com</p>
          <p>(+351) 916 011 264</p>

          <a
            href="https://www.instagram.com/itsdanielacaturra/"
            target="_blank"
          >
            <p>Instagram</p>
          </a>
          <a href="https://www.behance.net/danielacaturra" target="_blank">
            <p>Behance</p>
          </a>
        </div>
        <div className="sub_container sub_container_nf">
          <p>Visual Identity</p>
          <p>Comunication Design</p>
          <p>Editorial Design</p>
          <p>Typography</p>
          <p>Web Design</p>
        </div>
        <div className="sub_container sub_container_nf">
          <p>Communication & Graphic Designer!!!</p>
          <p>
            Raised in Oeiras, Portugal. Multidisciplinary and dedicated to
            creative projects seen as a way of evolution and challeging bold,
            colorful (most of the time) and experimental approaches. Passionate
            about all forms of art.
          </p>
          <p>Outside of the box thinker and doer. </p>
        </div>
      </div>
      <div className="container">
        <div className="sub_container_exp"></div>
        <div className="pad_extra">
          <p>::::::</p>
          <br></br>
          <p>Experience</p>
        </div>
        <div className="sub_container_exp ">
          <div className="exp_block">
            <p>Sep. 2023 — Dec. 2023</p>
            <p>MinimalDEsign (Brescia, Italy // Erasmus + Programme)</p>
            <p>Graphic Designer</p>
          </div>
          <div className="exp_block">
            <p>2020 — 2023</p>
            <p>Freelancer</p>
            <p>Logo for ‘Chuncky Island’</p>
            <p>Costumised clothing Design</p>
            <p>
              Comunication materials for an exhibition (Associação de Moda
              Africana)
            </p>
          </div>
          <div className="exp_block">
            <p>Oct. 2022 — Dec. 2022</p>
            <p>38 graus</p>
            <p>Communication Designer (Social Media Content)</p>
          </div>
          <div className="exp_block">
            <p>Sep. 2021 — Dec. 2021</p>
            <p>APEEN</p>
            <p>Web designer; Collaborative work</p>
          </div>
          <div className="exp_block">
            <p>Sep. 2020 — Jan. 2021</p>
            <p>Carca Crew Clothing</p>
            <p>Graphic Designer & Photoshoot Coordinator</p>
            <p>Art Direction & Make-up Artist</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sub_container_edu"></div>
        <div className="sub_container_edu_mid">
          <p>::::::</p>
          <br></br>
          <p>Education</p>
        </div>
        <div className="sub_container_edu">
          <div className="edu_block">
            <p>2022 — 2023</p>
            <p>ETIC, BA (Hons) Graphic Design</p>
          </div>
          <div className="edu_block">
            <p>2020 — 2022 </p>
            <p>ETIC, HN Diploma in Communication and Multimedia Design</p>
          </div>
          <div className="edu_block">
            <p>April 2020</p>
            <p>Lisbon Digital School Intensive Marketing Digital Course</p>
          </div>
          <div className="edu_block">
            <p>2016 — 2019 </p>
            <p>Escola Secundária Quinta do Marquês (Humanistic Area) </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sub_container_work"></div>
        <div className="sub_container_work_mid">
          <p>::::::</p>
          <br></br>
          <p>Workshop</p>
        </div>
        <div className="sub_container_work">
          <div className="work_block">
            <p>2023</p>
            <p>Riso Printing, Desisto</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div></div>
        <img src={dani_about} className="dani_about_img"></img>
      </div>
      <div className="footer">
        <img src={dc} className="dc_img"></img>
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

export default About;
