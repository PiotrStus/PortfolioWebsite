import instagramLogo from '..//../assets/instagram.svg'
import classes from "./Contact.module.css"

function Contact() {
return (
    <>
        <h1>Contact</h1>
        <div>
            <a href="https://www.instagram.com/magdalena_tarnawska/"><img src={instagramLogo} className={classes.logo} alt="Instagram logo" /></a>
        </div>
    </>
)}

export default Contact;