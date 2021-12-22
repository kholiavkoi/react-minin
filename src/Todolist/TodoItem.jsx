import React, {useContext} from "react";
import Context from "../context";

export default function TodoItem(props) {
    const {removeList} = useContext(Context)
    let classes = []
    if (props.item.completed) {
        classes.push('done')
    }
    return (
        <li className={classes.join(' ')}>
            <span>
                <input checked={props.item.completed} type="checkbox" onChange={() => props.onChange(props.item.id)}/>
                <strong>{props.index + 1}.</strong>
                &nbsp;
                {props.item.title}
            </span>
            <button onClick={removeList.bind(null, props.item.id)}>&times;</button>
        </li>
    )
}