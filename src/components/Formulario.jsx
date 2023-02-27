import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [cita, actualizarCita] = useState ({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Macota'
                    onChange={handleChange}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name='Propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño de la mascota'
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name='fecha'
                    className='u-full-width'
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name='hora'
                    className=' u-full-width'
                />
                <label>Síntomas</label>
                <textarea name="sintomas" className='u-full-width'></textarea>
                
                <button 
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
};

export default Formulario;