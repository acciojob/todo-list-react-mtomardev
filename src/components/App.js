// import React,{useState} from "react";
// import './../styles/App.css';

// const App = () => {
//   // let [inputData, setInputData] = useState("")
//   // let [output, setOutput] = useState("")
//   //   function outputHandler(){
//   //     setOutput(inputData)
//   //   }
//   const [inputData, setInputData] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const [editIndex, setEditIndex] = useState();
//   const [updateInput, setUpdateInput] = useState('');

//   function handleAddTodo(){
    
//     if(inputData !== ''){
//       setTodoList([...todoList, inputData])
    
//     }
    
    
    
//   }

//   return (
//     <div>
//         {/* Do not remove the main div */}
//         {/* <h1>To Do List</h1> */}
//         {/* <input type="text" onChange={(e) => setInputData(e.target.value)}/>
//         <button onClick={outputHandler} >Add</button>
//         {
//           output && <div>{output} <button>Edit</button><button>Delete</button></div>
//         } */}

//         <h1>To Do List</h1>
//         {/* <input type="text" placeholder="Enter To do" onChange={(e) => setInputData(e.target.value)}/>
//         <button onClick={handleAddTodo}>Add</button>
//         <ul>
//         {
//           todoList.map((todoList, index) =>{
//             <li key={index}>
//               {
//                  editIndex === index ? (
//                   <>
//                   </>
//                  ):(<>
//                   {todoList}
//                   <button>Edit</button>
                  
//                   </>
//                  )
//                 }
            
//             <button>Delete</button>  
//             </li>
//           })
//         }
//         </ul>
//  */}

//     </div>
//   )
// }

// export default App


import React, {useState} from 'react'

const Todo2 = () =>{
    const[todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState();
    const [updateInput, setUpdateInput] = useState('');

    function handleAddTodo(){
        if(inputValue.trim() !== ''){
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }

    function handleDelete(index){
        const newTodo = [...todos];
        newTodo.splice(index, 1);
        setTodos(newTodo)
    }

    function handleEdit(index){
        setEditIndex(index);
        setUpdateInput(todos[index])
    }

    function handleUpdateTodo(index){
        if(updateInput.trim() !== '' ){
            const newTodo = [...todos]
            newTodo[index] = updateInput;
            setTodos(newTodo);
            setEditIndex();
            setUpdateInput('')
        }
    }

    return(
        <div className='add_tasks_section'>
            <div className=' tasks_section'>
            <h1>Handle Todo ADD Edit Delet</h1>
            <input type='text' placeholder='Enter your List' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <button className=' task' onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {
                    todos.map((todos, index)=>{
                        return(
                        <li key={index}>
                          {
                            editIndex === index ?(
                                <>
                                <input type='text' placeholder='Update Text' 
                                value={updateInput}
                                onChange={(e)=>setUpdateInput(e.target.value)}/>
                                <button className='save' onClick={() => handleUpdateTodo(index)}>Save</button>
                                </>
                            ) : (
                                <>
                                    {todos}
                                    <button className=' edit' onClick={()=> handleEdit(index)}>Edit</button>    
                                </>
                            )
                          }      
                            
                            <button className=' delete' hidden={editIndex === index} onClick={() => handleDelete(index)}>Delet</button>
                        </li>
                        )
                    })
                }


                </ul>            
        </div>
    )
}
export default Todo2;