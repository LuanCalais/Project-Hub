import { BsFillTrash2Fill } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./Card.css";
import defaultImage  from 'assets/img/default-not-found-image.svg'
const Card = ({
  name,
  legend,
  position,
  picture,
  primaryColor,
  id,
  deleteCollaborator,
  favorite,
  favoriteChange,
}) => {
  const cssHeader = { background: primaryColor };
  const favoriteIcon = {
    size: 25,
    onClick: favoriteEvent,
  };
  function favoriteEvent() {
    favoriteChange(id);
  }
  return (
    <div className="card">
      <BsFillTrash2Fill
        className="delete"
        size={25}
        onClick={() => deleteCollaborator(id)}
      />

      <div className="favorite-box">
        {favorite ? (
          <AiFillStar {...favoriteIcon} color="#ff7070" />
        ) : (
          <AiOutlineStar {...favoriteIcon} />
        )}
      </div>

      <div className="card-header" style={cssHeader}>
        {position}
      </div>

      <div className="card-picture">
        <img
          src={picture}
          alt={name}
          onError={(currentTarget) => {
            currentTarget.target.src = defaultImage;
          }}
        />
      </div>

      <div className="card-info">
        <h5>{name}</h5>
        <sub>{legend}</sub>
      </div>
    </div>
  );
};

export default Card;
