import React from "react";
import "./App.css";
import TileData from "./TileData";
import Tile from "./Tile";

function App() {
    const [tiles, setTiles] = React.useState(TileData);

    const tileElements = tiles.map((tile) => (
        <Tile
            key={tile.id}
            sideStatus={tile.sideStatus}
            emoji={tile.emojiSide}
            word={tile.wordSide}
        />
    ));

    return (
        <main>
            <h1>What is that called?</h1>
            {tileElements}
        </main>
    );
}

export default App;
