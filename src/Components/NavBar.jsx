import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navs = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about-us" },
    { id: 3, name: "Skills", link: "/skills" },
    { id: 4, name: "Projects", link: "/projects" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <div className={styles.list}>
      <ul className={styles.desktopMenu}>
        {navs.map((nav) => (
          <li key={nav.id}>
            <NavLink to={nav.link} className={styles.nav}>
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={styles.hamburgerMenu}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <IoClose /> : <IoMenu />}
      </button>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        {navs.map((nav) => (
          <NavLink
            key={nav.id}
            to={nav.link}
            className={styles.mobileNav}
            onClick={closeMenu}
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
