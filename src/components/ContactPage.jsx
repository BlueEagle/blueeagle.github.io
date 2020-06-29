import React from 'react'
import styled from 'styled-components'

const ContactPage = (props) => {

    return (
        <ContactContainer>
            <Styledheader>Contact Me!</Styledheader>
            <br />
            <StyledText>Email: <a href="mailto:me@balloucollin.dev">me@balloucollin.dev</a></StyledText>
            <StyledText>GitHub: <a href="https://github.com/BlueEagle">BlueEagle</a></StyledText>
            <StyledText>LinkedIn: <a href="https://www.linkedin.com/in/collin-ballou-67749539/">	   &gt;	&gt;	&gt;here 	&lt;	&lt;	&lt;</a></StyledText>
            <StyledText>Facebook: <a href="https://www.facebook.com/ballou.collin">ballou.collin</a></StyledText>
        </ContactContainer>
    )
}

export default ContactPage

const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Styledheader = styled.h2`
    text-decoration: underline;
`
const StyledText = styled.h3`
    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`