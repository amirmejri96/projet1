import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';
import PrivateRoute from './Pages/Authentification/PrivateRoute';
import Navbar from './Components/Navbar';
import Accueil from './Pages/Accueil/Accueil';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/accueil' element={<Accueil/>} />
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/privateRoute' element={<PrivateRoute/>} />

      </Routes>
    </div>
  );
}

export default App;
