import "./footer.css"
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
function Footer(){
    return (
<Box className="footer" >
<Container maxWidth="lg" >
   <Grid container   spacing={4} className="footer-content">
    <Grid item xs={12} md={4}>
            <Box className="footer-column">
              <Typography className="footer-title">
                LOCATION
              </Typography>

              <Typography className="footer-text">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </Typography>
            </Box>
          </Grid>
    <Grid item xs={12} md={4} >
      
        <Box  className="footer-column">

<Typography className="footer-title">
                AROUND THE WEB
              </Typography>
              <Box className="social-icons" >
<IconButton className="social-icon" >
    <FacebookIcon/>
</IconButton>

                <IconButton className="social-icon">
                  <TwitterIcon />
                </IconButton>

                <IconButton className="social-icon">
                  <LinkedInIcon />
                </IconButton>

                <IconButton className="social-icon">
                  <LanguageIcon />
                </IconButton>


              </Box>
        </Box>
        </Grid> 
        <Grid item xs={12} md={4}>
            <Box className="footer-column">
              <Typography className="footer-title">
                ABOUT FREELANCER
              </Typography>

              <Typography className="footer-text">
                Freelance is a free to use, MIT licensed
                <br />
                Bootstrap theme created by{" "}
                <Link className="footer-link">
                  Start Bootstrap
                </Link>
                .
              </Typography>
            </Box>
          </Grid>
   </Grid>
</Container>
<Box className="copyright">
        <Typography>
          Copyright © Your Website 2023
        </Typography>
      </Box>

</Box>
    );
};
export default Footer;