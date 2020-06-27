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
  /* box-shadow: 0 0 3px gray; */
  /* padding: 1% 3%; */
  width: 70%;
  margin-bottom: 3%;
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0 0 3px gray; */
  background-color: white;
  /* padding: 1% 3%; */
  width: 70%;
`