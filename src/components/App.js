
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [inputData, setInputData] = useState("")
  let [output, setOutput] = useState("")
    function outputHandler(){
      setOutput(inputData)
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To Do List</h1>
        <input type="text" onChange={(e) => setInputData(e.target.value)}/>
        <button onClick={outputHandler} >Add</button>
        {
          output && <div>{output} <button>Edit</button><button>Delete</button></div>
        }




    </div>
  )
}

export default App
