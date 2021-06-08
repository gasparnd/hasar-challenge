import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = ({ onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={ (e) => onSubmit(e) }>
        <input onChange={ (e) => onChange(e) } type="text" placeholder="Nombre:" />
        <input onChange={ (e) => onChange(e) } type="email" placeholder="EMail:" />
        <input onChange={ (e) => onChange(e) } type="date" placeholder="Fecha de Nacimiento: " />
        <div>
          <Link to="/genero">
            Volver
          </Link>
          <input type="submit" value="Continuar" />
        </div>
      </form>
    </>
  )
}

export default RegisterForm
