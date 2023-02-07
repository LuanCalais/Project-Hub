import Form from "./components/Form";
import Header from "./components/Header";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      label: "Develop",
      value: "Develop",
    },
    {
      label: "Designer",
      value: "Designer",
    },
    {
      label: "Scrum Master",
      value: "Scrum Master",
    },
    {
      label: "Quanlity Analyst",
      value: "Quanlity Analyst",
    },
  ];

  return (
    <>
      <Header />
      <div className="box-form">
        <Form teamNames={teams} />
      </div>

      <div className="box-team">
        <Team />
      </div>
    </>
  );
}

export default App;
