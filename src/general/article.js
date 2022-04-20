import { Typography, Button, Grid, Paper, styled } from '@mui/material'
import { Box } from '@mui/system';
import '../style/article.css';
import { makeStyles } from '@material-ui/core';

const UseStyles = makeStyles({
	botonArticle: {
	  backgroundColor: '#1565C0',
	  height: 40,
	  width: 300,
	  color: 'white',
	  borderRadius:5,
	  marginTop: 15	  
	}
  })

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'center',
}));


function article() {
	
	const classes = UseStyles()

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<Item>
							<Box className='manOne'></Box>
						</Item>
					</Grid>
					<Grid item xs={12} md={6}>
						<Item>
							<Box className='manOneBlackBox1'>
								<Typography variant='h4' className='titleManOne' >NUEVA COLECCION</Typography>
								<div className="lineaOne"></div>
								<Button className={classes.botonArticle} variant='outlined'>CATÁLOGO</Button>
							</Box>
						</Item>
					</Grid>
					<Grid item xs={12} md={6}>
						<Item>
							<Box className='manOneBlackBox2'>
								<Typography variant='h5' className='titleManTwo'>COLECION 2012</Typography>
								<div className="lineaTwo"></div>
								<Typography className='txtManTwo'>
									“Un hombre se debe ver como si hubiera comprado su ropa con inteligencia,
									como si se la hubiera puesto con cuidado y después como si lo hubiera
									olvidado por completo.”    Hardy Amies
								</Typography>
								<Button className={classes.botonArticle} variant='outlined'>VER COLECCIÓN</Button>
							</Box>
						</Item>
					</Grid>
					<Grid item xs={12} md={6}>
						<Item>
							<Box className='manTwo'></Box>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default article;