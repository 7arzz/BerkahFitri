import Greeting from "./components/Greeting";
import SupportButton from "./components/SupportButton";
import "./App.css";

function App() {
  return (
    <div
      className="container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Greeting />
      <SupportButton />
    </div>
  );
}

export default App;
