import { useState , useEffect} from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newlist){
    localStorage.setItem('todos', JSON.stringify({todos : newlist}))
  }
  function handleAddTodos(newTodo) {
    const newTodolist = [...todos, newTodo]
    persistData(newTodolist)
    setTodos(newTodolist)
  }
  function handleDeleteTodos(index) {
    const newTodolist = todos.filter((todo, todoindex) => {
      return todoindex !== index
    })
    persistData(newTodolist)
    setTodos(newTodolist)
  }
  function handleEditTodos(index) {
    const todovalueToBeEdited = todos[index]
    setTodoValue(todovalueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localtodos = localStorage.getItem('todos')
    if(!localtodos){
      return
    }
    localtodos = JSON.parse(localtodos).todos
    setTodos(localtodos)    
  },[])

  return (
    <>
      <h1 id ="newcolor">TODO APP</h1>
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <Todolist handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos} />
    </>
  )
}

export default App
