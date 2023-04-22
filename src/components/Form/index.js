import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import SelectInput from "../SelectInput";
import "./Form.css";

const Form = ({ teamNames, addNewCollaborator, addNewTeam }) => {
  const [collaboratorName, setCollaboratorName] = useState("");
  const [legend, setLegend] = useState("");
  const [positionName, setPositionName] = useState("");
  const [pictureImageLink, setPictureImageLink] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const saveInfo = (event) => {
    event.preventDefault();
    addNewCollaborator({
      collaboratorName,
      legend,
      positionName,
      pictureImageLink,
      team,
    });
    setCollaboratorName("");
    setLegend("");
    setPositionName("");
    setPictureImageLink("");
  };

  return (
    <div className="form">
      <h2>Crie seu time</h2>
      <span className="box-forms">
        <form onSubmit={saveInfo}>
          <div className="box-inputs">
            <Input
              inputValue={collaboratorName}
              placeholder="Escreva o nome do integrante"
              maxLength="50"
              require
              onWrite={(value) => setCollaboratorName(value)}
            />
            <Input
              inputValue={legend}
              placeholder="Escreva uma legenda"
              maxLength="50"
              require={false}
              onWrite={(value) => setLegend(value)}
            />
            <Input
              inputValue={positionName}
              placeholder="Escreva o cargo"
              maxLength="50"
              require
              onWrite={(value) => setPositionName(value)}
            />
            <Input
              inputValue={pictureImageLink}
              placeholder="https://github.com/SeuRepositorio.png"
              maxLength="100"
              require
              onWrite={(value) => setPictureImageLink(value)}
            />
            <SelectInput
              inputValue={team}
              items={teamNames}
              placeholder="Selecione o time"
              onWrite={(event) => setTeam(event.value)}
            />
            <Button text="Criar Integrante" color="#fbb8b7" textColor="#fff" />
          </div>
        </form>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            addNewTeam({ teamName, teamColor });
            setTeamName("");
            setTeamColor("");
          }}
        >
          <div className="box-inputs">
            <Input
              inputValue={teamName}
              placeholder="Insira o nome do time"
              maxLength="100"
              require
              onWrite={(value) => setTeamName(value)}
            />

            <Input
              inputValue={teamColor}
              placeholder="Insira a cor do time"
              type="color"
              require
              onWrite={(value) => setTeamColor(value)}
            />
            <Button text="Criar Time" color="#fbb8b7" textColor="#fff" />
          </div>
        </form>
      </span>
    </div>
  );
};

export default Form;
