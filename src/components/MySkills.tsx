import { useTranslation } from "react-i18next";
import styles from "../styles/myskills.module.css";

export default function MySkills() {
    const [lang] = useTranslation("global");
    return (
        <div className={styles.mySkillsSection}>
            <h2>{lang("mySkills.title")}</h2>
            <ul>
                <li>Dart</li>
                <li>Flutter</li>
                <li>React.js</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Node.js/Express.js</li>
                <li>MongoDB</li>
                <li>SQLite</li>
            </ul>
        </div>
    );
}
