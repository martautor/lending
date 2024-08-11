import { Box } from '@mui/material'
import background from '../img/zal.jpg'
const isMobile = window.matchMedia("(max-width: 768px)").matches

export default function Background() {
    return isMobile ? "" : <Box unselectable='on'
        component="img"
        sx={{
            position: 'absolute',
            height: '110%',
            width: '99vw',
            opacity: 1, 
            bgcolor: 'Background',
            zIndex: -1
        }}
        alt="Background"
        src={background}
        />
}