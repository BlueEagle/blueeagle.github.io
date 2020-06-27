import React from 'react'
import styled from 'styled-components'
import postData from '../resources/postData'
import BlogPost from './BlogPost'


const BlogPage = (props) => {

  return (
    <HighlightContainer>
      <BlogPost blog={postData[0]} />
    </HighlightContainer>
  )
}

export default BlogPage

const HighlightContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 3px gray;
  padding: 1% 3%;
  width: 70%;
`