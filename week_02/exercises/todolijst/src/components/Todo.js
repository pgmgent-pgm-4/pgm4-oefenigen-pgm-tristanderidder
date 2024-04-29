import React, {useState} from 'react'

export default function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
        <h1>Todo</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Voeg een nieuwe taak toe"
      />
        <button onClick={addTodo}>Add todo</button>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
