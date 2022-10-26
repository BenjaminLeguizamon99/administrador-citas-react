import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex justify-around bg-indigo-500 my-10 py-7'>
        <div className='text-lg text-white font-semibold'>
            <p>Programado por Benjamin Leguizamon.</p>
        </div>
            
        <div className='flex text-4xl text-white'>
            <a href='https://www.linkedin.com/in/benjamin-leguizamon/' target='_blank'><BsLinkedin /></a>
        </div>
        <div className='flex text-4xl text-white'>
            <a href='https://github.com/BenjaminLeguizamon99' target='_blank'><BsGithub /></a>
        </div>
            
        <div className='text-lg text-white font-semibold'>
            <p>Córdoba, Argentina.</p>
        </div>
    </div>
  )
}

export default Footer