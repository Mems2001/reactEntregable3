import React from 'react'

const Location = ({locData}) => {
  return (
    <article className='card'>

        <h2>{locData?.name}</h2>

        <div className='card-body'>
            <div><b>Dimension: </b>{locData?.dimension}</div>
            <div><b>Type: </b>{locData?.type}</div>
            <div><b>Population: </b>{locData?.residents.length}</div>
        </div>

    </article>
  )
}

export default Location