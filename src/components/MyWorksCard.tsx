import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/myworkscard.module.css";

interface Project {
    id: number;
    name: string;
    description: string;
    github?: string;
    image?: string;
    button: string;
}

export default function MyWorksCard() {
    const { t: lang } = useTranslation("global");

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const projectsData = lang("projects", {
            returnObjects: true,
        }) as Project[];

        if (Array.isArray(projectsData)) {
            setProjects(projectsData);
        } else {
            console.error("Projects data is not an array:", projectsData);
        }
    }, [lang]);

    const handleClick = (project: Project) => {
        window.open(project.github, "_blank");
    };

    return (
        <>
            {projects.map((project) => (
                <div key={project.id} className={styles.myWorksCard}>
                    <div className={styles.myWorksContent}>
                        <h2>{project.name}</h2>
                        <p className={styles.myWorksCardDescription}>
                            {project.description}
                        </p>
                        {project.github ? (
                            <button
                                className={styles.myWorksCardBtn}
                                onClick={() => handleClick(project)}>
                                {project.button}
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
                            alt={project.name}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}
