import "./App.css";
import { HomePage } from "./components/homePage/homePage";
import { LevelOnePart2 } from "./components/levels/levelOne/LevelOnePart2";
import { LevelOne } from "./components/levels/levelOne/LevelOneVariables";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LessonProvider } from "./context/lessonsContext";

function App() {
  return (
    <LessonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/level-one" element={<LevelOne />} />
          <Route path="/level-one-pt-2" element={<LevelOnePart2 />} />
        </Routes>
      </Router>
    </LessonProvider>
  );
}

export default App;
