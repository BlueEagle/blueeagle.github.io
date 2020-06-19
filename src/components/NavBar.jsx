import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = (props) => {
  return (
    <StyledNav>
      <div>
        <StyledH1>Collin's Code</StyledH1>
      </div>
      
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </StyledNav>
  )
}

export default NavBar

// Styled components
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4vh;
  background: lightblue;
  padding: 2%;
`
const StyledH1 = styled.h1`
  margin: 0;
`
