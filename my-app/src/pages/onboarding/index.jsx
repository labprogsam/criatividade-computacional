import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledMainContent,
  StyledInput,
  StyledButton
} from './styles';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Onboarding() {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleClick = () => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push("/history");
    console.log('entrou')
  }

  return (
    <StyledMainContent onSubmit={(e) => handleSubmit(e)}>
      <StyledInput>
        <TextField
          required
          id="outlined-controlled"
          label="Escolha uma temática"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <StyledButton type="submit">
          <SendIcon />
        </StyledButton>
      </StyledInput>
    </StyledMainContent>
  );
}

export default Onboarding;
