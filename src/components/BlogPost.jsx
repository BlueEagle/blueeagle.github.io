import React, {useState} from 'react'
import styled from 'styled-components'
// import parser from 'react-html-parser'
import ReactMarkdown from 'react-markdown'

const BlogPost = (props) => {
  const { blog } = props
  const [collapsed, setCollapsed] = useState(props.collapsed)
  const { title, date, author, paragraphs } = blog

  return (
    <BlogContainer onClick={() => setCollapsed(!collapsed)}>
      <h3>{title}</h3>
      <h4>{`${date}, ${author}`}</h4>
      {!collapsed && paragraphs.map(paragraph => {
        return <ReactMarkdown source={paragraph} escapeHtml={false} />
      })}
    </BlogContainer>
  )
}

export default BlogPost

const BlogContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 3px gray;
  width: 100%;
  padding: 2%;

  h4 {
    margin-bottom: 2%;
  }
  p {
    margin: 1rem .5rem;
  }

  @media (max-width: 700px) {

  }
`