import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userSex } from '../../actions'

import MaleImage from '../../assets/gen-1.png'
import AnotherImage from '../../assets/gen-2.png'
import FameleImage from '../../assets/gen-3.png'

const Gender = (props) => {
  const handleClick = (e) => {
    const sex = e.target.alt
    console.log(sex)
    props.userSex(sex)
  }

  return (
    <main>
      <section>
        <figure>
          <img onClick={ handleClick } src={MaleImage} width="100" alt="Hombre" />
        </figure>
        <figure>
          <img onClick={ handleClick } src={AnotherImage} width="100" alt="No binario" />
        </figure>
        <figure>
          <img onClick={ handleClick } src={FameleImage} width="100" alt="Mujer" />
        </figure>
      </section>
      <Link to="/datos">Ingresar</Link>
    </main>
  )
}

const mapDispathToProps = {
  userSex,
}

export default connect(null, mapDispathToProps)(Gender)
