import { ContainerApp } from "./components/AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Home } from "./components/Home";
import { ResultsQuestions } from "./components/ResultsQuestions";

function App() {
  return (
    <HashRouter>
      <ContainerApp>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz" element={<Home />} />
          <Route path="/results" element={<ResultsQuestions />} />
        </Routes>
      </ContainerApp>
    </HashRouter>
  );
}

export default App;
