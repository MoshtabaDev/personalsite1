import { FaInstagram, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

import me from "../Pics/1.png";
import html from "../Pics/Html5.png";
import css from "../Pics/Css3.png";
import js from "../Pics/JavaScript.png";
import react from "../Pics/React.png";

import styles from "./HomePage.module.css";
import Project from "../Components/Project";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function HomePage() {
  const sendHandler = () => {
    alert("Thank you for Be in touch with Us !");
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.buttomOfHeader}>
        <div>
          <img src={me} alt="image" />
        </div>
        <div className={styles.mtns}>
          <h1>Hi, I'm Mojtaba</h1>
          <h3>Frontend Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            magnam. Similique quisquam fuga vel deserunt doloremque eligendi
            doloribus laudantium atque magni consectetur iure odio expedita nemo
            suscipit et eos at, totam quis error omnis a libero velit. Sit
            asperiores officiis, hic qui nobis molestias tenetur provident
            ducimus? Vel, amet dicta!
          </p>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.left}>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quaerat voluptate non. Quaerat accusantium optio iusto minima
            voluptatum eveniet at libero veniam, delectus earum facere impedit
            tempore ipsum magnam quisquam mollitia doloremque a recusandae
            tenetur nihil? Impedit suscipit reprehenderit quo soluta at
            excepturi, possimus rerum officiis blanditiis ullam assumenda
            aliquam ratione laudantium, nesciunt voluptatibus similique pariatur
            esse quod dicta temporibus autem! Consectetur at quas blanditiis rem
            eum sapiente quisquam corporis?
          </p>
        </div>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <div>
            <img src={html} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div>
            <img src={css} alt="CSS3" />
            <p>Css3</p>
          </div>
          <div>
            <img src={js} alt="JavaScript" />
            <p>Java Script</p>
          </div>
          <div>
            <img src={react} alt="React" />
            <p>React</p>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <h1>Projects</h1>
        <Project />
      </div>
      <div className={styles.contact}>
        <div className={styles.left}>
          <h1>Contact</h1>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <FaInstagram />
              <p>Coderindex</p>
            </div>
            <div className={styles.icon}>
              <FaTelegramPlane />
              <p>Mojideev</p>
            </div>
            <div className={styles.icon}>
              <FaLinkedinIn />
              <p>Mojtabatahmasebi</p>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.inputs}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Message" />
          </div>
          <div className={styles.button}>
            <button onClick={sendHandler}>Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
