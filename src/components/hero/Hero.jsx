import './hero.css'
import image from './../../assets/image/avataaars.svg'

function Hero(){
    return<section className='hero'>
        <img src={image} alt="image" />
        <h1>Start Bootstrap</h1>
        
       <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
}
export default Hero;
