import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/Main/Main";
import Quest from "./pages/Quest/Quest";
import Setquest from "./pages/Setquest/Setquest";
import Setsession from "./pages/Setsession/Setsession";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/set/:id" element={<Setsession />} />
      <Route path="/setquest/:quest" element={<Setquest />} />
        <Route path="/" element={<Main title="Главная страница" />} />
        <Route path="/quest/:id" element={<Quest title="Вопросы?" />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
