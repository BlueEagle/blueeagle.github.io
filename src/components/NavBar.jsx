import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = (props) => {
  const { style } = props
  const { lightBlue, superLightBlue } = style

  // Styled components
  const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    background: ${lightBlue};
    padding-left: 3%;
    padding-right: 3%;
  `
  const StyledH1 = styled.h1`
    margin-left: 0;
  `
  const RightNavDiv = styled.div`
    display: flex;
    flex-basis: 30%;
    height: 100%;
    justify-content: space-between;
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
      background-color: ${superLightBlue};
    }
  `

  return (
    <header>
      <StyledNav>
        <div>
          <StyledH1>Collin's Code</StyledH1>
        </div>
        
        <RightNavDiv>
          {/* // <Link to="/projects"><ButtonDiv>Projects</ButtonDiv></Link>
          // <Link to="/blog"><ButtonDiv>Blog</ButtonDiv></Link>
          // <Link to="/contact"><ButtonDiv>Contact</ButtonDiv></Link> */}

          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>

        </RightNavDiv>
      </StyledNav>
    </header>
  )
}

export default NavBar