import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'

function App() {
  const[characters, setCharacters] = useState([])
  // after it is fetcher (loaded) then it is set to false
  const[isLoading, setIsLoading] = useState(true)

  // to make the request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result.data)
      setCharacters(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header />
    </div>
  );
}

export default App;
