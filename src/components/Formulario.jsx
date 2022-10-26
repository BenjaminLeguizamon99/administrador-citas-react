import React, {useState} from 'react'
import { useEffect } from 'react'

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)
    
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return
        }
        setError(false)

        //Construimos un objeto de pacientes

        const objetoPaciente = {
            nombre,
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if (paciente.id) {
            // Editando el registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        
        //Reiniciar el form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('')
    }

    return (
    <div className='md:w-1/2 lg:w-2/5 mt-5'>
        <h2 className='font-bold text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='mt-5 font-bold text-lg text-center mb-7'>Añade pacientes y <span className='text-indigo-500 uppercase'>administralos</span></p>
        <form className='bg-white shadow-md rounded-lg py-10 px-5' onSubmit={handleSubmit}>
            {error && <div className='bg-red-500 text-white text-center w-100 mb-6 py-4 rounded-xl shadow-md text-xl'>Hay uno o más campos vacios</div>}
            <div className='mb-7'>
                <label 
                htmlFor='nombre'
                className='block text-gray-700 uppercase font-bold'>
                    Nombre mascota
                </label>

                <input 
                id='nombre'
                type='text'
                placeholder='Nombre de la mascota...'
                className='border-2 mt-3 w-full p-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
                />
            
            </div>
            
            <div className='mb-7'>
                <label 
                htmlFor='propietario'
                className='block text-gray-700 uppercase font-bold'>
                    Propietario
                </label>
                
                <input 
                id='propietario'
                type='text'
                placeholder='Nombre del dueño...'
                className='border-2 mt-3 w-full p-2 placeholder-gray-400 rounded-md'
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value)}
                />
            </div>
            
            <div className='mb-7'>
                <label 
                htmlFor='email'
                className='block text-gray-700 uppercase font-bold'>
                    Email
                </label>
                
                <input 
                id='email'
                type='text'
                placeholder='Email...'
                className='border-2 mt-3 w-full p-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
            </div>
            
            <div className='mb-7'>
                <label 
                htmlFor='fecha'
                className='block text-gray-700 uppercase font-bold'>
                    fecha de ingreso
                </label>
                
                <input 
                id='fecha'
                type='date'
                className='border-2 mt-3 w-full p-2 placeholder-gray-400 rounded-md'
                value={fecha}
                onChange={ (e)=> setFecha(e.target.value)}
                />
            </div>
            
            <div className='mb-7'>
                <label 
                htmlFor='sintomas'
                className='block text-gray-700 uppercase font-bold'>
                    Síntomas
                </label>
                
                <input 
                id='sintomas'
                type='textarea'
                placeholder='Describa los síntomas de la mascota...'
                className='border-2 mt-3 w-full p-2 placeholder-gray-400 rounded-md'
                value={sintomas}
                onChange={ (e)=> setSintomas(e.target.value)}
                />
            </div>
            <input 
                type='submit'
                className='bg-indigo-500 w-full p-3 rounded-md font-semibold text-white uppercase'
                value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
            /> 
        </form>
    </div>
  )
}

export default Formulario