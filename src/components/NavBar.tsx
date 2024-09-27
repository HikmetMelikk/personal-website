import styles from "../styles/navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItems}>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">About Me</a>
            </div>
        </nav>
    );
}
