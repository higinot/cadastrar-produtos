import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cadastrar from "./pages/Cadastrar";
import Produtos from "./pages/Produtos";
import TableReport from "./pages/Table";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route
          path="/*"
          element={<Navigate to="/cadastrar" replace={true} />}
        />
        <Route path="/TableReport" element={<TableReport />} />
      </Routes>
    </Router>
  );
};

export default App;
