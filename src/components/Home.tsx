import { motion } from "framer-motion";
import styles from "../styles/home.module.css";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";

const title = "Hi, I am Hikmet Melik FIRAT";
const paragraph =
    "As a passionate Software Engineer with expertise in both mobile and web development, I am dedicated to building innovative digital solutions that seamlessly integrate functionality and user experience. My focus is on designing and developing scalable applications that meet both business needs and end-user expectations.";
export default function Home() {
    const titleCharacters = splitStringUsingRegex(title);
    const paragraphCharacters = splitStringUsingRegex(paragraph);

    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 },
    };

    return (
        <div className={styles.homeSection}>
            <div className={styles.homeImage}>
                <img src="/assets/myself2.png" alt="Myself" />
            </div>
            <motion.h1
                className={styles.greetingTitle}
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.02 }}>
                {titleCharacters.map((char) => (
                    <motion.span
                        key={char}
                        transition={{ duration: 0.5 }}
                        variants={charVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.p
                className={styles.paragraph}
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.02 }}>
                {paragraphCharacters.map((char) => (
                    <motion.span
                        key={char}
                        transition={{ duration: 0.35 }}
                        variants={charVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.p>
        </div>
    );
}
