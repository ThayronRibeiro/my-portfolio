import "./style.css";
import Photo from "../../assets/images/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Apresentation = () => {
  return (
    <>
      <div className="Container">
        <div className="infos">
          <h1>
            Frontend <br />
            Developer
          </h1>
          <p>Lorem ipsum dolor.</p>

          <div className="buttonGroup">
            <button className="gitButton">
              <a href="https://github.com/ThayronRibeiro" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </button>
            <button className="linkedinButton">
              <a
                href="https://www.linkedin.com/in/thayron-graco/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </button>
          </div>
        </div>
        <div className="photo">
          <img alt="photo" src={Photo} />
        </div>
      </div>
      <div className="downArrow">
        <a href="#aboutme">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </>
  );
};
