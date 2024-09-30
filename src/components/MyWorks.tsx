import styles from "../styles/myworks.module.css";
import text from "../texts";

export default function MyWorks() {
    return (
        <div>
            <div className={styles.myWorksSection} id="my-works">
                <h1>{text.myWorks.title}</h1>
                <p>{text.myWorks.description}</p>
            </div>
        </div>
    );
}
