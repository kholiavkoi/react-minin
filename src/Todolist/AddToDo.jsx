import React, {useState} from "react";

function AddToDo({onCreate}) {
    const [value, setValue] = useState('')
    function submitHandler(e) {
        e.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={(e) => setValue(e.target.value)} style={{marginRight: '10px'}}/>
            <button type="submit">Add to do</button>
        </form>
    )
}

export default AddToDo;