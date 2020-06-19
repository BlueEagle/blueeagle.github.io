import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Styled components

const StyledH1 = styled.h1`
  margin-left: 0;
`
const RightNavDiv = styled.div`
  display: flex;
  flex-basis: 30%;
  height: 100%;
  justify-content: space-between;
`
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  background: ${props => props.background ? props.background : 'lightBlue'};
  padding-left: 3%;
  padding-right: 3%;
`
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  margin: 0;
  font-size: 1.2rem;

  &:hover {
    background-color: ${props => props.background ? props.background : 'lightcyan'};
  }
`

const NavBar = (props) => {
  const {lightBlue,superLightBlue} = props.style

  return (
    <header>
      <StyledNav background={lightBlue}>
        <div>
          <StyledH1>Collin's Code</StyledH1>
        </div>
        
        <RightNavDiv>
          <StyledLink background={superLightBlue} to="/">Home</StyledLink>
          <StyledLink background={superLightBlue} to="/projects">Projects</StyledLink>
          <StyledLink background={superLightBlue} to="/blog">Blog</StyledLink>
          <StyledLink background={superLightBlue} to="/contact">Contact</StyledLink>

        </RightNavDiv>
      </StyledNav>
    </header>
  )
}

export default NavBar