import React from 'react'
import { Link } from 'react-router-dom'

import MaleImage from '../../assets/gen-1.png'
import AnotherImage from '../../assets/gen-2.png'
import FameleImage from '../../assets/gen-3.png'

const Gender = () => {
  return (
    <main>
      <section>
        <figure>
          <img src={MaleImage} width="100" alt="Hombre" />
        </figure>
        <figure>
          <img src={AnotherImage} width="100" alt="No binario" />
        </figure>
        <figure>
          <img src={FameleImage} width="100" alt="Mujer" />
        </figure>
      </section>
      <Link to="/datos">Ingresar</Link>
    </main>
  )
}

export default Gender
