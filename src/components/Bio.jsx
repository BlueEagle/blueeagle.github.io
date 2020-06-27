import React from 'react'
import profilePicture from '../imgs/prof_pic.jpg'
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
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    margin: 0 2%;
  }
`
const ProfPic = styled.img`
  border-radius: 50%;
  width: 30rem;
`
const BioDiv = styled.div`

`