import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Styles from "./PageNotFound.module.css";

import flag from "../Pics/NotFoundFlag.png";
import Kornometro from "../Pics/Korno.png";

import { Link } from "react-router";

function PageNotFound() {
  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.main}>
        <div className={Styles.top}>
          <div className={Styles.imgError}>
            <img src={flag} alt="NotFoundFlag" />
          </div>
          <div className={Styles.right}>
            <h2>Oops! You're lost.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              facilis provident soluta mollitia dicta assumenda fugiat sed in
              quaerat ut temporibus velit optio natus, sapiente expedita,
              veritatis sit tempora animi!
            </p>
            <Link to={"/"} className={Styles.backHomeButton}>
              Back to Home
            </Link>
          </div>
        </div>
        <div className={Styles.bottom}>
          <div className={Styles.left}>
            <img src={Kornometro} alt="Kornometr" />
          </div>
          <div className={Styles.right}>
            <p>You can try one of these:</p>
            <div className={Styles.pages}>
              <Link to={"/about-us"} className={Styles.links}>About Me</Link>
              <Link to={"/projects"} className={Styles.links}>Projects</Link>
              <Link to={"/skills"} className={Styles.links}>Skills</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
