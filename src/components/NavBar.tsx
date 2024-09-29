import { Link } from "react-scroll";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItems}>
                <Link to="my-works" smooth={true} duration={1000}>
                    My Works
                </Link>
                <Link to="about" smooth={true} duration={1000}>
                    About
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                    <a href="#" className={styles.contact}>
                        Contact
                    </a>
                </Link>
            </div>
        </nav>
    );
}
