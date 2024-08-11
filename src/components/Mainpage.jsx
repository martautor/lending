import { Box, Container, Typography } from "@mui/material";
import Background from "./Background";
import CustomImageList from "./ImageList";
const isMobile = window.matchMedia("(max-width: 768px)").matches;
export default function Mainpage() {
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
    return (<Box component='div'> 
        <Background/>
            <Container maxWidth="xl" sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Box sx={{ bgcolor: 'rgba(129, 128, 128, 0.7)', width: '70vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, borderRadius: 5 }}>

                    <Box  sx={{ borderRadius: 2, mt: 5}}>
                        {isMobile ? "" : <hr align="right" size="3" color='black' style={{ borderRadius: 15}} />}
                        <Typography color={'white'} variant={isMobile ? "h6" : "h3"} sx={textShadowG}>
                            МЫ - КОМАНДА!
                        </Typography>
                        
                        
                        {isMobile ? "" : <hr align="right" size="3" color='black' style={{ borderRadius: 15}} />}
                    </Box>
                    <Typography color={'white'} variant={isMobile ? "h8" : "h5"} sx={textShadowT}>
                        Присоединяйтесь к нам! Ждём вас на тренировки.
                    </Typography>
                    <Typography color={'white'} variant={isMobile ? "h7" : "h4"} sx={textShadowG}>
                        Ваше тело - наше дело!
                    </Typography>
                    <CustomImageList/>
                    <br />
                    <Typography color={'white'} variant={isMobile ? "h9" : "h6"} sx={textShadowT}>
                        · МИР fitness - это клуб с отличной репутацией.
                        <br />
                        · МИР fitness - это команда профессионалов.
                        <br />
                        · МИР fitness - это яркая и насыщенная жизнь.
                        <br />
                        · МИР fitness - это большой выбор групповых программ.
                    </Typography>
                </Box>
            </Container>
    </Box>)
}