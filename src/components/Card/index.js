import { BsFillTrash2Fill } from "react-icons/bs";
import "./Card.css";

const Card = ({
  name,
  legend,
  position,
  picture,
  primaryColor,
  id,
  deleteCollaborator,
}) => {
  const cssHeader = { background: primaryColor };
  return (
    <div className="card">
      <BsFillTrash2Fill
        className="delete"
        size={25}
        onClick={() => deleteCollaborator(id)}
      />

      <div className="card-header" style={cssHeader}>
        {position}
      </div>

      <div className="card-picture">
        <img src={picture} alt={name} />
      </div>

      <div className="card-info">
        <h5>{name}</h5>
        <sub>{legend}</sub>
      </div>
    </div>
  );
};

export default Card;
