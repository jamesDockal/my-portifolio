import Siderbar from "./components/SIderbar";
import Psyche from "./components/Psyche";
import Home from "./pages/Home";
import Techs from "./pages/Techs";
import Contact from "./pages/Contact";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Siderbar />
      {/* <Psyche /> */}
      <Home />
      <Techs />

      <Contact />
    </div>
  );
}

export default App;
