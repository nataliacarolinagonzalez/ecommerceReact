import './App.css';

import { Navbar } from './componentes/Navbar';

import { Index as Inicio } from './componentes/INICIO/Index';
import { Index as Alta } from './componentes/ALTA/Index';
import { Index as Carrito } from './componentes/CARRITO/Index';
import { Index as Contacto } from './componentes/CONTACTO/Index';
import { Index as Nosotros } from './componentes/NOSOTROS/Index';
import { Index as Favoritos } from './componentes/FAVORITOS/Index';


import { RutaNoValida } from './componentes/RutaNoValida';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './componentes/Footer';
import { CarritoProvider } from './contextoCarrito';

/* import Prueba from './prueba'; */



function App() {
  return (
    <CarritoProvider>
    <div className="App">
     
      <div className="container-fluid m-0 p-0">
        <div >
        
          {/* <BrowserRouter> */}
            <HashRouter>
            
              <Navbar />

              <Routes>
                <Route index element={<Inicio titulo="Inicio" />} />
                <Route path='inicio' element={<Inicio titulo="Inicio" />} />
                <Route path='alta' element={<Alta titulo="Alta" />} />
                <Route path='carrito' element={<Carrito titulo="Carrito" />} />
                <Route path='contacto' element={<Contacto titulo="Contacto" />} />
                <Route path='nosotros' element={<Nosotros titulo="Nosotros" />} />
                <Route path='favoritos' element={<Favoritos titulo="Favoritos" />} />
                <Route path='*' element={<RutaNoValida />} />
              </Routes>
              
              <Footer/>
            {/* </BrowserRouter> */}
            
            </HashRouter>
            
        </div>
      </div>
      
    </div>
    </CarritoProvider> 
  );
}

export default App;
