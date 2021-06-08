import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { userInfo } from '../../actions'

import RegisterForm from '../../components/RegisterForm'

const Register = (props) => {
  const [ user, setUser ] = useState({
    name: '',
    email: '',
    date: ''

  })

  const handledSubmit = (e) => {
    e.preventDefault()
    props.userInfo(user)
  }

  const handledChange = (e) => {
    setUser({
      ...user
      [e.target.name] = [e.target.value]
    })
  }

  return (
    <main>
      <RegisterForm handledChange={handledChange} handledSubmit={handledSubmit} />
    </main>
  )
}

const mapDispathToProps = {
  userInfo
}

export default connect(null, mapDispathToProps)(Register)
