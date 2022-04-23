import React from 'react';

/* This function puts the game and picture into an img in a col*/
function Cols(props) {
    return (
        <div className="col">
           <img src={props.gameImg} className="gamePic" alt={props.name}></img>
        </div>
    );
}

export default Cols;