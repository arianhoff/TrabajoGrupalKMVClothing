
import { Typography, Button, Grid, Paper, styled } from '@mui/material'
import { Box } from '@mui/system';
import '../style/article.css'

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'center',
}));

const MyButton = styled(Button)({
	borderRadius: 3,
	borderColor: 'white',
	color: 'white',
	height: 30,
	padding: '0 10px',
	marginTop: 20,
});

function article() {

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<Item>
							<Box className='manOne'>
								<Typography variant='h4' className='titleManOne' >NUEVA COLECCION</Typography>
								<div className="lineaOne"></div>
								<MyButton variant='outlined'>CATALOGO</MyButton>
							</Box>
						</Item>
					</Grid>
					<Grid item xs={12} md={6}>
						<Item>
							<Box className='manTwo'>
								<Typography variant='h4' className='titleManTwo'>COLECION 2012</Typography>
								<div class="lineaTwo"></div>
								<Typography className='txtManTwo'>
									“Un hombre se debe ver como si hubiera comprado su ropa con inteligencia,
									como si se la hubiera puesto con cuidado y después como si lo hubiera
									olvidado por completo.”    Hardy Amies
								</Typography>
								<MyButton variant='outlined'>VER COLECCION</MyButton>
							</Box>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default article;