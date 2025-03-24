import React from 'react'

export default function CardContent(props) {
  return (
    <>
    <img src={props.src} alt={props.alt}/>
    <h5>{props.h5}</h5>
    <p>{props.p}</p>
    </>
  )
}
