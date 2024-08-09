import * as React from 'react';
import Container from '@mui/material/Container';
import background from '../img/zal.jpg'
import vk from '../img/vk.svg'
import pris from '../img/pris.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from '@mui/material/colors';
const isMobile = window.matchMedia("(max-width: 768px)").matches;

const textShadowG = { textShadow: `-0   -1px 3px #000000,
    0   -1px 3px #000000,
    -0    1px 3px #000000,
    0    1px 3px #000000,
    -1px -0   3px #000000,
    1px -0   3px #000000,
    -1px  0   3px #000000,
    1px  0   3px #000000,
    -1px -1px 3px #000000,
    1px -1px 3px #000000,
    -1px  1px 3px #000000,
    1px  1px 3px #000000,
    -1px -1px 3px #000000,
    1px -1px 3px #000000,
    -1px  1px 3px #000000,
    1px  1px 3px #000000;`}

const textShadowT = { 
    textShadow: `-0   -1px 0   #000000,
		 0   -1px 0   #000000,
		-0    1px 0   #000000,
		 0    1px 0   #000000,
		-1px -0   0   #000000,
		 1px -0   0   #000000,
		-1px  0   0   #000000,
		 1px  0   0   #000000,
		-1px -1px 0   #000000,
		 1px -1px 0   #000000,
		-1px  1px 0   #000000,
		 1px  1px 0   #000000,
		-1px -1px 0   #000000,
		 1px -1px 0   #000000,
		-1px  1px 0   #000000,
		 1px  1px 0   #000000;`,
    textAlign: 'left',
    mb: 5
}
export default function HomeInfo () {
    const InstagramPlayLinkHandle = () => {
        window.open("https://www.instagram.com/mir__fitness")
    }
    const VKLinkHandle = () => {
        window.open("https://vk.com/mirfitness26")
    }
    const WALinkHandle = () => {
        window.open("https://api.whatsapp.com/send/?phone=79383311717")
    }
    return (<div style={{margin: 0}}>
    {isMobile ? '' : <Box unselectable='on'
            component="img"
            sx={{
                position: 'absolute',
                height: '100vh',
                width: '99vw',
                opacity: 1, 
                bgcolor: 'Background',
                zIndex: -1
            }}
            alt="Background"
            src={background}
            />}
        

          <Container maxWidth="xl" sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Box sx={{ bgcolor: 'rgba(129, 128, 128, 0.7)', width: '70vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, borderRadius: 5 }}>

                    <Box  sx={{ borderRadius: 2, mt: 5}}>
                        {isMobile ? "" : <hr align="right" size="3" color='black' style={{ borderRadius: 15}} />}
                        <Typography color={'white'} variant={isMobile ? "h6" : "h3"} sx={textShadowG}>
                            МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                        </Typography>
                        
                        {isMobile ? "" : <hr align="right" size="3" color='black' style={{ borderRadius: 15}} />}
                    </Box>
                    
                    <Box component='div' sx={{ fontSize: '1.5rem'}}>

                        <img unselectable='on' src={pris} alt='pris' style={{ position: 'absolute', width: 50, MozUserSelect: 'none', WebkitUserSelect: 'none', userSelect: 'none', zIndex: 1}}/>
                        
                        <Box onClick={InstagramPlayLinkHandle} sx={{ backgroundColor: grey[200],  mt: 5, borderRadius: 5}}>
                            <Button color='inherit' size='large' component='div' sx={{ backgroundColor: grey[200], borderRadius: 5, zIndex: 0}}>
                                <InstagramIcon color='inherit' sx={{ zIndex: 1}} />
                                {'\u00A0'}<span style={{ fontSize: '1.5rem'}}>INSTAGRAM</span>
                            </Button>
                        </Box>

                        <Box onClick={VKLinkHandle} sx={{ backgroundColor: grey[200],  mt: 5, borderRadius: 5}}>
                            <Button color='inherit' size='large' component='div' sx={{ backgroundColor: grey[200], borderRadius: 5}} >
                                <img src={vk} style={{ width: 25 }} alt='vk'/>
                                {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<span style={{ fontSize: '1.5rem'}}>VK</span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                            </Button>
                        </Box>

                        <Box onClick={WALinkHandle} sx={{ backgroundColor: grey[200],  mt: 5, mb: 5, borderRadius: 5}}>
                            <Button color='inherit' size='large' component='div' sx={{ backgroundColor: grey[200], borderRadius: 5}}>
                                <WhatsAppIcon color='inherit' />
                                {'\u00A0'}<span style={{ fontSize: '1.5rem'}}>WhatsApp</span> 
                            </Button>
                        </Box>

                    </Box>
                </Box>
          </Container>
          <Container maxWidth="xl" sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 10}}>
            <Box sx={{ bgcolor: 'rgba(129, 128, 128, 0.7)', width: '70vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1, borderRadius: 5}}>
                <Box sx={{ borderRadius: 2, mt: 5}}>
                        <hr align="right" size="3" color='black' style={{ borderRadius: 15}} /> {/**'-0   -1px 6px #000000,  0   -1px 6px #000000, -0    1px 6px #000000, 0    1px 6px #000000, -1px -0   6px #000000, 1px -0   6px #000000,-1px  0   6px #000000, 1px  0   6px #000000,-1px -1px 6px #000000, 1px -1px 6px #000000,-1px  1px 6px #000000, 1px  1px 6px #000000,-1px -1px 6px #000000, 1px -1px 6px #000000,-1px  1px 6px #000000, 1px  1px 6px #000000;' */}
                        <Typography color={'white'} variant={isMobile ? "h6" : "h3"} sx={textShadowG}>
                            
                            МЫ ПОСТОЯННО СОВЕРШЕНСТВУЕМСЯ
                        </Typography>
                        <hr align="right" size="3" color='black' style={{ borderRadius: 15}} />
                        <Typography variant={isMobile ? "h7" : "h5"} color={'white'} sx={textShadowT}>
                            <br />
                            Ждите нас на <img src='https://img.icons8.com/?size=100&id=22982&format=png&color=000000' alt='google play' style={{ width: 25}}/>GooglePlay и  <img src='https://img.icons8.com/?size=100&id=0Po6oGxTbXFk&format=png&color=000000' alt='App Store' style={{ width: 25}}/>AppStore!
                        </Typography>
                </Box>
            </Box>
          </Container>

          </div>);
}