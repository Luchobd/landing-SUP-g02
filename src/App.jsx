import "./App.css";
import { Header } from "./components/Header/Header";
import { Cards } from "./components/Jobs/Cards";
import { Form } from "./components/Form/Form";
import { Networking } from "./components/networking/Networking";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Form />
      <Networking />
    </div>
  );
}

export default App;
