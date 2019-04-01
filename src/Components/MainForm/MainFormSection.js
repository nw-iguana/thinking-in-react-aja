import React from 'react'

export default function MainFormSection(props) {
   return ( 
    <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        { props.features }
    </section>
   )
}