//This was written in App.js
import React from 'react';
const App=() =>{
  return(
  <React.Fragment>
    <h1 className='clsn'>Component 1 ...   {3+3}</h1>
    <App2/>
  </React.Fragment>
  );
};
const App2=()=>{
  return React.createElement("h1",{},"Component 2 ...");
}
export default App;