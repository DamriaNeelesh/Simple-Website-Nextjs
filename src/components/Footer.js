

import { Box, Typography, styled } from "@mui/material";

const FooterSection = styled(Box)`
    background: #ccc;
    padding: 5px;
    margin-top: auto;
`

const Footer = () => {
    return (
        <FooterSection>
            <Typography>Sample Website by Neelesh 2023</Typography>
        </FooterSection>
    )
}

export default Footer;