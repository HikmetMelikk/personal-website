import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
    const { t: lang, i18n } = useTranslation("global");
    const [currentLanguage, setCurrentLanguage] = useState<string>(
        i18n.language
    );

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "tr" : "en";
        i18n.changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItems}>
                <Link to="my-works" smooth={true} duration={1000}>
                    {lang("navbar.myWorks")}
                </Link>
                <Link to="about" smooth={true} duration={1000}>
                    {lang("navbar.about")}
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                    <a href="#" className={styles.contact}>
                        {lang("navbar.contact")}
                    </a>
                </Link>
                <div
                    onClick={handleChangeLanguage}
                    className={styles.changeLanguageButton}>
                    {currentLanguage === "en" ? "TR 🇹🇷" : "EN 🇺🇸"}
                </div>
            </div>
        </nav>
    );
}
