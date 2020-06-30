import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = (props) => {
  const {lightBlue,superLightBlue} = props.style

  return (
    <header>
      <StyledNav background={lightBlue}>
        <StyledH1>Collin's Code</StyledH1>
        
        <RightNavDiv>
          <StyledLink background={superLightBlue} to="/">Home</StyledLink>
          {/* <StyledLink background={superLightBlue} to="/projects">Projects</StyledLink> */}
          <StyledLink background={superLightBlue} to="/services">Services</StyledLink>
          <StyledLink background={superLightBlue} to="/blog">Blog</StyledLink>
          <StyledLink background={superLightBlue} to="/contact">Contact</StyledLink>
        </RightNavDiv>
      </StyledNav>
    </header>
  )
}

export default NavBar

// Styled components

const StyledH1 = styled.h1`
  margin-left: 0;

  @media (max-width: 550px) {
    margin: 3% 0;
    font-size: 3rem;
  }
`
const RightNavDiv = styled.div`
  display: flex;
  flex-basis: 30%;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 550px) {
    flex-direction: column;

    a {
      box-sizing: border-box;
      padding: .5rem 5rem;
      margin: .5rem 0;
      width: 100%;
      box-shadow: 0 0 3px black;
      border-radius: 5px;
    }
  }
`
const StyledNav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 8vh;
  background: ${props => props.background ? props.background : 'lightBlue'};
  padding-left: 3%;
  padding-right: 3%;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 2%;
    h1 {
      line-height: 2;
    }
  }
  @media (max-width: 370px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin: 0;
  font-size: 1.2rem;

  &:hover {
    background-color: ${props => props.background ? props.background : 'lightcyan'};
  }
`