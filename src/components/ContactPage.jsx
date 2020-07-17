import React from 'react'

import GithubCard from './GithubCard'

import styled from 'styled-components'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Box from '@material-ui/core/Box';


const ContactPage = (props) => {
    return (
        <ContactPageDiv>
            <Styledheader>Contact:</Styledheader>
            <ContactContainer>
                <StyledText><a href="mailto:me@balloucollin.dev"><Box><p>Email</p><EmailIcon style={{ fontSize: 80 }} /></Box></a></StyledText>
                <StyledText><a href="https://github.com/BlueEagle"><Box><p>Github</p><GitHubIcon style={{ fontSize: 80 }} /></Box></a></StyledText>
                <StyledText><a href="https://www.linkedin.com/in/collin-ballou-67749539/"><Box><p>LinkedIn</p><LinkedInIcon style={{ fontSize: 80 }} /></Box></a></StyledText>
                <StyledText><a href="https://www.facebook.com/ballou.collin"><Box><p>Facebook</p><FacebookIcon style={{ fontSize: 80 }} /></Box></a></StyledText>
            </ContactContainer>
            <GithubCard />
        </ContactPageDiv>
    )
}

export default ContactPage

const ContactPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 70%;

    @media (max-width: 500px) {
        box-sizing: border-box;
        width: 100%;
        /* padding: 1rem; */
    }
`

const ContactContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
const Styledheader = styled.h2`
    /* text-decoration: underline; */
`
const StyledText = styled.h3`
    padding: 2rem;


    @media (max-width: 824px) {
        flex-basis: 30%;
    }
    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`