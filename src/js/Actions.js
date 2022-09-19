import { ADD_TASK,DELETE,EDIT_TASK ,FINISHED} from "./ActionsType";


export const addTask =(newTask)=>{
    return{
        type:ADD_TASK,
        payload:newTask
    }
}
export const editTask =(id,newTask)=>{
    return{
        type:EDIT_TASK,
        payload:{id,newTask}
    }
}
export const finished = () => {
    return {
      type: FINISHED,
    };
  };

  export const deleted = (payload) => {
    return {
      type: DELETE,
      payload
    };
  };
  
 