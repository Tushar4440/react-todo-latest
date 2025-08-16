import { useState } from "react"

export default function Todoinput(props) {
    const { handleAddTodos ,todoValue, setTodoValue } = props

    return (
        <>
            <header>
                <input value={todoValue} id="input" autocomplete="off"  onChange={(e) => setTodoValue(e.target.value)} placeholder="Enter Todo..." />
                <button onClick={() => {
                    handleAddTodos(todoValue) 
                    setTodoValue('') 
                }}>Add</button>
            </header>
        </>
    )
}