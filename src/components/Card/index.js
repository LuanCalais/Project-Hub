import { BsFillTrash2Fill } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./Card.css";
import defaultImage from "assets/img/default-not-found-image.svg";
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
        <h3 className="clamp-line clamp-line-header">{position}</h3>
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
        <h5 className="clamp-line clamp-line-info" title={name}>
          {name}
        </h5>

        <p className="clamp-line clamp-line-info" title={legend}>
          {legend}
        </p>
      </div>
    </div>
  );
};

export default Card;
