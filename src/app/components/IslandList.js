"use client"

import Island from "./Island";

function IslandList({ islands, handleIslandChange }) {
  const islandCards = islands.map((island) => <Island key={island.id} island={island} handleIslandChange={handleIslandChange}/>);

  return (

    <div className="islandList">{islandCards}</div>

  );
}

export default IslandList
