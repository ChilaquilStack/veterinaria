import React, {useState} from 'react'
import uuid from 'uuid'
import propTypes from 'prop-types'


const NuevaCita = ({crearNuevaCita}) => {

    const [error, setError] = useState(false)
    
    const [cita, setCita] = useState({
    
        hora : '',
    
        fecha : '',
        
        mascota: '',
        
        sintomas: '',
        
        propietario : ''
    
    })

    const handleChange = e => {

        const {target : {name, value }} = e;
        
        setCita({
            
            ...cita,
            
            [name] : value
            
        
        })

    }

    const handleSubmit = e => {

        e.preventDefault()

        const {mascota, propietario, fecha, hora, sintomas } = cita

        if(mascota === '' || propietario === '' || fecha === '' || sintomas === '' || hora === ''){
            
            setError({

                error : true
            
            })
            
            return

        }

        const nuevaCita = {...cita, id : uuid()}

        setCita({
            hora : '',
    
            fecha : '',
            
            mascota: '',
            
            sintomas: '',
            
            propietario : ''
        })

        crearNuevaCita(nuevaCita)
        
    }

    return (

        <div className="card mt-5">
        
            <div className="card-body">
                
                <h2 className="card-title text-center mb-5">
                    Llena el formulario para crear una nueva cita
                </h2>

            { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son requeridos</div> : null }

                <form onSubmit = { handleSubmit }>

                <div className="form-group row">

                    <label className="col-sm-4 col-lg-5 col-form-label">Nombre Mascota</label>

                    <div className="col-sm-8 col-lg-10">

                        <input
                            
                            type="text"
                            
                            name="mascota"
                            
                            className="form-control"
                            
                            placeholder="Nombre Mascotas"
                            
                            value={cita.mascota}
                            
                            onChange = { handleChange }
                        
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

                            value={cita.propietario}
                            
                            onChange = { handleChange }
                        
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

                            value={cita.fecha}
                            
                            onChange = { handleChange }
                        
                        />

                    </div>

                    <label className="col-sm-4 col-lg-5 col-form-label">Hora</label>

                    <div className="col-sm-8 col-lg-4">

                        <input
                            
                            type="time"
                            
                            name="hora"
                            
                            className="form-control"

                            value={cita.hora}
                            
                            onChange = { handleChange }
                        
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

                            value={cita.sintomas}
                            
                            onChange = { handleChange }
                        
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

NuevaCita.propTypes = {

    crearNuevaCita : propTypes.func.isRequired

}

export default NuevaCita