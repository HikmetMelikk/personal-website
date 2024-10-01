import { useTranslation } from "react-i18next";
import styles from "../styles/aboutme.module.css";

export default function AboutMe() {
    const [lang] = useTranslation("global");

    return (
        <div className={styles.aboutMeSection} id="about">
            <h1>{lang("aboutMe.title")}</h1>
            <div className={styles.aboutMeRow}>
                <p>{lang("aboutMe.description")}</p>
            </div>
        </div>
    );
}
