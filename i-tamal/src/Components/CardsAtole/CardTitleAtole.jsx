import styles from "./CardTitleAtole.module.scss";

const CardTitle = ({ title }) => {
    const titleMayusculas = title.toUpperCase();

    return (
        <h5 className={styles.primaryTitle}>
            {titleMayusculas}
        </h5>
    );
};

export default CardTitle;