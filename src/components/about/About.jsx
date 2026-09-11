import React from 'react'
import "./about.css"
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
function About() {
  return (
    <section class="about">
        <div class="container">
<h2>About</h2>
<div class="icon">
    <span>
    </span>
<IconButton>
    <StarIcon/>
</IconButton>

</div>
<div class="about-content">
<div class="about-text">
<p>Freelancer is a free bootstrap theme 
    created by Start Bootstrap. 
    The download includes the complete source files including HTML,
     CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
<div class="about-text" >
<p>You can create your own custom avatar for the masthead,
     change the icon in the dividers,
      and add your email address to the contact form to make it fully functional!</p>
</div>
</div>

<a href="#" class="download-btn">
    <i class="fa-solid fa-download"> <DownloadIcon/></i>
    Free Download!
</a>
        </div>
      
    </section>
  )
}

export default About;
