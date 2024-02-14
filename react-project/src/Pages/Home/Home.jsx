//import reactLogo from './assets/react.svg'
import daldof from '..//../assets/daldof.mp3'
import {PlaySquareFilled} from '@ant-design/icons';
import classes from "./Home.module.css"
import { Carousel } from 'antd';
import Img1 from '../../img/01.jpg'
import Img2 from '../../img/02.jpg'
import Img3 from '../../img/03.jpg'

function Home() {
return (
    <>
    <h1>Strona główna</h1>

    <div className={classes.mainContent}>
    <p>
        <span>There</span>
        <span>are</span>
        <span>no</span>
        <span>limits</span>
        <span>to</span>
        <span>what</span>
        <span>you</span>
        <span>can</span>
        <span>accomplish,</span>
        <span>except</span>
        <span>the</span>
        <span>limits</span>
        <span>you</span>
        <span>place</span>
        <span>on</span>
        <span>your</span>
        <span>own</span>
        <span>thinking.</span>
    </p>
        <p>
        <span>Lorem</span>
        <span>ipsum</span>
        <span>dolor</span>
        <span>sit</span>
        <span>amet,</span>
        <span>consectetur</span>
        <span>adipiscing</span>
        <span>elit,</span>
        <span>sed</span>
        <span>do</span>
        <span>eiusmod</span>
        <span>tempor</span>
        <span>incididun</span>
        <span>t</span>
        <span>ut</span>
        <span>labore</span>
        <span>et</span>
        <span>dolore </span>
        <span>magna</span>
        <span>aliqua.</span>
        </p>
        <Carousel autoplay effect="fade">
            <div className={classes.carousel}>
                <img src={Img1} alt="Opis zdjecia" />
            </div>
            <div className={classes.carousel}>
                <img src={Img2} alt="Opis zdjecia" />
            </div>
            <div className={classes.carousel}>
                <img src={Img3} alt="Opis zdjecia" />
            </div>
        </Carousel>
    </div>
    <p></p>


    <div className={classes.audioContainer}>
        <PlaySquareFilled className={classes.player}/>
        <div className={classes.player2}>
        <p>Dream a little dream - cover</p>
        <audio controls className={classes.audio}>
            <source src={daldof} type="audio/mp3" />
                Twoja przeglądarka nie obsługuje elementu audio.
        </audio>
        </div>
    </div>
    </>
)}

export default Home;