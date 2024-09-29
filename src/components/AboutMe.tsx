import styles from "../styles/aboutme.module.css";

export default function AboutMe() {
    return (
        <div className={styles.aboutMeSection}>
            <h1>About Me</h1>
            <div className={styles.aboutMeRow}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    reiciendis. Ex error magnam quos dicta, adipisci tenetur,
                    vitae animi provident corrupti optio, est quasi. Neque ea,
                    doloremque eaque harum officiis cum illum quibusdam dolorum,
                    animi dolores saepe earum deleniti a.
                </p>
                <img src="assets/myself2.png" alt="" />
            </div>
        </div>
    );
}
