import { useState,useReducer} from 'react'
import './App.css'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODOS: 'add-todos',
  TOGGLE_TODOS: 'toggle-todos',
  DELETE_TODOS: 'delete-todos'
           }

function App() {
    const [name,setName] = useState('')
    const [todos,dispatch] = useReducer(reducer,[])
    
   

    function reducer(todos,action){
      switch(action.type){
        case ACTIONS.ADD_TODOS:
          return [...todos, addNewTodo(action.passData.name)]
        case ACTIONS.TOGGLE_TODOS:
            return todos.map(
              todo => {
                if(todo.id === action.passData.id){
                  return {...todo, Complete : !todo.Complete}
                } return todos
              }
            )
        case ACTIONS.DELETE_TODOS:
          return todos.filter(todo => todo.id != action.passData.id)
      }

      return todos
    }

    function addNewTodo(name){
      return {id: Date.now(),name:name,Complete:false}
    }

    // const todos =[
    //   {name: 'abc',
    //   id: 1,
    //   }
    // ]
  function handleForm(e){
    e.preventDefault();

    dispatch({type:ACTIONS.ADD_TODOS,passData:{name:name}})
    setName('')
  }
    console.log(name)
  return (
    <>
      <div className="container">
        <form action="" >
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
          
          <button onClick={handleForm} >Add</button>

        </form>
        <div className="content">
           {todos.map(
              todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
           )}
        </div>
      </div>
    
    </>
  )
}

export default App
