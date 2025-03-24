import React from 'react'
export default function Button(props) {
  return (
    <div>
        <a className={props.className}>{props.text}
            <span>{props.icon}</span>
        </a>
    </div>
  )
}
