import React from 'react';

function toDoItem(properties) {
    let descript = properties.item.description === null ? "N/A" : properties.item.description
    const completedStyle = {
        fontStyle: "italic",
        color: "orange",
        textDecoration: "line-through"
    }

    return(
        <div>
            <div className="todo-item">
                <input type="checkbox" 
                onChange = {() => properties.handleChange(properties.item.id)}
                checked={properties.item.completed}/>
                <h3 style= {properties.item.completed ? completedStyle : null}>{properties.item.text}</h3>
            </div>
            <div>
                <p className="description" style= {properties.item.completed ? completedStyle : null}><b>Description : </b>{descript}</p>
            </div>
            <hr/>
            <hr/>
        </div>
    );
}

export default toDoItem;