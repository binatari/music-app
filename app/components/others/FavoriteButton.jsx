'use client';
import { useState } from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const FavoriteButton = () => {
const [isFavorite, setIsFavourite] = useState(false)
const handleFavoriteClick =()=>setIsFavourite(!isFavorite)

    return (
        <button
            className={ isFavorite ? `favorite active` : 'favorite' }
            onClick={ handleFavoriteClick }
        >
            {/* { isFavorite ? <AiFillHeart /> : <AiOutlineHeart /> } */}
        </button>
    );
};

export default FavoriteButton;
