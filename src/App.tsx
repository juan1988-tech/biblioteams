import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BurguerButton from './components/BurguerButton/BurguerButton';

function App() { 
  return (
    <BrowserRouter>
    <Header/>
    <BurguerButton/>
    <main>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/catalogo"} element={<h1>Catálogo</h1>} />
      <Route path={"/ingresa"} element={<h1>Ingresa</h1>} />
      <Route path={"/registrate"} element={<h1>Regístrate</h1>}/>
      <Route path={"*"} element={<h1>Error 404</h1>}/> 
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App
