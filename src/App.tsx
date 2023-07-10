import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastrar from "./pages/Cadastrar";
import Produtos from "./pages/Produtos";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
};

export default App;
