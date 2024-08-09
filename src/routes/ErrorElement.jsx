import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ErrorImg from '../img/404.png'
import logo from '../img/logo.png'
import { Link } from "react-router-dom";
export default function ErrorElement() {
    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
          }}
        >
          <Container maxWidth="md">
            <Box component='div' bgcolor='ActiveCaption' borderRadius={14} mb={2} display='flex' flexDirection='row' alignContent='center'>
                <img style={{width: '125px',}} src={logo} alt='logo'/>
                <Typography variant="h1" color="white">
                  404
                </Typography>
                <Box component='div' display='flex' flexDirection='column' alignContent='center' alignItems='center' ml={5} mt={1.5}>
                    <Typography variant="h6" color="white">
                    Данной страницы не существует!
                    </Typography>
                    <Link to='/' style={{color: 'black'}}><Button color="inherit" variant="contained">Вернуться домой</Button></Link>
                </Box>
            </Box>
          </Container>
          <Box component='img' 
            src={ErrorImg}
            position='absolute'
            bottom={-50}
            zIndex={-1}
            />
        </Box>
      );
    }