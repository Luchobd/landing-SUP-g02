import "./App.css";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { Networking } from "./components/networking/Networking";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Networking />
    </div>
  );
}

export default App;
