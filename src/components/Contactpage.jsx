import { Box, Container, Typography } from "@mui/material";
import Background from "./Background";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

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
        textAlign: 'center'
    }

const isMobile = window.matchMedia("(max-width: 768px)").matches;
export default function Contactpage() {
    return (<Box component='div'> 
        <Background/>
            <Container maxWidth="xl" sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Box sx={{ bgcolor: 'rgba(129, 128, 128, 0.7)', width: '70vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, mb: 5, borderRadius: 5 }}>

                    <Box  sx={{ borderRadius: 2, mt: 5, mb: 5}}>
                        {isMobile ? "" : <hr align="right" size="3" color='black' style={{ borderRadius: 15}} />}
                        <Typography color={'white'} variant={isMobile ? "h6" : "h3"} sx={textShadowG}>
                            НАШИ КОНТАКТЫ
                        </Typography>
                        {isMobile ? "" : <hr align="right" size="3" color='black' style={{ borderRadius: 15}} />}
                    </Box>
                    <YMaps >
                            <Box component='div' sx={{ textAlign: 'center', mb: 3}}>
                            <Typography color={'white'} variant={isMobile ? "h8" : "h5"} sx={textShadowT} mb={2}>
                                Мы находимся по адресу: г.Ставрополь, ул.Ленина 127
                            </Typography>
                                <Map defaultState={{ center: [45.042343, 41.986116], zoom: 17 }} width={700} height={400}>
                                    <Placemark defaultGeometry={[45.042390, 41.986300]} />
                                </Map>
                            </Box>
                    </YMaps>
                    <Typography color={'white'} variant={isMobile ? "h8" : "h5"} sx={textShadowT}>
                        Ждем вас с нетерпением!
                    </Typography>
                    <br />
                    
                    <br />
                    <Typography color={'white'} variant={isMobile ? "h8" : "h5"} sx={textShadowT} mb={5}>
                    ☎ +7-938-331-17-17 - Отдел продаж
                    </Typography>
                    
                </Box>
            </Container>
        </Box>)
}