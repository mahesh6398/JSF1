import React from 'react'

function Introduction(props) {

    console.log(props)
  return (
    <div className="intro">
        <h1>{props.name}</h1>
    </div>
  )
}

export default Introduction