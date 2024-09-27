import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <div className={styles.homeSection}>
            <div className={styles.homeImage}>
                <img src="public/assets/myself2.png" alt="Myself" />
            </div>
            <h1>👋🏻 Hi, I am Hikmet Melik FIRAT</h1>
            <p>
                As a passionate Software Engineer with expertise in both mobile
                and web development, I am dedicated to building innovative
                digital solutions that seamlessly integrate functionality and
                user experience. My focus is on designing and developing
                scalable applications that meet both business needs and end-user
                expectations.
            </p>
        </div>
    );
}
