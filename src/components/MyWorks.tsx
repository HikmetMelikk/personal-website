import styles from "../styles/myworks.module.css";

export default function MyWorks() {
    return (
        <div>
            <div className={styles.myWorksSection} id="my-works">
                <h1>My works</h1>
                <p>
                    Here you can view the projects I have worked on before and
                    the new projects I am developing. Each one is carefully
                    crafted, customer-focused and visually appealing.
                </p>
            </div>
        </div>
    );
}
