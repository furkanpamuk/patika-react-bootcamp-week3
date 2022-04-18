import React from 'react'
import svg1 from '../static/img/image1.svg'
import svg2 from '../static/img/image2.svg'


function Header() {
  return (
    <header className='container'>
        <img style={{width: "100%"}} src={svg1} alt="Marvel Heroes"/>
        <img style={{width: "35%"}} src={svg2} alt="Marvel Script"/>
    </header>
  )
}

export default Header