import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';

import logo from '../img/logo.png';
import zal from '../img/zal.jpg'
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        МИР Fitness
      </Typography>
      <Divider />
      <List>
          <ListItem key="Главная" disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to='/' >
                <Button key="Главная" sx={{ color: 'black' }}>
                  Главная
                </Button>
              </Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const darkTheme = createTheme({
    palette: {
        primary: {
            backgroundImage: zal,
            main: '#050505',

        },
    },
  });

  return (<Box display="fixed">
      <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
            
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', pl: 1, pt: 5, pb: 5}}>
          <img style={{width: '100px'}} src={logo} alt='logo'/>
          </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    
                    
                    <Link to='/' >
                      <Button key="Главная" sx={{ color: '#fff' }}>
                        Главная
                      </Button>
                    </Link>
                    <Link to='/about' >
                      <Button key="Главная" sx={{ color: '#fff' }}>
                        О нас
                      </Button>
                    </Link>
                    <Link to='/contacts' >
                      <Button key="Главная" sx={{ color: '#fff' }}>
                        Контакты
                      </Button>
                    </Link>
                </Box>
          </Box>
          
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
          {drawer}
        </Drawer>
      </nav>
  </Box>);
}

export default DrawerAppBar;