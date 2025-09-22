import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/login";
import Inscricao from './components/inscricao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/inscricao" element={<Inscricao />} />
      </Routes>
    </Router>
  );
}

export default App;
