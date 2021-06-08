import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = ({ handledChange, handledSubmit }) => {
  return (
    <>
      <form handledSubmit={ (e) => handledSubmit(e) }>
        <input handledChange={ (e) => handledChange(e) } type="text" placeholder="Nombre:" />
        <input handledChange={ (e) => handledChange(e) } type="email" placeholder="EMail:" />
        <input handledChange={ (e) => handledChange(e) } type="date" placeholder="Fecha de Nacimiento: " />
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
