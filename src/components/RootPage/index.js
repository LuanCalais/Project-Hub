import "./RootPage.css";
import Footer from "../Footer";
import Form from "../Form";
import Header from "../Header";
import Team from "../Team";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const RootPage = () => {
  const teams = [
    {
      id: uuidv4(),
      label: "Develop",
      value: "Develop",
      primaryColor: "#d9f7e9",
      secondaryColor: "#57c278",
    },
    {
      id: uuidv4(),
      label: "Designer",
      value: "Designer",
      primaryColor: "#b2cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      id: uuidv4(),
      label: "Scrum Master",
      value: "Scrum Master",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      id: uuidv4(),
      label: "Quality Analyst",
      value: "Quality Analyst",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },
  ];

  const today = useState("");
  const [collaborators, setCollaborators] = useState([]);

  const addNewCollaborator = (col) => {
    col.id = uuidv4();
    setCollaborators([...collaborators, col]);
  };

  function deleteCollaborator(id) {
    setCollaborators(collaborators.filter((col) => col.id !== id));
  }

  return (
    <>
      <Header />
      <div className="box-form">
        <Form
          teamNames={teams}
          addNewCollaborator={(collaborator) =>
            addNewCollaborator(collaborator)
          }
        />
      </div>

      <div className="box-team">
        {teams.map((team) => (
          <Team
            key={team.label}
            label={team.label}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            collaborators={collaborators.filter(
              (col) => col.team === team.label
            )}
            deleteCollaborator={deleteCollaborator}
          />
        ))}
      </div>

      <Footer today={today} />
    </>
  );
};

export default RootPage;
