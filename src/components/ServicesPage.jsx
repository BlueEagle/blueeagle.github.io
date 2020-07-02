import React from 'react'
import styled from 'styled-components'

const ServicesPage = (props) => {
  
  return (
    <ServicesPageContainer>
      <ServiceContainer>
        <h3>Web design</h3>
        <h4>Fully responsive web styling in CSS/LESS</h4>
        <p>Let's be honest, your website needs some love. Let me help!</p>
        <ServiceRate>Service rate: $125 per page</ServiceRate>
      </ServiceContainer>
      
      <ServiceContainer>
        <h3>iPhone repair</h3>
        <h4>iPhone screen & battery replacement</h4>
        <p>For a small service fee I can handle your iPhone repair needs.</p>
        <ServiceRate>Service rate: $30</ServiceRate>
      </ServiceContainer>

      <ServiceContainer>
        <h3>Laptop screen repair (+ optional free virus removal / optimization)</h3>
        <h4>Laptop screen replacement + virus removal</h4>
        <p>Bring in your laptop I'll make it all better!</p>
        <ServiceRate>Service rate: $50</ServiceRate>
      </ServiceContainer>

      <ServiceContainer>
        <h3>Virus removal and optimization</h3>
        <h4>Virus removal</h4>
        <p>Let's get those nasties out of your system! Make it purr!</p>
        <ServiceRate>Service rate: $30</ServiceRate>
      </ServiceContainer>
    </ServicesPageContainer>
  )
}

export default ServicesPage

const ServicesPageContainer = styled.section`
  @media (max-width: 370px) {
    width: 100%;
  }
`

const ServiceContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 0 3px gray;
  width: 100%;
  padding: 2% 5%;

  h4 {
    margin-bottom: 2%;
    color: gray;
  }
  p {
    margin: 1rem 0;
  }
`
const ServiceRate = styled.p`
  text-decoration: underline;
`