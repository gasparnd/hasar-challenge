import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import RegisterForm from '../../components/RegisterForm'

const Register = () => {

  const handledSubmit = (e) => {
    e.preventDefault()
  }

  const handledChange = (e) => {

  }

  return (
    <main>
      <RegisterForm handledChange={handledChange} handledSubmit={handledSubmit} />
    </main>
  )
}

export default Register
