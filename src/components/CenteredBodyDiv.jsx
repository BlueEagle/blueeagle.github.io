import React from 'react'
import styled from 'styled-components'

const CenteredBodyDiv = (props) => {
  const { style } = props
  const { superLightBlue } = style

  const StyledDiv = styled.div`
    background: ${superLightBlue}
  `

  return (
    <StyledDiv>

    </StyledDiv>
  )
}

export default CenteredBodyDiv