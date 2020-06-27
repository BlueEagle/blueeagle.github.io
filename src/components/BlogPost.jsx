import React from 'react'
import styled from 'styled-components'

const BlogPost = (props) => {
  const { blog } = props
  const { title, date, author, paragraphs } = blog
  return (
    <BlogContainer>
      <h3>{title}</h3>
      <h4>{`${date}, ${author}`}</h4>
      {paragraphs.map(paragraph => {
        return <p dangerouslySetInnerHTML={{__html: paragraph}}/>
      })}
    </BlogContainer>
  )
}

export default BlogPost

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 2%;
  }
  p {
    margin: 1.5% 0;
  }
`