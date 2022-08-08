import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])
 
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(data => setToyData(data))
  },[])

  function addNewToy (newToy) {
    setToyData([...toyData, newToy])
  }

  function updateLikes(updatedToy) {
    setToyData(toyData.map(value => {
      if(value.id === updatedToy.id){
        return updatedToy
      } else {
        return value
      }
    }))
  }

  function onDonate(removedToy) {
    const updatedToyData = toyData.filter(value => removedToy.id !== value.id)
    setToyData(updatedToyData)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toyData}
        updateLikes={updateLikes}
        onDonate={onDonate}
      />
    </>
  );
}

export default App;
