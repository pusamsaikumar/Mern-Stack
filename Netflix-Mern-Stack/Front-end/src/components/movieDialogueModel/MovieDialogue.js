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

//const MovieDialogue = () => {
const MovieDialogue = ({open,id}) => {
//  const open = useSelector(state => state?.open);
// const id = useSelector(state => state?.id);
const dispatch = useDispatch();
const handleClose =() => {
    dispatch(setOPEN(false));
}
  return (
 
   <React.Fragment>
      
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" 
      >
       <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <VideoBackground moviesId={id} bool = {true}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  
  )
}

export default MovieDialogue;