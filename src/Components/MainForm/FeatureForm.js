import React from 'react'

export default function(props) {
    return (
        <div className="feature" key={props.mapKey}>
          <div className="feature__name">{props.mapKey}</div>
          <ul className="feature__list">
            { props.options }
          </ul>
        </div>)
}