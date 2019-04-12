import React from 'react'

function RehabsByCity(props) {
  return (
    <div>
      <p>State: {props.match.params.state}</p>
      <p>City: {props.match.params.city}</p>
    </div>
  )
}

export default RehabsByCity;
