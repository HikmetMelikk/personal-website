import { useTranslation } from "react-i18next";
import styles from "../styles/home.module.css";

export default function Home() {
    const [lang, i18n] = useTranslation("global");

    return (
        <div className={styles.homeSection}>
            <div className={styles.homeImage}>
                <img src="/assets/myself2.png" alt="Myself" />
            </div>
            <h1 className={styles.greetingTitle}>{lang("home.title")}</h1>
            <p className={styles.paragraph}>{lang("home.paragraph")}</p>
        </div>
    );
}
