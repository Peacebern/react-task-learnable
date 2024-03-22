import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, onUpdate }) => {
    return (
        <ul>
        {tasks.map((task, index) => (
            <TaskItem
            key={index}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
            />
        ))}
        </ul>
    );
};

export default TaskList;
