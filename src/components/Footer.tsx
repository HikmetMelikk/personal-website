import styles from "../styles/footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.copyright}>
            &copy; {currentYear} Hikmet Melik Fırat
        </div>
    );
}
