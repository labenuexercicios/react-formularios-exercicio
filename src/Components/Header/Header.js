import React from 'react'
import {HeaderContainer, Logo, NavBar, OptionsList} from './styles'
import logo from '../../assets/picture.png'

function Header (){
  return (
    <HeaderContainer>
        <Logo>
            <img src={logo} alt='Logo Labenu' height={40}/>
            <p>Labenu</p>
        </Logo>
        <NavBar>
            <OptionsList>
                <li><a href="http://localhost:3000/">Área do administrador</a></li>
                <li><a href="http://localhost:3000/">Cursos</a></li>
            </OptionsList>
        </NavBar>
    </HeaderContainer>
  )
}

export default Header