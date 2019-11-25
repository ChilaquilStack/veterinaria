import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCita'
import './bootstrap.min.css';


const App = () => {

  const citasIniciales = JSON.parse(localStorage.getItem('citas'));

  const [citas, setCitas] = useState(citasIniciales ? citasIniciales : []);
  
  const crearNuevaCita = datos => {

    setCitas([
      
      ...citas,
      
      datos
    
    ])

  }

  const eliminarCita = index => {

    const citasActuales = [...citas]

    citasActuales.splice(index, 1);

    setCitas([
      ...citasActuales
    ])

  }


  useEffect (() => {

    const citas_local_storage = localStorage.getItem('citas')
    
    if(citas_local_storage) {
      
      localStorage.setItem('citas', JSON.stringify(citas))
      
    } else {
      
      localStorage.setItem('citas', JSON.stringify([]))
      
    }


  }, [citas]);
  
  return (
        
      <div className="container">
        
        <Header
          
          titulo="Administrador Pacientes Veterinaria"
        
        />

        <div className="row">

            <div className="col-md-10 mx-auto">
              
              <NuevaCita
                crearNuevaCita = {crearNuevaCita}
              />
            </div>

            <div className="mt-5 col-md-10 mx-auto">

              <ListaCitas
                
                citas = {citas}

                eliminarCita = {eliminarCita}
              
              />

            </div>

        </div>
        
    </div>
    
  );

}

export default App;
