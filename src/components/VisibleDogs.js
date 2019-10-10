import React from 'react'

//pass props to visible dogs component
const VisibleDogs = (props) => {
    return (
        <div>

            <h1>{props.dog.name}</h1>
            <p>{props.dog.bred_for}</p>
            <p>{props.dog.origin}</p>
            <p>{props.dog.breed_group}</p>

        </div>
    )
}

export default VisibleDogs;