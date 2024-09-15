import styles from "./Footer.module.css";
const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Berk</div>
            <div className={styles.text}>
                Berk creative thouts agency © All rights reserved.
            </div>
        </div>
    );
};

export default Footer