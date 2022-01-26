import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import './App.css';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
