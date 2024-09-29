import styles from "../styles/myskills.module.css";

export default function MySkills() {
    return (
        <div>
            <div className={styles.mySkillsSection}>
                <h2>My Skills</h2>
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
        </div>
    );
}
