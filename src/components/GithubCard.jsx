import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { githubDummyData } from '../resources/dummyData'

import { Card } from '@material-ui/core';
import styled from 'styled-components'
const USER_NAME = 'BlueEagle'

const GithubCard = props => {
  const [githubData, setGithubData] = useState(githubDummyData) // set this back to null after using dummy data && uncomment useEffect, obviously.
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   axios
  //       .get(`https://api.github.com/users/${USER_NAME}`)
  //       .then(res => setGithubData(res.data))
  //       .catch(err => setError(`Error in loading Github card data: ${err}`))
  // }, [])

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

  h3 {
    line-height: 1.4;
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
  align-self: center;
  color: gray;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.6rem;
  white-space: normal;
  overflow-wrap: break-word;
`