import { render } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";

/* This function puts the game and picture into an img in a col*/
function Cols(props) {

    return (
        <div className="col">
            <Link to="/about">       {/* !!!!CHANGE THIS TO LINK OF GAME PAGE!!!! */}
                <img src={props.gameImg} className="gamePic" alt={props.name} />
            </Link>
        </div>
    );
}

export default Cols;