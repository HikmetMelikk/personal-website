import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <div className={styles.homeSection}>
            <div className={styles.homeImage}>
                <img
                    src="public/assets/landing-page-image.png"
                    alt="Home Image"
                />
            </div>
            <h1>👋🏻 Hi, I am Hikmet Melik FIRAT</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam neque officia sapiente totam natus facilis dolorem
                ipsam accusantium velit exercitationem quia perspiciatis ea
                mollitia illo, modi necessitatibus quas. Iusto voluptates quod
                eaque hic laudantium tempore nisi repellendus blanditiis quam
                accusantium.
            </p>
        </div>
    );
}
