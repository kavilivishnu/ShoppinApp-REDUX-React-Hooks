import React from 'react';
import './App.css';
import Application from '../src/ShoppingUI.js/Application';

function App() {

  return (
    <div className="App">
      <Application />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';

// function App() {

//   const value = useSelector(store => store.count);
//   const value1 = useSelector(store => store.array);
//   const dispatch = useDispatch();

//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [array1, setArray1] = useState([
//     { label: "", number: "" }
//   ]);

//   const handleAdd = () => {
//     dispatch({ type: "INCREMENT" });
//     setArray1([...value1, { label: input1, number: input2 }])
//     setInput1("");
//     setInput2("");
//   }

//   return (
//     <div className="App">
//       <h1>Count: {value}</h1>
//       <input value={input1} onChange={(e) => setInput1(e.target.value)} />
//       <input value={input2} onChange={(e) => setInput2(e.target.value)} />
//       <button onClick={(e) => handleAdd(e)} >ADD</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })} >SUBTRACT</button>
//       {array1.map((items, id) => (
//         <div key={id} >
//           <li>{items.label}</li>
//           <li>{items.number}</li>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


