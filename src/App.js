import React, {Component} from 'react';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCita'
import './bootstrap.min.css';

class App extends Component {

  state = {

    citas : []
  
  }

  crearNuevaCita = datos => {

    const citas = [...this.state.citas, datos]

    this.setState({
      
      citas
    
    })

  }

  eliminarCita = id => {

    const citasActuales = [...this.state.citas]

    const citas = citasActuales.filter(cita => cita.id !== id)

    this.setState({
      citas
    })

  }

  componentDidMount(){

    const citas_local_storage = localStorage.getItem('citas')
    
    if(citas_local_storage){
      
      this.setState({
        
        citas: JSON.parse(citas_local_storage)
      
      })
    
    }

  }

  componentDidUpdate() {
    
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  
  }

  render(){

    return (
        
        <div className="container">
          
          <Header
            
            titulo="Administrador Pacientes Veterinaria"
          
          />

          <div className="row">

              <div className="col-md-10 mx-auto">
                
                <NuevaCita
                  crearNuevaCita = {this.crearNuevaCita}
                />
              </div>

              <div className="mt-5 col-md-10 mx-auto">

                <ListaCitas
                  
                  citas = {this.state.citas}

                  eliminarCita = {this.eliminarCita}
                
                />

              </div>

          </div>
          
      </div>
    
    );
    
  }

}

export default App;
