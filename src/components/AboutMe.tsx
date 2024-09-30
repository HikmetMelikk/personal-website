import styles from "../styles/aboutme.module.css";
import text from "../texts";

export default function AboutMe() {
    return (
        <div className={styles.aboutMeSection} id="about">
            <h1>{text.aboutMe.title}</h1>
            <div className={styles.aboutMeRow}>
                <p>{text.aboutMe.description}</p>
                <img src="assets/myself2.png" alt="Hikmet Melik FIRAT" />
            </div>
        </div>
    );
}
