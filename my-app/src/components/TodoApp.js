import React, { useState } from 'react';
import TaskList from './TaskList';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    const renderTasks = () => {
        return (
        <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onUpdate={updateTask}
        />
        );
    };

    const addTask = () => {
        const taskText = prompt("Enter task:");
        if (taskText) {
        setTasks([...tasks, { text: taskText, completed: false }]);
        }
    };

    const toggleTask = (taskToToggle) => {
        setTasks(tasks.map(task =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    };

    const updateTask = (index, newText) => {
            setTasks(tasks.map((task, i) =>
            i === index ? { ...task, text: newText } : task
            ));
        };
    


    return (
        <div className="container">
        <h1>YOUR PERSONAL TO-DO LIST</h1>
        <input type="text" placeholder="Add new task..." onKeyPress={(e) => e.key === 'Enter' && addTask()} />
        {renderTasks()}
        <div className="btn-container">
            <button onClick={addTask}>Add Task</button>
        </div>
        </div>
    );
};

export default TodoApp;
