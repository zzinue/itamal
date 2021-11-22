// import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ link, text }) => {
  return (
    <button link={link}>
        {text}
    </button>
  );
};

export default PrimaryButton;