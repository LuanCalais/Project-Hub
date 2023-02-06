import Form from "./components/Form";
import Header from "./components/Header";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <div className="box-form">
        <Form />
      </div>

      <div className="box-team">
        <Team />
      </div>
    </>
  );
}

export default App;
