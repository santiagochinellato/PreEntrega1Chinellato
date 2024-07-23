import React from 'react'
import Cart from './components/Cart'
import Menu from './components/Menu'
import Logo from './components/Logo'



export default function NavBar() {
  return (
    <div className='navBar'>
      <Logo/>
      <Menu/>
      <Cart/>
    </div>
  )
}
