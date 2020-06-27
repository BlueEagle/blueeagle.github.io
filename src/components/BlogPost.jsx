import React from 'react'
import styled from 'styled-components'
// import parser from 'react-html-parser'
import ReactMarkdown from 'react-markdown'

const BlogPost = (props) => {
  const { blog } = props
  const { title, date, author, paragraphs } = blog
  return (
    <BlogContainer>
      <h3>{title}</h3>
      <h4>{`${date}, ${author}`}</h4>
      {paragraphs.map(paragraph => {
        return <ReactMarkdown source={paragraph} escapeHtml={false} />
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

// linkFix, return links properly in jsx in their proper place. Make it exist.