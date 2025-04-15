import React from 'react'

function PostCard(props) {
  return (
    <div className='post-card'>
        <h2>Id: {props.id}</h2>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard