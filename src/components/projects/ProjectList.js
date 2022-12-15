import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";

function ProjectList(props) {
  return (
    <ul className={classes.ul}>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          date={project.date}
          name={project.name}
          description={project.description}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
