
import { Box, Typography } from '@mui/material';

const AboutInfo = () => {
    return (
        <Box m={3} marginTop={10} style={{display:'flex'}}>
            <img src='abou1.jpeg' style={{ width: '30rem', height:'30rem',left:'0'}} />
            <div style={{marginTop:'100px'}}>
            <h1 style={{margin:'10px'}}>Neelesh Meena</h1>
            <h2 style={{margin:'10px'}}>Developer @Mailmodo</h2>
            <h3 style={{margin:'10px'}}>IIT ISM Dhanbad</h3>
            <h4 style={{margin:'10px'}}>Kota, Rajasthan</h4>
            <h4 style={{margin:'10px'}}>About:</h4>
            <h5 style={{margin:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
            </div>
        </Box>
    )
}

export default AboutInfo;
