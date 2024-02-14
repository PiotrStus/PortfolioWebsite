import classes from "./Navbar.module.css"
import {Link , useMatch, useResolvedPath} from "react-router-dom"


function Navbar() {
    return (<nav className={classes.nav}>
        <ul>
            <CustomLink to="/" className={classes.listElement}>O mnie</CustomLink>
            <CustomLink to="/portfolio" className={classes.listElement}>Portfolio</CustomLink>
            <CustomLink to="/kontakt" className={classes.listElement}>Kontakt</CustomLink>
            <Link to="https://filmpolski.pl/fp/index.php?osoba=11198905" target="_blank" rel="noopener noreferrer"  className={classes.listElement}>FilmPolski.pl</Link>
        </ul>

        {/*<Link to="/" className={classes.siteTitle}>Magdalena Tarnawska-Stus */}
        <Link to="/" className={classes.siteTitle}>
            Magdalena Tarnawska-Stus
        </Link>

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