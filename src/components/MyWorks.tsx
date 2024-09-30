import styles from "../styles/myworks.module.css";
import text from "../texts";
import MyWorksCard from "./MyWorksCard";

export default function MyWorks() {
    return (
        <div className={styles.myWorksSection} id="my-works">
            <h1>{text.myWorks.title}</h1>
            <p>{text.myWorks.description}</p>
            <MyWorksCard />
        </div>
    );
}
