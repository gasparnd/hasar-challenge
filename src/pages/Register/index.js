import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import RegisterForm from '../../components/RegisterForm'

const Register = () => {

  const onSubmit = (e) => {
    e.prevent.default
  }

  const onChange = (e) => {

  }

  return (
    <main>
      <RegisterForm onChange={ onChange } onSubmit={ onSubmit } />
    </main>
  )
}

export default Register
