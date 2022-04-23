import React, {useState} from "react";

const App = function (){
    let [val,setVal] = useState('')
    function changeVal (e){
        return setVal(e.target.value)
    }
    let [todos,setTodos] =useState([
        {title:'睡觉',done:false},
        {title:'吃饭',done:true},
        {title:'学习React',done:false}
    ])
    function addTodo(){
        setTodos([...todos,{title: val,done: false}])
        setVal('')
    }
    function handleSetTodo(e,i){
        console.log(e,i)
        // todos[i].done = e.target.checked
        let nextTodos = [...todos]
        nextTodos[i].done = e.target.checked
        setTodos(nextTodos)

    }
    return <div>
        <input type='text' onChange={changeVal} value={val} />
        <button onClick={addTodo}>添加</button>
        <ul>
            {
                todos.map((todo,i)=>{
                    return <li>
                        <input type='checkbox' onChange={e => {handleSetTodo(e,i)}}/>
                        <span>{todo.title}</span>
                        </li>
                })
            }
        </ul>
    </div>
}
export default App
