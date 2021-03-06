import React from 'react'
import { makeStyles } from "@material-ui/core";
import { Grid } from '@mui/material';
import "../style/estiloGeneral.css";
import c1 from "../assets/eco.png";
import c2 from "../assets/Nacional.png";
import c3 from "../assets/plantas propias.png";
import c4 from "../assets/exportamos.png";
import c5 from "../assets/Consiencia social.png";

const Chose = [
	{
		img: c1,
		info: "Somos EcoFriendly",
		desc: "Todos nuestros nuestros productos son hechos con materia prima sintética.",
		key: c1,
	},
	{
		img: c2,
		info: "Somos Nacionales",
		desc: "Utilizamos materia prima y mano de obra nacional.",
		key: c2,
	},
	{
		img: c3,
		info: "Plantas propias",
		desc: "Producimos nuestra materia prima y usamos nuestros propios depositos.",
		key: c3,
	},
	{
		img: c4,
		info: "Exportamos al mundo",
		desc: "KMV existe en 8 paises de America, 4 de europa y 6 de Asia.",
		key: c4,
	},
	{
		img: c5,
		info: "Conciencia Social",
		desc: "Ayudamos a Merenderos de las Provincias mas necesitadas.",
		key: c5,
	},
];

const UseStyles = makeStyles({
	choseGlobal: {
		display: "flex",
		backgroundColor: "#0F0F0D",
		padding: "130px 95px 110px 85px",
		/* padding: "8% 11% 25% 11%", */
		width: '100px',
		/* height:"40px", */
		justifyContent: 'space-around',
		fontFamily: "Roboto, sans-serif",
	},
	chooseImagen: {
		width: "50px",
		height: "50px",
		borderRadius: "5px",
		marginLeft: "90px",
	},
	chooseDes: {
		display: "block",
		textAlign: "center",
		color: "aliceblue",
	},

})

const ventajasKMV = () => {
	const classes = UseStyles();
	return (
		<Grid container item xs={12} className={classes.choseGlobal} id="Global">
			{Chose.map((element, i) => {
				return (
					<Grid item xs={12} sm={6} md={4} lg={2} key={element.key} className={classes.choseGrid} id='choose'>
						<div>
							<div className={classes.chooseImagen} id="imagen">
								<img src={element.img} alt="Imagen de producto" />
							</div>
						</div>
						<div className={classes.chooseDes}>
							<h1>{element.info}</h1>
							<p>{element.desc}</p>
						</div>
					</Grid>
				);
			})}
		</Grid>
	)
}

export default ventajasKMV