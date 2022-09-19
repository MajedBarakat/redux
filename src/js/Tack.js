import { ADD_TASK,  DELETE,  EDIT_TASK, FINISHED,  } from "./ActionsType";



const initialState ={
    listTask:[]
};
const Tack =(state= initialState ,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
            return {...state,listTask:[...state.listTask,payload]};
        case EDIT_TASK:
            return {...state,listTask:state.listTask.map((el)=>el.id===payload.id?{...el,text:payload.newTask}:el)};   
        
        case FINISHED : 
            return({listTask:[...state.listTask].map(e=>e.id===payload ? {...e,isDone :!e.isDone} : e )});
        case DELETE  : 
        return({listTask:[...state.listTask].filter(task=>task.id !== payload)});



        default:
            return state
    }
}
export default Tack