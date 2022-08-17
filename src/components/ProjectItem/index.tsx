import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

type ProjectItem = {
  title: string;
  urlGit: string;
  urlLive: string;
  techs: [string];
  thumb?: string;
  description: string;
};

export const ProjectItem = ({
  title,
  urlGit,
  urlLive,
  techs,
  thumb,
  description,
}: ProjectItem) => {
  return (
    <div className="cardProject">
      <h4 className="title">{title}</h4>
      <img src={thumb} alt="" className="thumbCard" />
      <p className="techs">{techs}</p>
      <p className="description">{description}</p>
      <div className="buttonsArea">
        <div className="gitButton">
          <a href={urlGit} target="_blank">
            <FontAwesomeIcon icon={faGitAlt} />
            <span>GIT REPO</span>
          </a>
        </div>
        <div className="liveButton">
          <a href={urlLive} target="_blank">
            <FontAwesomeIcon icon={faGlobeAmericas} />
            <span>LIVE DEMO</span>
          </a>
        </div>
      </div>
    </div>
  );
};
