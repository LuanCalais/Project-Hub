import "./Card.css";

const Card = ({ name, legend, position, picture, primaryColor, deleteCollaborator }) => {

  const cssHeader = {background: primaryColor}
  return (
    <div className="card">
      <div className="card-header" style={cssHeader}>{position}</div>

      <div className="card-picture">
        <img src={picture} alt={name}/>
      </div>

      <div className="card-info">
        <h5>{name}</h5>
        <sub>{legend}</sub>
      </div>
    </div>
  );
};

export default Card;
