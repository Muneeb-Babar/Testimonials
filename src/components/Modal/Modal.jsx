import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ModalButton from '../ModalButton/Button';

import '../../css/Modal.css';

const style = (isMobile) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : 450, 
  height: isMobile ? 'auto' : 600, 
  bgcolor: 'white',
  boxShadow: 24,
  overflowY: isMobile ? 'auto' : 'unset', 
});

export default function ModalForm({ allInputs, heading, btn }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <div onClick={handleOpen}>{btn}</div>
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
          <Box sx={style(isMobile)}>
            <Typography
              id="transition-modal-title"
              variant="h4"
              style={{ textAlign: 'center', backgroundColor: 'lightblue', padding: '10px' }}
            >
              {heading}
            </Typography>
            {allInputs.map((item, index) => (
              <Box component="form" sx={{ p: 2 }} key={index}>
                <TextField fullWidth label={item.label} type={item.type} />
              </Box>
            ))}
            <ModalButton btnName={'Submit'} onClick={() => alert('Submit')} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
