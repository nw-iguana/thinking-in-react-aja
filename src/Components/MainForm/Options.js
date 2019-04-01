import React from 'react'

export default function(props) {
    return <li key={props.index} className="feature__item">
            <div className={props.featureClass}
              onClick={() => props.updateFeature(props.mapKey, props.item)}>
                { props.item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.item.cost) })
            </div>
          </li>
}