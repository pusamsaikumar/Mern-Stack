import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setOPEN } from '../redux/API';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { OPEN } from '../redux/constant';
import VideoBackground from '../videobackground/VideoBackground';
import { Modal } from 'react-bootstrap';

const MovieModel = ({open,id}) => {
  //  const open = useSelector(state => state?.open);
// const id = useSelector(state => state?.id);

const dispatch = useDispatch();
const handleClose =() => {
    dispatch(setOPEN(false));
   
}
  return (
    <>
      <Modal show={open}  onHide={handleClose} 
      
      
      dialogClassName="modal-dialog-centered"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body >
        <VideoBackground moviesId={id} bool = {true}/>
        </Modal.Body>
        <Modal.Footer>
           <Button variant='secondary' onClick={handleClose}>close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MovieModel