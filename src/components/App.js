import React, { useState } from 'react';
import './../styles/App.css';

const Todo2 = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [updateInput, setUpdateInput] = useState('');

    function handleAddTodo() {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function handleEdit(index) {
        setEditIndex(index);
        setUpdateInput(todos[index]);
    }

    function handleUpdateTodo() {
        if (updateInput.trim() !== '') {
            const newTodos = [...todos];
            newTodos[editIndex] = updateInput;
            setTodos(newTodos);
            setEditIndex(null);
            setUpdateInput('');
        }
    }

    return (
        <div className='add_tasks_section'>
            <div className='tasks_section'>
                <h2>To Do List</h2>
                <textarea
                    type='text'
                    placeholder='Enter your List'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='task' onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type='text'
                                    placeholder='Update Text'
                                    value={updateInput}
                                    onChange={(e) => setUpdateInput(e.target.value)}
                                />
                                <button className='save' onClick={handleUpdateTodo}>Save</button>
                            </>
                        ) : (
                            <>
                                {todo}
                                <button className='edit' onClick={() => handleEdit(index)}>Edit</button>
                                <button className='delete' onClick={() => handleDelete(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo2;
