import Input from "../Input";
import SelectInput from "../SelectInput";
import "./Form.css";

const Form = () => {
  const options = [
    { value: "Teste 1", label: "Teste 1" },
    { value: "Teste 2", label: "Teste 2" },
    { value: "Teste 3", label: "Teste 3" },
  ];
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
        <SelectInput items={options}   placeholder="Selecione o cargo"/>
      </div>
    </div>
  );
};

export default Form;
