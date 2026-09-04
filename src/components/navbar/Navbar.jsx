import styles from './navbar.module.css'
function Navbar(){
    return <nav className={styles.navbar}>

        <a href="#" start>Start Bootstrap </a>
         <a href="#">Portfolio</a>
          <a href="#">ABOUT</a>
           <a href="#">CONTACT</a>
          
    </nav>
}
export default Navbar;