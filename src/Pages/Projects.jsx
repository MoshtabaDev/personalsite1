import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

import Styles from "./Projects.module.css";
import Project from "../Components/Project";

function Projects() {
  return (
    <div>
      <Header />
      <div className={Styles.container}>
        <div className={Styles.leftHand}>
          <h1>My Projects</h1>
          <h5>Here are some of the Selected projects I've Worked on.</h5>
        </div>
        <div className={Styles.rightHand}>
          <Project />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
