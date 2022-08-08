import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, updateLikes, onDonate }) {
  return (
    <div id="toy-collection">
      {toys.map(value => 
        <ToyCard 
          toy={value} 
          key={value.id} 
          updateLikes={updateLikes} 
          onDonate={onDonate}
        />
        )}
    </div>
  );
}

export default ToyContainer;
