import classes from './Footer.module.css'
import instagramLogo from '..//../assets/instagram.svg'
import youtubeLogo from '..//../assets/youtube.svg'
import emailLogo from '..//../assets/email.svg'


function Footer() {
    return (
        <section className={classes.footer} >
                <div className={classes.about}>
                    <div className={classes.waviy}>
                        <h3>
                            O
                            <span style={{'--i':2}}>&nbsp;</span>
                            <span style={{'--i':3}}>m</span>
                            <span style={{'--i':4}}>n</span>
                            <span style={{'--i':5}}>i</span>
                            <span style={{'--i':6}}>e</span>
                        </h3>
                    </div>
                    <p>Urodzona w 1995 roku w Sanoku, dyplomowana aktorka teatralna, filmowa, telewizyjna oraz głosowa, w 2022 roku ukończyła AST we Wrocławiu.</p>
                </div>
                <div className={classes.social}>
                    <h3>Social Media</h3>
                    <div className={classes.socialMedia}>
                        <a href="https://www.instagram.com/magdalena_tarnawska/" target="_blank" rel="noopener noreferrer" ><img src={instagramLogo} className={classes.logo} alt="Instagram logo" /></a>
                        <a href="https://www.youtube.com/@magdalenatarnawska-stus/" target="_blank" rel="noopener noreferrer" ><img src={youtubeLogo} className={classes.logoYT} alt="Youtube logo" /></a>
                    </div>
                </div>
            <div className={classes.email}>
                    <img src={emailLogo} className={classes.logoEmail} alt="Instagram logo" />
                    <p>m.tarnawska95@wp.pl</p>
                </div>
        </section>
    )
}


export default Footer;