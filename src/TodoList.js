import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className='card w-100 p-5 text-center'>
        <div className='card-title'>
          <h1>Todo List</h1>
        </div>
        <div className='card-body'>
          <ul class="list-group">
            {todos.map(todo => (
              <li key={todo.id} class="nav-link">{todo.title}</li>
            ))}
          </ul>
          <button onClick={handlePreviousPage} className='btn btn-dark bg-secondary p-3 m-3'>previous</button>
          <button onClick={handleNextPage} className='btn btn-dark bg-secondary p-3 m-3'>next</button>
        </div>
      </div>
    </div>
  )
}
