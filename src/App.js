import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Team from "./components/Team";
import { useState } from "react";
import RootPage from "./components/RootPage";

function App() {
  const today = useState("");

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
      <RootPage />
      <Header />
      <div className="box-form">
        <Form teamNames={teams} />
      </div>

      <div className="box-team">
        <Team />
      </div>

      <Footer today={today} />
    </>
  );
}

export default App;
