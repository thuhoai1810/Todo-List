import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // localStorage.setItem('todos', JSON.stringify(newTodos));
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

//   useEffect(() => {
//     const todos = localStorage.getItem('todos') || "[]";

//     try {
//       const parsedTodos = JSON.parse(todos);
//       // Array.isArray ham xac dinh kieu cuar bien co phai mang hay ko
//       // ham .length de xac dinh so luong phan tu trong mang
//       if (!Array.isArray(parsedTodos) || parsedTodos.length === 0) {
//         return;
//       }
//       setTodos(parsedTodos)
//     } catch (error) {
//       console.log('error', error);
//     }
//   }, []);

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            placeholder='Update'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <button onClick={handleSubmit} >
           Update
          </button>
        </div>
      ) : (
        <div>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <button onClick={handleSubmit}>
           Add
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;