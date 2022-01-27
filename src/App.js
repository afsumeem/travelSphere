import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import WriteBlog from './pages/WriteBlog/WriteBlog';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AllBlogs from './pages/Dashboard/AllBlogs/AllBlogs/AllBlogs';
import AdminRoute from './pages/AdminRoute/AdminRoute';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import WriteArticle from './pages/Dashboard/WriteArticle/WriteArticle';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="feedback" element={<PrivateRoute><WriteBlog /></PrivateRoute>}></Route>

        <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>}>

          <Route path="/dashboard" element={<AdminRoute><DashboardHome /></AdminRoute>}></Route>
          <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
          <Route path="/dashboard/Allblogs" element={<AdminRoute><AllBlogs /></AdminRoute>}></Route>
          <Route path="/dashboard/article" element={<AdminRoute><WriteArticle /></AdminRoute>}></Route>

        </Route>

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
