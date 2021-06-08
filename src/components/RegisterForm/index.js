import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = ({ handledChange, handledSubmit }) => {
  return (
    <>
      <form onSubmit={ (e) => handledSubmit(e) }>
        <input onChange={ (e) => handledChange(e) } type="text" name="name" placeholder="Nombre:" />
        <input onChange={ (e) => handledChange(e) } type="email" name="email" placeholder="EMail:" />
        <input onChange={ (e) => handledChange(e) } type="date" name="date" placeholder="Fecha de Nacimiento: " />
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
