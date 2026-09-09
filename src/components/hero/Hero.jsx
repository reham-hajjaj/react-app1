import './hero.css'
import image from './../../assets/image/avataaars.svg'
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';

function Hero(){
    return<section className='hero'>
        <img src={image} alt="image" />
        <h1>Start Bootstrap</h1>
         <div className="hero-line">
           
        <IconButton>
<StarIcon/>
        </IconButton>
      </div>
       <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
}
export default Hero;
