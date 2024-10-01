import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/myworkscard.module.css";

interface Project {
    id: number;
    name: string;
    description: string;
    github?: string;
    image?: string;
}

export default function MyWorksCard() {
    const { t: lang } = useTranslation("global"); // Use "lang" as the translation function

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Retrieve the projects data directly from i18next without parsing
        const projectsData = lang("projects", {
            returnObjects: true,
        }) as Project[];

        if (Array.isArray(projectsData)) {
            setProjects(projectsData); // Set the state if it's a valid array
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
                            alt={project.name}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}
