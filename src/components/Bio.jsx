import React from "react";
import profilePicture from "../imgs/prof_pic.jpg";
import Typed from "react-typed";
import styled from "styled-components";

const Bio = (props) => {
  return (
    <BioSection>
      <ProfPic src={profilePicture} alt="Profile picture" />
      <BioDiv>
        <StyledH2>Hello, I'm Collin.</StyledH2>
        <p>
          <Typed
            strings={[
              "React.js",
              "Node.js",
              "Material UI",
              "Python",
              "Java",
              "You name it!",
              "How can I help?",
            ]}
            typeSpeed={60}
          />
        </p>
      </BioDiv>
    </BioSection>
  );
};

export default Bio;

const BioSection = styled.section`
  box-sizing: border-box;
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    margin: 0 2%;
  }

  h2: {
    color: red;
    word-wrap: none;
  }

  @media (max-width: 1160px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-top: 5%;
  }
`;
const StyledH2 = styled.h2`
  white-space: nowrap;
`;

const ProfPic = styled.img`
  border-radius: 50%;
  width: 30rem;
  max-width: 100%;
  background-color: lightblue;
  box-shadow: 0 0 6px black;
`;
const BioDiv = styled.div`
  @media (max-width: 370px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
