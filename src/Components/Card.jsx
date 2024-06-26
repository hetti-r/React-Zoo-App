import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {

  return (

    <div className="card">
      <div className="imgContainer">
        <img className="animalPic" src={`https://source.unsplash.com/210x210/?${name}`} />

        <button onClick={removeCard} className="delete"><span className="material-symbols-outlined">
          close
        </span></button>
      </div>

      <h3>{name}</h3>
      <Link to={name}>See more</Link>
      <div className="lowrow">
        <button onClick={removeLikes} className="minusHeart"><span className="material-symbols-outlined">
          heart_minus
        </span></button>

        <span className="material-symbols-outlined"> {likes >= 0 ? 'favorite' : 'heart_broken'} </span>

        <p className="counter">{likes}</p>

        <button onClick={addLikes} className="plusHeart"><span className="material-symbols-outlined">
          heart_plus
        </span></button>
      </div>
    </div>
  );
};

export default Card;