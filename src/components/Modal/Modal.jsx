

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TextField } from '@mui/material';
import ModalButton from '../ModalButton/Button';

import '../../css/Modal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height:600,
  bgcolor: 'white',
  boxShadow: 24,
//   p: 3,
};

export default function ModalForm({allInputs,heading, btn}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>{btnValue}</Button> */}
      <div onClick={handleOpen}>      {btn}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" style={{textAlign:'center',backgroundColor:'lightblue',padding:'10px'}} >{heading}</Typography>
            {allInputs.map((item,index)=>{
                return <>
                <Box component='form' sx={{p:2}}>
                <TextField key={index}  fullWidth label={item.label} type={item.type}/>
                </Box>
                
                </>

            })}
            <ModalButton  btnName={'Submit'} onClick={()=>{alert('Submit')}}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
