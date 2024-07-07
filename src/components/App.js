import React from "react";
import{ useState } from "react";


const App = () =>{

    const [newTodo, setNewTodo] = useState('');
    const [count, setCount] = useState(1000000000);
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    console.log(todo)

    return (
        <div id="main">
            <h1>My todos</h1>
            <p id="todo-0">{newTodo}</p>
            <button id="add-todo-btn" onClick={() => setNewTodo('New Todo')}>Add Todo</button>
            <div id="incr-cnt">
                Count: 0 <button  id="incr-btn" onClick={() => setCount(count + 1)}>+</button>
                <div id="calc">{count}</div>
            </div>

            <h1>React.memo</h1>

            <input id="skill-input" value={input} type="text" placeholder="todo task" onChange={(e) => setInput(e.target.value)} />    
            <button id="skill-btn" onClick={() => setTodo([...todo, input])}>Add Skill</button>

            <ul id="item-jumbotron">
                {todo && (todo.map((task, index)=>(
                    <li key={index}>{task}</li>
                )))
            }       
            </ul>
        </div>
    );

}


export default App;