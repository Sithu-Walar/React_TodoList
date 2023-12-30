import { ACTIONS } from "./App"
export default function Todo({todo,dispatch}){
    return(
        <div className="box">  
           <p style={{color: todo.Complete? 'red':'black'}}>{todo.name}</p>
           <div className="button">

                <button onClick={()=>{
                    dispatch({type:ACTIONS.TOGGLE_TODOS,passData:{id:todo.id}})
                }}>Toggle</button>
                <button 
                onClick={()=>{
                    dispatch({type:ACTIONS.DELETE_TODOS,passData:{id:todo.id}})
                }}>Delete</button>
           </div>
        </div>
    )
}