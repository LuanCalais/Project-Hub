import "./RootPage.css";
import Footer from "../Footer";
import Form from "../Form";
import Header from "../Header";
import Team from "../Team";
import { useState } from "react";

const RootPage = () => {
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
  const today = useState("");

  return (
    <>
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
};

export default RootPage;
