"use client"

import { useState } from 'react';

import IslandForm from './IslandForm'
import IslandList from './IslandList'
import Search from './Search'

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islands[0])

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function handleIslandChange(island) {
    setCurrentIsland(island)
  }

  function incrementVisitors(id) {
    island.id === id ? { ...island, visitors: island.visitors + 1 } : island
  }

  const fitleredIslands = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList islands={fitleredIslands} handleIslandChange={handleIslandChange}/>
      </div>
      <IslandForm island={currentIsland} incrementVisitors={() => incrementVisitors(currentIsland.id)}/>
    </div>
  )
}

export default IslandsContainer