

import { Box } from "@mui/material";
import Link from "next/link";


const ContactInfo = () => {
    return (
        <Box style={{ textAlign: 'center'}}>
          <Link href='https://github.com/DamriaNeelesh'>
            <img 
                src='github.png' 
                
                alt="contact" 
                style={{ width: '15%', margin: 100 }} 
            />
           
          </Link>
          <Link href='https://www.linkedin.com/in/neelesh-meena-73b07b1a0/'>
            <img 
                src='linkedIn.png' 
                
                alt="contact" 
                style={{ width: '15%', margin: 100 }} 
            />
          </Link>
          <a  href='damrianeelesh@gmail.com'>
            <img 
                src='email.png'               
                alt="contact" 
                style={{ width: '15%', margin: 100 }} 
            />
          </a>
          <Link href='https://wa.me/7023488011'>
            <img
               src='whatsapp.png'
               
               alt="contact" 
               style={{ width: '15%', margin: 100 }} 
            />
           </Link>
        </Box>
        
    )
}

export default ContactInfo;