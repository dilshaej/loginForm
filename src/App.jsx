import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Authentication />} />
        <Route path="/" element={<Authentication  />} />
        <Route path="/register" element={<Authentication insideRegister />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
}

export default App;
