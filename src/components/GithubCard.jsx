import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Card } from '@material-ui/core';
import styled from 'styled-components'
const USER_NAME = 'BlueEagle'

const GithubCard = props => {
  const [githubData, setGithubData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
        .get(`https://api.github.com/users/${USER_NAME}`)
        .then(res => setGithubData(res.data))
        .catch(err => setError(`Error in loading Github card data: ${err}`))
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
        </CardInfoDiv>
    </StyledCard>
  )
}

export default GithubCard

const StyledCard = styled(Card)`
  padding: 1%;
  align-self: center;
  display: flex;

  h3, h5, p {
    white-space: nowrap;
    margin-left: 1.5rem;
    margin-right: 1rem;
  }
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
  justify-content: space-between;
`
const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: .5rem;
  margin-bottom: .5rem;
`
const Username = styled.a`
  color: darkslategrey;
  align-self: flex-start;
`