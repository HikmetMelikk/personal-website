import styles from "../styles/aboutme.module.css";

export default function AboutMe() {
    return (
        <div className={styles.aboutMeSection} id="about">
            <h1>About Me</h1>
            <div className={styles.aboutMeRow}>
                <p>
                    I create innovative products that will make users'
                    experiences easier with my work in mobile development and in
                    the field. I actively develop mobile applications with
                    Dart/Flutter and write websites with React.js. I work with
                    MongoDB and SQLite as databases and do backend development
                    with Node.js/Express.js.
                </p>
                <img src="assets/myself2.png" alt="Hikmet Melik FIRAT" />
            </div>
        </div>
    );
}
