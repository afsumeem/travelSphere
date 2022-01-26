import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
