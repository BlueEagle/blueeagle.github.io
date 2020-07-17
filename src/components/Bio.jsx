import React from 'react'
import profilePicture from '../imgs/prof_pic.png'
import styled from 'styled-components'

const Bio = (props) => {
  

  return (
    <BioSection>
      <ProfPic src={profilePicture} alt="Profile picture" />
      <BioDiv>
        <h2>Hello. I'm Collin.</h2>
        <p>
          I'm a computer programmer with a background in many areas. I grew up learning native development with languages like C/C++, BASIC, Java, and Python. Right now, I'm schooling full time for full stack web development at Lambda School.
        </p>
      </BioDiv>
    </BioSection>
  )
}

export default Bio

const BioSection = styled.section`
  box-sizing: border-box;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    margin: 0 2%;
  }

  @media (max-width: 1160px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-top: 5%;
  }
`
const ProfPic = styled.img`
  border-radius: 50%;
  width: 30rem;
  max-width: 100%;
  background-color: lightblue;
  box-shadow: 0 0 6px black;
`
const BioDiv = styled.div`
  @media (max-width: 370px) {
    h2 {
      font-size: 1.0rem;
    }
    p {
      font-size: .8rem;
    }
  }
`