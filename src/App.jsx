import Greeting from "./components/Greeting";
import SupportButton from "./components/SupportButton";
import "./App.css";
import LenteraRamadhan from "./assets/lenteraRamadhan.png";

function App() {
  return (
    <div
      className="container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          gap: "auto",
          justifyContent: "space-between",
        }}
      >
        <img
          src={LenteraRamadhan}
          alt="Lentera Ramadhan"
          style={{ width: "30%", display: "flex", top: "0", left: "0" }}
        />
        <img
          src={LenteraRamadhan}
          alt="Lentera Ramadhan"
          style={{ width: "30%", display: "flex", top: "0", right: "0" }}
        />
      </div>
      <Greeting />
      <SupportButton />
    </div>
  );
}

export default App;
