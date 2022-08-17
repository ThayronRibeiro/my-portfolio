import { useState, useEffect } from "react";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTop, setNavTop] = useState(true);

  useEffect(() => {
    changeColorNav();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeColorNav);
  });

  //logo scroll function
  const changeColorNav = () => {
    if (window.scrollY >= 60) {
      setNavTop(false);
    } else {
      setNavTop(true);
    }
  };
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMovetop = () => {
    if (menuOpen) {
      setMenuOpen(!menuOpen);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <header className={navTop ? "topNavbar" : "scrollNavbar"}>
        <div>
          <strong onClick={handleMovetop}>{`<graco.dev />`}</strong>
        </div>
        {!menuOpen && (
          <div onClick={handleClickMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
        {menuOpen && (
          <div className="menu">
            <FontAwesomeIcon icon={faArrowRight} onClick={handleClickMenu} />
            <hr />
            <ul>
              <li onClick={handleMovetop}>
                <a href="#">Inicio</a>
              </li>
              <li onClick={handleClickMenu}>
                <a href="#aboutme">Sobre mim</a>
              </li>
              <li onClick={handleClickMenu}>
                <a href="#projects">Projetos</a>
              </li>
              <li onClick={handleClickMenu}>
                <a href="#know">Conhecimentos</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
