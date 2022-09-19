import { Button,Modal,Form } from 'react-bootstrap';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../js/Actions';

const Add = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [text,settext]=useState('');
    const dispatch =useDispatch();
    const handleClick =(e)=>{e.preventDefault()
    
    if (text.trim()) {
      dispatch(addTask({id:Math.random(),text:text,isDone:false}))
      settext('') 
    } else {
      alert('can not add an empty task')
    }
    handleClose()
    }
  return (
    <div>
        
        <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e)=>{settext(e.target.value)}}
            >
              <Form.Control as="textarea"  />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Add