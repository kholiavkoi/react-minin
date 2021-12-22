import React, {useEffect} from "react";
import './App.css';
import Todolist from "./Todolist/Todolist";
import Context from "./context";
import AddToDo from "./Todolist/AddToDo";

function App() {
    const [list, setList] = React.useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(list =>
                setTimeout(() => {
                    setList(list)
                }, 2000))

    }, [])


    function toggleToDo(id) {
        setList(list.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }))
    }

    function removeList(id) {
        setList(list.filter(item => item.id !== id))
    }

    function addToDo(title) {
        setList(list.concat([
            {
                id: Date.now(),
                completed: false,
                title: title

            }
        ]))
    }

    return (
        <Context.Provider value={{removeList}}>
            <div className='wrapper'>
                <h1>List to do:</h1>
                <AddToDo onCreate={addToDo}/>
                {list.length ? <Todolist list={list} onToggle={toggleToDo}/> : <p>No todos</p>}

            </div>
        </Context.Provider>
    );
}

export default App;
