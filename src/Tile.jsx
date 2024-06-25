import React from "react"

export default function Tile(props) {
    const [side, setSide] = React.useState(props.side)
    
    const styles = {
        backgroundColor: side ? "#222222" : "transparent"
    }
    
    function toggle() {
        setSide(prevSide => !prevSide)
    }
    
    return (
        <div style={styles} className="tile" onClick={toggle}></div>
    )
}