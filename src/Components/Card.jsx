import Styles from "./Card.module.css";

import html from "../Pics/Html5.png";
import css from "../Pics/Css3.png";
import js from "../Pics/JavaScript.png";
import react from "../Pics/React.png";
import github from "../Pics/github.png";
import sass from "../Pics/sass.png";

function Card() {
  const cardDetails = [
    {
      id: 1,
      img: html,
      h3: "HTML5",
      h4: "It defines the content and structure of web content,It defines the content and structure of web content,It defines the content and structure of web content",
    },
    {
      id: 2,
      img: css,
      h3: "CSS3",
      h4: "CSS can define color, font, text alignment, size, borders, spacing, layout and many other typographic characteristics",
    },
    {
      id: 3,
      img: js,
      h3: "JavaScript",
      h4: "JavaScript is the dominant client-side scripting language of the Web",
    },
    {
      id: 4,
      img: react,
      h3: "React",
      h4: `aims to make building user interfaces based on components more "seamless"`,
    },
    {
      id: 5,
      img: github,
      h3: "Git & Github",
      h4: "Git is a version control system that intelligently tracks changes in files and GitHub is a proprietary developer platform that allows developers to create, store, manage, and share their code",
    },
    {
      id: 6,
      img: sass,
      h3: "Sass",
      h4: "extends standard CSS capabilities by adding variables, nesting, mixins, functions, and partial file imports.",
    },
  ];

  return (
    <div className={Styles.container}>
      {cardDetails.map((item) => (
        <div className={Styles.cardContainer} key={item.id}>
          <div className={Styles.top}>
            <img src={item.img} alt="Html" />
            <h3>{item.h3}</h3>
          </div>
          <div className={Styles.descriptions}>
            <p>{item.h4}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
