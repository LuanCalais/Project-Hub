import Input from "../Input";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
        <h2>Crie seu time</h2>
      <div className="box-inputs">
        <Input placeholder="Escreva o nome do time" maxLength="50" />
        <Input placeholder="Escreva o nome do integrante" maxLength="50" />
        <Input
          placeholder="Insira o link da imagem do github"
          maxLength="100"
        />
      </div>
    </div>
  );
};

export default Form;
