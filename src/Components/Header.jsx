import styles from "./Header.module.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <p>Mojtaba</p>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
