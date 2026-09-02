import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import styles from "./Skills.module.css";
function Skills() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftHand}>
          <h1>Skills</h1>
          <h5>
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs.
          </h5>
        </div>
        <div className={styles.rightHand}>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
