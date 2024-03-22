import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(task.id, editedText); // Pass task ID and edited text to onUpdate
        setIsEditing(false);
    };


    const handleChange = (e) => {
        setEditedText(e.target.value);
    };

    return (
        <li>
        {!isEditing ? (
            <>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task)}
            />
            <label>{task.text}</label>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => onDelete(task)}>Delete</button>
            </>
        ) : (
            <>
            <input
                type="text"
                value={editedText}
                onChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
            </>
        )}
        </li>
    );
};

export default TaskItem;



