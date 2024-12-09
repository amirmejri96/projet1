import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';
import PrivateRoute from './Pages/Authentification/PrivateRoute';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/privateRoute' element={<PrivateRoute/>} />

      </Routes>
    </div>
  );
}

export default App;
