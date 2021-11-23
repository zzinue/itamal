import CardBody from "./CardBodyAtole";
import CardTitle from "./CardTitleAtole";
import CardImage from "./CardImageAtole";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import Counter from "../Counter";

const CardAtoles = ({ title, imgUrl, text, linkBtn }) => {

//   const [oaxaqueno, setOaxaqueno] = useState(false)

const cardStyle = {
    border: "1px solid gray",
    margin: "5px",
    padding: "15px",
    minWidth: "300px",
    width: "10%",
    display: "inline-block",
  };


  return (
    <div className="card" style={cardStyle}>
      <CardImage imgUrl={imgUrl} />
      <CardTitle title={title} />
      <div className="card-body">
        {/* <button>Hoja de Maiz</button>
        <button>Hoja de plátano</button> */}
        <CardBody text={text} />
        <hr></hr>
        <PrimaryButton link={linkBtn} text="Agregar" />
        <Counter />
      </div>
    </div>
  );
};

export default CardAtoles;