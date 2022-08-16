import "./style.css";
import Photo from "../../assets/images/photo.jpg";

export const Apresentation = () => {
  return (
    <div className="Container">
      <div className="infos">
        <h1>
          Frontend <br />
          Developer
        </h1>
        <p>Lorem ipsum dolor.</p>

        <div className="buttonGroup">
          <button className="gitButton">GitHub</button>
          <button className="linkedinButton">LinkedIn</button>
        </div>
      </div>
      <div className="photo">
        <img alt="photo" src={Photo} />
      </div>
    </div>
  );
};
