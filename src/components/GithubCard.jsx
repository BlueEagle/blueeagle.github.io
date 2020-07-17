import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Card } from '@material-ui/core';
import styled from 'styled-components'
const USER_NAME = 'BlueEagle'
const display = {
  large: '(max-width: 1400px)',
  small: '(max-width: 700px)',
  smaller: '(max-width: 500px)'
}

const GithubCard = props => {
  const [githubData, setGithubData] = useState(null) // set this back to null after using dummy data && uncomment useEffect, obviously.

  useEffect(() => {
    axios
        .get(`https://api.github.com/users/${USER_NAME}`)
        .then(res => setGithubData(res.data))
        .catch(err => console.error(`Error in loading Github card data: ${err}`))
  }, [])

  if (githubData === null) return (
    <>
    </>
  )
  return (
    <StyledCard raised>
        <a href={githubData.html_url}>
          <ProfileImage src={githubData.avatar_url}/>
        </a>
        <CardInfoDiv>
          <TitleDiv>
            <a href={githubData.html_url}><h3>{githubData.name}</h3></a>
            <Username href={githubData.html_url}><h5>{githubData.login}</h5></Username>
          </TitleDiv>
          {githubData.blog && <p>Website: <a href={githubData.blog}>{githubData.blog}</a></p>}
          <p>Public repos: {githubData.public_repos}</p>
          <p>Followers: {githubData.followers}</p>
          <p>Following: {githubData.following}</p>
        </CardInfoDiv>
        <BioText>"{githubData.bio}"</BioText>
    </StyledCard>
  )
}

export default GithubCard

const StyledCard = styled(Card)`
  padding: 1%;
  align-self: center;
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;

  h3 {
    line-height: 1.4;
  }

  @media ${display.small} {
    width: 100%;
  }
  @media ${display.large} {
    justify-content: center;
    padding-top: 1.5rem;
  }
`
const ProfileImage = styled.img`
  box-shadow: 0px 0px 5px black;
  border-radius: 10px;
  width: 250px;
`
const CardInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  p {
    align-self: flex-start;
  }
  h3, h5, p {
    white-space: nowrap;
    margin-left: 1.5rem;
    margin-right: 1rem;
  }

  @media ${display.smaller} {
    flex-basis: 100%;
    
    p {
      align-self: center;
    }
  }
`
const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: .5rem;
  margin-bottom: 2rem;
`
const Username = styled.a`
  color: darkslategrey;
`
const BioText = styled.p`
  width: 30%;
  align-self: center;
  color: gray;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.6rem;
  white-space: normal;
  overflow-wrap: break-word;

  @media ${display.large} {
    margin-top: 1rem;
    width: 70%;
  }
  @media ${display.smaller} {
    margin-bottom: 1rem;
  }
`