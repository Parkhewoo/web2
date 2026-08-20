import React, { useState } from 'react';
import './TodoListApp.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // 할 일 추가 함수
    const handleAddTask = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    // 엔터 키 감지 함수
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    // 할 일 삭제 함수 (더블클릭 시 실행)
    const handleDeleteTask = (indexToDelete) => {
        const newTodos = todos.filter(
            (todo, index) => index !== indexToDelete
        );

        setTodos(newTodos);
    };

    return (
        <div className="todo-container">
            <h2>My Groceries</h2>

            <div className="input-group">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a new item..."
                />

                <button onClick={handleAddTask}>
                    Add Task
                </button>
            </div>

            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onDoubleClick={() => handleDeleteTask(index)}
                        title="더블클릭하여 삭제"
                        style={{ cursor: 'pointer' }}
                    >
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;