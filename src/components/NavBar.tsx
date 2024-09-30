import { Link } from "react-scroll";
import styles from "../styles/navbar.module.css";
import text from "../texts";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItems}>
                <Link to="my-works" smooth={true} duration={1000}>
                    {text.navbar.myWorks}
                </Link>
                <Link to="about" smooth={true} duration={1000}>
                    {text.navbar.about}
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                    <a href="#" className={styles.contact}>
                        {text.navbar.contact}
                    </a>
                </Link>
            </div>
        </nav>
    );
}
