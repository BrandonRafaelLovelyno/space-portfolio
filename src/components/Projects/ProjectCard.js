//Import the styles
import "../../styles/Projects/ProjectCard.css";

function ProjectCard({ text, imageUrl, title }) {
  return (
    <div className="image-container">
      <div className="before">
        <h1 className="before-heading">{title}</h1>
        <p className="before-main-text">{text}</p>
      </div>
      <img src={imageUrl} />
    </div>
  );
}

export default ProjectCard;
