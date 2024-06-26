import React from 'react';
import {simpsons} from "./data/data";
import Simpsons from "./component/Simpsons";
import {ISimpsonsModel} from "./model/ISimpsonsModel";



function App  () {
  return (
    <div>
        {
            simpsons.map((character: ISimpsonsModel) => <Simpsons character={character}/>)
        }

    </div>
  );
}

export default App;
