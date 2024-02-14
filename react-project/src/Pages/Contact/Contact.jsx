import classes from "./Contact.module.css"
import instagramLogo from '..//../assets/instagram.svg'
import youtubeLogo from '..//../assets/youtube.svg'

function Contact() {
return (
    <>
    {/*}
    <div className={classes.waviy}>
            <span style={{'--i':1}}>K</span>
            <span style={{'--i':2}}>o</span>
            <span style={{'--i':3}}>n</span>
            <span style={{'--i':4}}>t</span>
            <span style={{'--i':5}}>a</span>
            <span style={{'--i':6}}>k</span>
            <span style={{'--i':7}}>t</span>
    </div>
    */}
    <h1>Kontakt</h1>
    <div className={classes.container}>

        <a href="https://www.instagram.com/magdalena_tarnawska/"><img src={instagramLogo} className={classes.logo} alt="Instagram logo" /></a>
        <a href="https://www.youtube.com/@magdalenatarnawska-stus/"><img src={youtubeLogo} className={classes.logoYT} alt="Youtube logo" /></a>
    </div>
    </>
)}

export default Contact;