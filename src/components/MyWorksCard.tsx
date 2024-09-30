import { useEffect, useState } from "react";
import projectData from "../my-projects.json";
import styles from "../styles/myworkscard.module.css";
interface Project {
    id: number;
    name: string;
    description: string;
    github?: string;
    image?: string;
}

export default function MyWorksCard() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectData);
    }, []);

    const handleClick = (project: Project) => {
        window.open(project.github, "_blank");
    };

    return projects.map((project) => (
        <div className={styles.myWorksCard}>
            <div className={styles.myWorksContent}>
                <h2>{project.name}</h2>
                <p className={styles.myWorksCardDescription}>
                    {project.description}
                </p>
                {project.github ? (
                    <button
                        className={styles.myWorksCardBtn}
                        onClick={() => handleClick(project)}>
                        Explore Project on Github
                    </button>
                ) : null}
            </div>
            <div className={styles.myWorksCardImage}>
                <img
                    src={
                        project.image
                            ? project.image
                            : "assets/landing-page-image.png"
                    }
                    alt="Work1 Design"
                />
            </div>
        </div>
    ));
}
