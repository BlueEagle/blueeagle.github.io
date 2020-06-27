import React from 'react'
import styled from 'styled-components'
import postData from '../resources/postData'
import BlogPost from './BlogPost'


const BlogPage = (props) => {
  const firstBlogPost = postData.shift()

  return (
    <BlogContainer>
      <HighlightContainer>
        <BlogPost blog={firstBlogPost} collapsed={false} />
      </HighlightContainer>
      <PostContainer>
        {postData.map(post => {
          return <BlogPost blog={post} collapsed={true} />
        })}
      </PostContainer>
    </BlogContainer>
  )
}

export default BlogPage


const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HighlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  min-width: 70%;
  margin-bottom: 3%;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 0;
  }
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 70%;

  @media (max-width: 700px) {
    width: 100%;
  }
`