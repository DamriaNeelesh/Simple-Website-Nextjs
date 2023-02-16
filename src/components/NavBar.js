
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';

import Link from 'next/link';

const Header = styled(AppBar)`
    background: #000;
`
const Nav = styled(Box)`
    display: flex;
    margin-left: auto;
    margin-right: 5%;
    & > p {
        margin-right: 100px;
        cursor: pointer
    }
`

const NavBar = () => {
    const logo ='neelesh.png';
    return (
        <Header position='static'>
            <AppBar>
            <Toolbar>
                <img src={logo} style={{ height: 40, width:100}}/>
                <Nav style={{display:'flex'}}>
                    <Link href='/'><Typography style={{padding:'10px'}}>Home</Typography></Link>
                    <Link href='/about'><Typography style={{padding:'10px'}}>About</Typography></Link>
                    <Link href='/contact'><Typography style={{padding:'10px'}}>Contact</Typography></Link>
                </Nav>
            </Toolbar>
            </AppBar>
        </Header>
    )
}

export default NavBar;