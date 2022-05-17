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
		desc: "Producimos todos nuestros nuestros productos con materia prima sintetica.",
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
		/* padding: "8% 11% 25% 11%", */
		padding: "60px 30px 30px 30px",
		justifyContent: 'space-around',
	},
	chooseImagen: {
		width: "50px",
		height: "50px",
		borderRadius: "5px",
		marginLeft: "100px",
	},
	chooseDes: {
		display: "block",
		textAlign: "center",
		color: "aliceblue",
		alignItems:"center",
	},

})

const ventajasKMV = () => {
	const classes = UseStyles();
	return (
		<Grid container className={classes.choseGlobal}>
			{Chose.map((element, i) => {
				return (
					<Grid item xs={12} sm={6} md={4} lg={2} key={element.key} className={classes.choseGrid} id='choose'>
						<div>
							<div className={classes.chooseImagen}>
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