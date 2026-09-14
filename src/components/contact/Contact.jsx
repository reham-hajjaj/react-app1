import "./contact.css"
import StarIcon from '@mui/icons-material/Star';

function Contact(){
    return (
 <section className="contact-title ">
       <h1>Contact me</h1>
       <div className="contact-divider">
         <span></span>
       
         <StarIcon/>
         <span></span>
           </div>
         <form className="contact-form">

          <input
            type="text"
            placeholder="Full name"
          />

          <input
            type="email"
            placeholder="Email address"
          />

          <input
            type="tel"
            placeholder="Phone number"
          />

          <textarea
            placeholder="Message"
          ></textarea>

          <button type="submit">
            Send
          </button>

        </form>


     
    </section>
    )  
}
export default Contact;
