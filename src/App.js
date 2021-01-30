import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

function App() {
  const[characters, setCharacters] = useState([])
  // after it is fetcher (loaded) then it is set to false
  const[isLoading, setIsLoading] = useState(true)
  // whatever we type in search
  const[query, setQuery] = useState('')

  // to make the request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data)
      setCharacters(result.data)
      setIsLoading(false)
    }
    fetchItems()
    // whenever this changes, useEffect fires off again
  }, [query])

  return (
    <div className='container'>
      <Header />
      {/* passing query up from the search */}
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
