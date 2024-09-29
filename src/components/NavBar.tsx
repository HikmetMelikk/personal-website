import styles from "../styles/navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItems}>
                <a href="#">My Works</a>
                <a href="#">About</a>
                <a href="#" className={styles.contact}>
                    Contact
                </a>
            </div>
        </nav>
    );
}
