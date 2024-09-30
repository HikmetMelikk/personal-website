import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/contactme.module.css";
import text from "../texts";

export default function ContactMe() {
    const handleEmailClick = () => {
        window.location.href = "mailto:hikmetmelik@gmail.com";
    };
    const handleInstagramClick = () => {
        window.open("https://instagram.com/bir.doksanbes", "_blank");
    };
    const handleLinkedInClick = () => {
        window.open(
            "https://www.linkedin.com/in/hikmet-melik-firat-355279203/",
            "_blank"
        );
    };
    const handleGithubClick = () => {
        window.open("https://github.com/HikmetMelikk", "_blank");
    };
    return (
        <div className={styles.contactMeCard} id="contact">
            <img
                src="/assets/ellipse-left.png"
                alt="top left corner image"
                className={styles.topLeftQuarterCircle}
            />
            <img
                src="/assets/ellipse-right.png"
                alt="bottom right corner image"
                className={styles.bottomRightQuarterCircle}
            />
            <div className={styles.contactMeContent}>
                <h1>{text.contactMe.title}</h1>
                <p className={styles.contactMeCardDescription}>
                    {text.contactMe.description}
                </p>
                <div className={styles.contactMeButtonRow}>
                    <button
                        className={styles.contactMeCardBtn}
                        onClick={handleEmailClick}>
                        <FaEnvelope /> hikmetmelik@gmail.com
                    </button>
                    <button
                        className={styles.socialMediaButton}
                        onClick={handleInstagramClick}>
                        <FaInstagram />
                    </button>
                    <button
                        className={styles.socialMediaButton}
                        onClick={handleLinkedInClick}>
                        <FaLinkedin />
                    </button>
                    <button
                        className={styles.socialMediaButton}
                        onClick={handleGithubClick}>
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
}
