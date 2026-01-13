import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BurguerButton from './components/BurguerButton/BurguerButton';
import DarkBackground from './elements/DarkBackground/DarkBackground';
import AsideHeader from './elements/AsideHeader/AsideHeader';
import Cathalog from './pages/Cathalog/Cathalog';
import SingIn from './pages/SingIn/SingIn';

function App() { 
  return (
    <BrowserRouter>
    <BurguerButton/>  
    <Header/>
    <DarkBackground/>
    <AsideHeader/>
    <main>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/catalogo"} element={<Cathalog/>}/>      
      <Route path={"/ingresa"} element={<SingIn/>} />
      <Route path={"/registrate"} element={<h1>Regístrate</h1>}/>
      <Route path={"*"} element={<h1>Error 404</h1>}/> 
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App
