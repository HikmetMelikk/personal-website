import { motion } from "framer-motion";
import styles from "../styles/home.module.css";
import text from "../texts";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";

export default function Home() {
    const titleCharacters = splitStringUsingRegex(text.home.title);
    const paragraphCharacters = splitStringUsingRegex(text.home.paragraph);

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
                        transition={{ duration: 0.25 }}
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
