import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;
  return (
    <div>
        <div className='bg-white shadow-md py-10 px-5 rounded-lg mb-5'>
            <p className='uppercase font-semibold mb-3'>Nombre: <span className='font-normal normal-case'>{nombre}</span></p>
                
            <p className='uppercase font-semibold mb-3'>propietario: <span className='font-normal normal-case'>{propietario}</span></p>
                
            <p className='uppercase font-semibold mb-3'>email: <span className='font-normal normal-case'>{email}</span></p>
                
            <p className='uppercase font-semibold mb-3'>fecha de ingreso: <span className='font-normal normal-case'>{fecha}</span></p>
                
            <p className='uppercase font-semibold mb-3'>síntomas: <span className='font-normal normal-case'>{sintomas}</span></p>
            
            <div className='flex justify-center gap-10'>
              <input 
                type="button"
                value='Editar'
                className='bg-indigo-500 text-white py-2 px-4 rounded-md mt-3'
                onClick={( ) =>
                  setPaciente(paciente)
                }
              />
              <input 
                type='button'
                value='Eliminar'
                className='bg-red-500 text-white py-2 px-4 rounded-md mt-3'
                onClick={() => eliminarPaciente(id)}
              />
            </div>
            
        </div>
    </div>
  )
}

export default Paciente