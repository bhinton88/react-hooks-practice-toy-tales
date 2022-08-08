import React, { useState } from "react";

function ToyForm({ addNewToy }) {

  const [toyFormData, setToyFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleFormChange(event) {
    setToyFormData({
      ...toyFormData,
      [event.target.name]: event.target.value
    })
  }

  function handleFormSubmit() {
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyFormData)
    })
    .then(response => response.json())
    .then(data => addNewToy(data))
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value= {toyFormData.name}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyFormData.image}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
