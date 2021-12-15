import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Send() {
  return (
    <Stack direction="row" spacing={2}>
      <Button type="submit" variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}