import React from "react";

export default function Tile(props) {
    const [sideStatus, setSideStatus] = React.useState(props.sideStatus);

    const side = sideStatus ? props.emoji : props.word;

    function toggle() {
        setSideStatus((prevSide) => !prevSide);
    }

    return (
        <div
            className={"tile " + (sideStatus ? "emoji" : "text")}
            key={props.id}
            onClick={toggle}
        >
            <p className="text">{side}</p>
        </div>
    );
}
