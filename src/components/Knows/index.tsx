import "./style.css";

import typeScriptIcon from "../../assets/images/typescript-custom.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faGitSquare,
  faCss3Alt,
  faJs,
  faAws,
  faBootstrap,
  faDiscord,
  faDropbox,
  faGoogleDrive,
  faJira,
  faTrello,
  faTelegram,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

export const Knows = () => {
  return (
    <div id="know" className="KnowsContainer">
      <h2>Conhecimentos</h2>

      <label>Linguagens e afins</label>
      <div className="knowsGrid">
        <div className="knowsItem">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faGitSquare} />
        </div>
        <div className="knowsItem">
          <img src={typeScriptIcon} alt="typescript-logo" />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faBootstrap} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faNpm} />
        </div>
      </div>

      <label>Utilitários</label>
      <div className="knowsGrid">
        <div className="knowsItem">
          <FontAwesomeIcon icon={faDiscord} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faDropbox} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faGoogleDrive} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faJira} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faTrello} />
        </div>
        <div className="knowsItem">
          <FontAwesomeIcon icon={faTelegram} />
        </div>
      </div>
    </div>
  );
};
