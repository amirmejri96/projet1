import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';
import PrivateRoute from './Pages/Authentification/PrivateRoute';
import Navbar from './Components/Navbar';
import Accueil from './Pages/Accueil/Accueil';
import Footer from './Components/Footer';
import About from './Pages/About/About';
import Edition from './Pages/Editions/Edition';



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/privateRoute' element={<PrivateRoute/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/edition' element={<Edition/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
