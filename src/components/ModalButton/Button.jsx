

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function ModalButton({btnName ,onClick}) {
  return (
    <>
     <Box sx={{p:2}}>
     <Button  variant="contained" color="success" onClick={onClick}>
        {btnName}
      </Button>
     </Box>
    </>
    
    
  );
}