import { ProjectItem } from "../ProjectItem";
import "./style.css";

import InteractiveCard from "../../assets/projects/interactive-cards.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <div id="projects" className="ProjectsContainer">
      <div className="titleAndInfos">
        <h2>Meus Projetos</h2>
        <p>Confira meus projetos e as tecnologias usadas neles.</p>
      </div>

      <div className="gridProjects">
        <ProjectItem
          title="Formulário Interativo"
          urlGit="https://github.com/ThayronRibeiro/interactive-card-details-form"
          urlLive="https://interactive-card-details-form.herokuapp.com/"
          techs={["HTML, CSS, ReactJS, React Input Mask"]}
          thumb={InteractiveCard}
          description="Formulario interativo que completa as informações do cartão em tempo real."
        />
        <ProjectItem
          title="Formulário Interativo"
          urlGit="https://github.com/ThayronRibeiro/interactive-card-details-form"
          urlLive="https://interactive-card-details-form.herokuapp.com/"
          techs={["HTML, CSS, ReactJS, React Input Mask"]}
          thumb={InteractiveCard}
          description="Formulario interativo que completa as informações do cartão em tempo real."
        />{" "}
        <ProjectItem
          title="Formulário Interativo"
          urlGit="https://github.com/ThayronRibeiro/interactive-card-details-form"
          urlLive="https://interactive-card-details-form.herokuapp.com/"
          techs={["HTML, CSS, ReactJS, React Input Mask"]}
          thumb={InteractiveCard}
          description="Formulario interativo que completa as informações do cartão em tempo real."
        />
      </div>
      <div className="downArrow2">
        <a href="#know">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </div>
  );
};
