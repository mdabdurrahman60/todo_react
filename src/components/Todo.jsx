import { useState } from "react";
import "../style.css"
const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input,setInput] = useState("")
    const handleSubmit = () =>{
        setTodos((todos)=>{
            return todos.concat({
            text: input,
            id:Math.floor(Math.random() * 20),
        })
    });
    setInput("")
};
const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));
  return (
    <div className="container">
        <input type="text" placeholder="type todo" value={input} onChange={e => setInput(e.target.value)} />
        <button className="submit" onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">
            {todos.map(({text,id})=>(
                <li className="list" key={id}>
                    <span className="todo">{text}</span>
                    <button className="close-button" onClick={()=>removeTodo(id)} > X </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo