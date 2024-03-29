import React, { useState} from "react";
import { FaStar} from 'react-icons/fa';
import './CreateReviewPage.css';


const StarRating = (props) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const updateValue = value => {
        props.changeValue(value);
        setRating(value);
    }

    return (
<div>
{[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
return (
    <label>
        <input
        id={i+1} 
        type="radio"
        input="rating"
        value= {ratingValue}
        onClick={() => updateValue(ratingValue)}
        /> 
    <FaStar 
    className="star" 
    color={ratingValue <= (hover || rating) ? "#E9AD20" : "#282c34"} 
    size={45} 
    onMouseEnter={() => setHover(ratingValue)}
    onMouseLeave={() => setHover(null)}
    />
    </label>
);
})}
</div>
    );
};


export default StarRating;