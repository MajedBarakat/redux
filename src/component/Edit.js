import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import { EDIT_TASK } from '../js/ActionsType';

const Edit = ({task,newId}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [Edit, setEdit] = useState(task.text);
    const  dispatch = useDispatch();
    const updateTask = ()=>{
      dispatch({type: EDIT_TASK,payload:{newTask:Edit,id:newId}})  
      handleClose();
  }

  return (
    <div>  

      <Button variant="secondary" style={{ color: "white"}} onClick={handleShow} >
        Edit
      </Button>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edite Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<Form.Control type="text" className="input" value={Edit} placeholder="change todo" onChange={(e)=>setEdit(e.target.value)} />
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={()=>{handleClose();setEdit(task.text)}}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={updateTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  )
}

export default Edit