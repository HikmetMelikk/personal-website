import styles from "../styles/myworkscard.module.css";
export default function MyWorksCard() {
    return (
        <div className={styles.myWorksCard}>
            <div className={styles.myWorksContent}>
                <h2>My work 1</h2>
                <p className={styles.myWorksCardTitle}>2023 - Product design</p>
                <p className={styles.myWorksCardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium debitis dicta exercitationem delectus nulla,
                    maiores porro dolores neque labore ex incidunt voluptatum,
                    quo nostrum? Quae nostrum error minima cumque cum!
                </p>
                <button className={styles.myWorksCardBtn}>
                    Read case study
                </button>
            </div>
            <div className={styles.myWorksCardImage}>
                <img src="/assets/landing-page-image.png" alt="Work1 Design" />
            </div>
        </div>
    );
}
