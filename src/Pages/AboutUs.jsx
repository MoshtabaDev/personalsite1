import Footer from "../Components/Footer";
import Header from "../Components/Header";

import me from "../Pics/1.png";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.all}>
        <div className={styles.aboutMe}>
          <h1>About Me</h1>
          <p>I am Mojtaba, A Front-End Developer</p>
          <ul>
            <li>Location: IRAN</li>
            <li>Skills: HTML, CSS, JavaScript, React, Git & GitHub</li>
            <li>Lnaguages: Persian, English</li>
          </ul>
        </div>
        <img src={me} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
