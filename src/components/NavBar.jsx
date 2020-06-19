import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = (props) => {

  // Styled components
  const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    background: lightblue;
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
  // const ButtonDiv = styled.div`
  //   box-sizing: border-box;
  //   height: 100%;
  //   background-color: red;
  // `
  const StyledLink = styled(Link)`
    padding: 3%;
    background-color: red;
    margin: 0;
  `

  return (
    <StyledNav>
      <div>
        <StyledH1>Collin's Code</StyledH1>
      </div>
      
      <RightNavDiv>
        {/* // <Link to="/projects"><ButtonDiv>Projects</ButtonDiv></Link>
        // <Link to="/blog"><ButtonDiv>Blog</ButtonDiv></Link>
        // <Link to="/contact"><ButtonDiv>Contact</ButtonDiv></Link> */}

        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>

      </RightNavDiv>
    </StyledNav>
  )
}

export default NavBar