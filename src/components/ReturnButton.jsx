import React from "react";
import styled from "styled-components";

const ReturnButton = () => {
  return (
    <a href="/">
      <StyledDiv>
        <h1>🠕</h1>
      </StyledDiv>
    </a>
  );
};

export default ReturnButton;

const StyledDiv = styled.div`
  /* padding: 5rem; */
  padding: 2.5rem 3rem;
  background-color: #62a8ac;
  display: inline-block;
  border-radius: 50%;
  position: fixed;
  bottom: 3%;
  right: 3%;
  box-shadow: 0 0 5px black;
`;
