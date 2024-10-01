import { useTranslation } from "react-i18next";
import styles from "../styles/myworks.module.css";
import MyWorksCard from "./MyWorksCard";

export default function MyWorks() {
    const [lang] = useTranslation("global");

    return (
        <div className={styles.myWorksSection} id="my-works">
            <h1>{lang("myWorks.title")}</h1>
            <p>{lang("myWorks.description")}</p>
            <MyWorksCard />
        </div>
    );
}
