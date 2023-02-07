import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import SelectInput from "../SelectInput";
import "./Form.css";

const Form = ({ teamNames }) => {
  const [collaboratorName, setCollaboratorName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [pictureImageLink, setPictureImageLink] = useState("");
  const [team, setTeam] = useState("");

  const saveInfo = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <h2>Crie seu time</h2>
      <form onSubmit={saveInfo}>
        <div className="box-inputs">
          <Input
            value={collaboratorName}
            placeholder="Escreva o nome do integrante"
            maxLength="50"
            require={true}
            onWrite={(value) => setCollaboratorName(value)}
          />
          {collaboratorName}
          <Input
            value={positionName}
            placeholder="Escreva o cargo"
            maxLength="50"
            require={true}
            onWrite={(value) => setPositionName(value)}
          />
          <Input
            value={pictureImageLink}
            placeholder="Insira o link da imagem do github"
            maxLength="100"
            require={true}
            onWrite={(value) => setPictureImageLink(value)}
          />
          <SelectInput
            value={team}
            items={teamNames}
            placeholder="Selecione o time"
            onWrite={(event) => setTeam(event.value)}
          />
          <Button text="Criar Time" color="#fbb8b7" textColor="#fff" />
          <Button text="Limpar Campos" color="#fff" textColor="#999999" />
        </div>
      </form>
    </div>
  );
};

export default Form;
