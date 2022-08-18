import React from 'react'
import useRym from '../hooks/useRym'

const CardResidents = ({url2 , className}) => {
    const resident = useRym(url2)
  return (
    <article className={`resCard ${className}`}>
        <header>
            <img src={resident?.image} alt={`image of ${resident?.name}`}/>
            <div className='status-info'>
                <div className={`status-circle sc-${resident?.status}`}></div>
                <div>Curret Status: {resident?.status}</div>
            </div>
        </header>
        
        <div className='resCard-body'>
            <h2>{resident?.name}</h2>
            <span>Species: {resident?.species}</span>
            <span>Origin: {resident?.origin.name}</span>
            <span>Episodes Appeareances: {resident?.episode.length}</span>
        </div>
    </article>
  )
}

export default CardResidents