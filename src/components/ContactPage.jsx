import React from 'react'
import styled from 'styled-components'

const ContactPage = (props) => {

    return (
        <ContactContainer>
            <Styledheader>Contact Me!</Styledheader>
            <br />
            <h3>Email: <a href="mailto:me@balloucollin.dev">me@balloucollin.dev</a></h3>
            <h3>GitHub: <a href="https://github.com/BlueEagle">BlueEagle</a></h3>
            <h3>LinkedIn: <a href="https://www.linkedin.com/in/collin-ballou-67749539/">	   &gt;	&gt;	&gt;here 	&lt;	&lt;	&lt;</a></h3>
            <h3>Facebook: <a href="https://www.facebook.com/ballou.collin">ballou.collin</a></h3>
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