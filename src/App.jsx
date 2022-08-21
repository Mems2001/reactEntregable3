import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents'
import Location from './components/Location'
import useRym from './hooks/useRym'

const random = Math.floor(Math.random() * 126)

function App() {

  const [idInfo, setidInfo] = useState(random)

  const handleChange = e => {
      e.preventDefault()
      let a = e.target.formId.value
      if (a != 0) {
        setidInfo(a)
      } else {
        setidInfo(random)
      }
      
      console.log (idInfo)
  }

    const locApi = useRym(`https://rickandmortyapi.com/api/location/${idInfo}`)

  const [showRes, setshowRes] = useState(false)

  console.log (locApi)

  const showResidents = () => {
    setshowRes (!showRes)
  }

  return (
    <div className="App">

    <header className='mHeader'>
      <span className='tittle'>{`Rick & Morty App`}</span>
      </header>

    <form className='dim-form' onSubmit={handleChange}>
        <label htmlFor='formId'>Enter Id</label>
        <input type="text" placeholder='Id number between 1 - 126' id='formId'/>
        <button>Search</button>
    </form>

    <Location locData={locApi}/>

    <button className='res-btn' onClick={showResidents}>{showRes ? "Hide Residents" : "Show Residents"}</button>

    <div className='residentsCont'>
     
      {
        locApi?.residents.map(resUrl => (
          <CardResidents className={`cardR-${showRes}`} key={resUrl} url2={resUrl} />
        )
        )
      }
    </div>
     
    </div>
  )
}

export default App
