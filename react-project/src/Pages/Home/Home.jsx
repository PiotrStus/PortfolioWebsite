//import reactLogo from './assets/react.svg'
import daldof from "..//../assets/daldof.mp3";
import { PlaySquareFilled } from "@ant-design/icons";
import classes from "./Home.module.css";
import { Carousel } from "antd";
import Img1 from "../../img/01.jpg";
import Img2 from "../../img/02.jpg";
import Img13 from "../../img/13.jpg";
import Img11 from "../../img/11.jpg";

function Home() {
	return (
		<>
			<h1>O mnie</h1>

			<div className={classes.mainContent} id="about">
				<div className={classes.karuzela}>
					<Carousel autoplay effect="fade">
						<div className={classes.carousel}>
							<img src={Img11} alt="Opis zdjecia" />
						</div>
						<div className={classes.carousel}>
							<img src={Img1} alt="Opis zdjecia" />
						</div>
						<div className={classes.carousel}>
							<img src={Img13} alt="Opis zdjecia" />
						</div>
					</Carousel>
				</div>
				<div className={classes.aboutText}>
					<p>
						Cześć, nazywam się Magdalena Tarnawska-Stus. Jestem dyplomowaną
						aktorką. Ukończyłam AST we Wrocławiu z wyróżnieniem na 39. Festwialu
						Szkół Teatralnych w Łodzi i obroną pracy magisterskiej w 2022 r.
					</p>
					<p>
						Uwielbiam to co nowe i nieznane, wykraczanie poza strefę komfortu i
						odkrywanie. Na co dzień biegam. Od ponad roku rozwijam swój wokal
						pod bacznym okiem trenera.{" "}
					</p>
					<p>
						W aktorskie szczególnie szanuję wolność i różnorodność, pochylanie
						się nad człowiekiem jako istotą bez kolorowania, bez oceniania i
						definiowania. To coś na co często nie mamy szansy w codziennym życiu
						– przyjrzeniu się wewnętrznemu życiu danej postaci w celu
						zrozumieniu jej zachowania i motywów działań.{" "}
					</p>
				</div>
				{/*
    <div className={classes.span1}>
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
    </div>
    <div className={classes.span2}>
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
    </div> 
    */}
			</div>
			<p></p>
			<div className={classes.youTube}>
				<iframe
					src="https://www.youtube.com/embed/xRyXC5T5NW0"
					title="Wizytówka 2024 - Magdalena Tarnawska-Stus"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
				<p></p>
			</div>

			<div className={classes.audioContainer}>
				<PlaySquareFilled className={classes.player} />
				<div className={classes.player2}>
					<div>
						<p>Dream A Little Dream Of Me</p>
					</div>
					<div className={classes.audio}>
						<audio controls>
							<source src={daldof} type="audio/mp3" />
							Twoja przeglądarka nie obsługuje elementu audio.
						</audio>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
