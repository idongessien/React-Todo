import React from 'react';

const Todo = props => {
    return (
        <div>
        {props.tasks.map(task => (
            <div key={task.id}>
            <h3>{ task.task }</h3>
            <p>{ task.id }</p>
            <p>{ task.completed }</p>
            </div>
            ))}
        </div>
    );
};

export default Todo;