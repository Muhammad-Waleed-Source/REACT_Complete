import React from 'react'

function Albums(props) {
  return (
    <div>
        <h3>{props.id}</h3>
        <p>{props.title}</p>
    </div>
  )
}

export default Albums