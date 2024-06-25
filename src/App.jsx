import React from "react"
import './App.css'
import Tiles from "./TileData"
import Tile from "./Tile"

function App() {
  const [tiles, setTiles] = React.useState(Tiles)
  
  const tileElements = tiles.map(tile => (
      <Tile key={tile.id} side={tile.on} />
  ))
  
  return (
      <main>
          <h1>What is that called?</h1>
          {tileElements}
      </main>
  )
}

export default App
