import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className='md:w-1/2 mt-5 lg:w-3/5'>
      {pacientes.length ? <div>
        <h2 className='font-bold text-3xl text-center'>Listado de Pacientes</h2>
        <p className='mt-5 font-bold text-lg text-center mb-7'>Administra tus <span className='text-indigo-500 uppercase'>Pacientes y Citas</span></p>
        <div className='mx-10 felx justify-center'>
          {pacientes.map( paciente => {
            return(
              <Paciente 
                paciente={paciente} 
                key={paciente.id} 
                setPaciente={setPaciente} 
                eliminarPaciente={eliminarPaciente}  
              />
            )
          })}
        </div>
        
        </div> 
          : 
        <div>
          <h2 className='font-bold text-3xl text-center'>Aún no has cargado ningún paciente</h2>
          <p className='mt-5 font-bold text-lg text-center mb-7'>Completa el formulario y <span className='text-indigo-500 uppercase'>verás tus pacientes aquí</span></p>
        </div>}
        
    </div>
  )
}

export default ListadoPacientes