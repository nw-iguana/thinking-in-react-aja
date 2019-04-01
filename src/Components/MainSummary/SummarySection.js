import React from 'react'

export default function(props) {
    return (
        <div className="summary__option" key={props.mapKey}>
            <div className="summary__option__label">{props.mapKey}  </div>
            <div className="summary__option__value">{props.selected[props.mapKey].name}</div>
            <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.selected[props.mapKey].cost) }
            </div>
        </div>
    )
}