import React from 'react'
import './SignIn.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
function SignUp() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xm">
      <Box sx={{ bgcolor: '#cfe8fc', padding: "1em", height: '100vh', margin: '1em', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Card sx={{ minWidth: 700,  boxSizing: 'border-box' }}>
    <CardContent>
    </CardContent>
    <CardActions>
       <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <Card sx={{ minWidth: 700 , boxSizing: 'border-box'}}>
    <CardContent>
    <Box  component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '45ch' },
    }}
    noValidate
    autoComplete="off"
>
  </Box>
  </CardContent>  
    {/* <CardActions>
      <Button size="big" onSubmit={handleSubmit}>Sign In</Button>
    </CardActions> */}
  </Card>
        </Box>
    </Container>
  </React.Fragment>
  )
}

export default SignUp