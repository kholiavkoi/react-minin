import React from "react";
import TodoItem from "./TodoItem";

export default function Todolist (props){
    return (
        <ul>
            {props.list.map((item, index) => {
                return <TodoItem item={item} index={index} key={item.id} onChange={props.onToggle}/>
            })}
        </ul>
    )
}