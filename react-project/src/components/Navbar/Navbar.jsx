import classes from "./Navbar.module.css"
import {Link , useMatch, useResolvedPath} from "react-router-dom"
import { Link as Link2 } from 'react-scroll'

function Navbar() {
    return (<nav className={classes.nav}>
            <Link2 
                activeClass="active" 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-185} 
                duration={1300} 
                onClick={() => console.log('test')}
                className={classes.listElement}
            >
                 Magdalena Tarnawska-Stus
            </Link2>
        <ul>
            <Link2 
                activeClass="active" 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-120} 
                duration={1300} 
                onClick={() => console.log('test')}
                className={classes.listElement}
            >
                O mnie
            </Link2>
            <Link2 
                activeClass="active" 
                to="portfolio" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={1300} 
                onClick={() => console.log('test')}
                className={classes.listElement}
            >
            Portfolio
            </Link2>
            <Link2 
                activeClass="active" 
                to="footer" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={1300} 
                onClick={() => console.log('test')}
                className={classes.listElement}
            >
            Kontakt
            </Link2>
            <Link to="https://filmpolski.pl/fp/index.php?osoba=11198905" target="_blank" rel="noopener noreferrer"  className={classes.listElement}>FilmPolski.pl</Link>



        </ul>

        {/*<Link to="/" className={classes.siteTitle}>Magdalena Tarnawska-Stus */}


    </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? classes.navItemActive : ""}>
            
            <Link to={to} {...props}>{children}
            </Link>
        </li>
    )
}

export default Navbar;