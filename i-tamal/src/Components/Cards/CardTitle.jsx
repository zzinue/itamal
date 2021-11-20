import styles from "./CardTitle.module.scss";

const CardTitle = ({ title }) => {
  const titleMayusculas = title.toUpperCase();
//   const classOferta = oferta ? "text-success" : "";
  return (
    <h5 className={`card-title ${styles.primaryTitle}`}>
      {titleMayusculas}
    </h5>
  );
};

export default CardTitle;