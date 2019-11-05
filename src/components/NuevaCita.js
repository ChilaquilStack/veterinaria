import React, {Component} from 'react'
import uuid from 'uuid'
import propTypes from 'prop-types'

const setState = {

    cita : {

        hora : '',

        fecha : '',
        
        mascota: '',
        
        sintomas: '',
        
        propietario : ''

    },

    error : false

}

class NuevaCita extends Component {

    state = {...setState}

    handleChange = e => {

        const {target : {name, value }} = e;
        
        this.setState({
            
            cita : {

                ...this.state.cita,
                
                [name] : value
            
            }
        
        })

    }

    handleSubmit = e => {

        e.preventDefault()

        const { cita : {mascota, propietario, fecha, hora, sintomas }} = this.state

        if(mascota === '' || propietario === '' || fecha === '' || sintomas === '' || hora === ''){
            
            this.setState({

                error : true
            
            })
            
            return

        }

        const nuevaCita = {...this.state.cita, id : uuid()}

        this.props.crearNuevaCita(nuevaCita)

        this.setState({
            ...setState
        })

    }

    render() {

        const {error} = this.state

        return (

            <div className="card mt-5">
                
                <div className="card-body">
                     
                     <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                     </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son requeridos</div> : null }

                     <form onSubmit = { this.handleSubmit }>

                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-5 col-form-label">Nombre Mascota</label>

                            <div className="col-sm-8 col-lg-10">

                                <input
                                    
                                    type="text"
                                    
                                    name="mascota"
                                    
                                    className="form-control"
                                    
                                    placeholder="Nombre Mascotas"
                                    
                                    value={this.state.cita.mascota}
                                    
                                    onChange = { this.handleChange }
                                
                                />

                            </div>

                        </div>

                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-5 col-form-label">Nombre Dueño</label>

                            <div className="col-sm-8 col-lg-10">

                                <input
                                    
                                    type="text"
                                    
                                    name="propietario"
                                    
                                    className="form-control"
                                    
                                    placeholder="Nombre Dueño Mascota"

                                    value={this.state.cita.propietario}
                                    
                                    onChange = { this.handleChange }
                                
                                />

                            </div>

                        </div>

                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-5 col-form-label">Fecha</label>

                            <div className="col-sm-8 col-lg-4">

                                <input
                                    
                                    type="date"
                                    
                                    name="fecha"
                                    
                                    className="form-control"

                                    value={this.state.cita.fecha}
                                    
                                    onChange = { this.handleChange }
                                
                                />

                            </div>

                            <label className="col-sm-4 col-lg-5 col-form-label">Hora</label>

                            <div className="col-sm-8 col-lg-4">

                                <input
                                    
                                    type="time"
                                    
                                    name="hora"
                                    
                                    className="form-control"

                                    value={this.state.cita.hora}
                                    
                                    onChange = { this.handleChange }
                                
                                />

                            </div>

                        </div>

                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-5 col-form-label">Commentarios</label>

                            <div className="col-sm-8 col-lg-10">

                                <textarea

                                    name="sintomas"
                                    
                                    className="form-control"
                                    
                                    placeholder="describe los sintomas"

                                    value={this.state.cita.sintomas}
                                    
                                    onChange = { this.handleChange }
                                
                                />

                            </div>

                        </div>

                        <input 
                            type="submit" 
                            value="Agregar nuena cita" 
                            className="py-3 mt-2 btn-success btn-block"
                        />

                     </form>

                </div>

            </div>
        )
    }

}

NuevaCita.propTypes = {

    crearNuevaCita : propTypes.func.isRequired

}

export default NuevaCita