import Card from "../Card";
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="team">
        <h1>
          Nome do time
        </h1>
        <div className="cards-box">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Team;
