import React, {useState,useEffect} from "react";

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
    let active = todos.filter(todo=>todo.done).length
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
    let [allDone,setAllDone] = useState(false)
    function handleAllDone(e){
        console.log(e)
        const nextTodos =[...todos]
        nextTodos.forEach(todo=>{
            todo.done = e.target.checked
        })
        setTodos(nextTodos)
        setAllDone(e.target.checked)
    }
    function handleRemoveTodo(i){
        const nextTodos = [...todos]
        nextTodos.splice(i,1)
        setTodos(nextTodos)
    }
    useEffect(()=>{
        setAllDone(active === todos.length)
    },[todos])
    return <div>
        <input type='text' onChange={changeVal} value={val} />
        <button onClick={addTodo}>添加</button>
        {
            todos.length
                ? <ul>
                    {
                        todos.map((todo,i)=>{
                            return <li>
                                <input type='checkbox' onChange={e => {handleSetTodo(e,i)}} checked={todo.done}/>
                                <span>{todo.title}</span>
                                <span onClick={e=>handleRemoveTodo(i)}>❌</span>
                            </li>
                        })
                    }
                </ul>
                :<div>暂无数据</div>


        }
        <div>
            全选
            <input type='checkbox'
                   onChange={e=>handleAllDone(e)}
                   checked={allDone}
            />
            <span>{active} / {todos.length}</span>
        </div>
    </div>
}
export default App
