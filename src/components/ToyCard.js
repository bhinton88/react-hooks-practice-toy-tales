import React from "react";

function ToyCard({ toy, updateLikes, onDonate }) {

  const {name, image, likes} = toy

  function handleLikes(){
    const updatedLikes = likes + 1
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "likes": updatedLikes
      })
    })
    .then(response => response.json())
    .then(data => updateLikes(data) )
  }

  function handleDonate () {
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "DELETE",
    })
    onDonate(toy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
