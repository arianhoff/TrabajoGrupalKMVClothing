import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper';
import B1 from '../assets/Carrusel/B1.png';
import B2 from '../assets/Carrusel/B2.png';
import B3 from '../assets/Carrusel/B3.png';
import B4 from '../assets/Carrusel/B4.png';
import B5 from '../assets/Carrusel/B5.png';
import B6 from '../assets/Carrusel/B6.png';
import B7 from '../assets/Carrusel/B7.png';
import B8 from '../assets/Carrusel/B8.png';
import B9 from '../assets/Carrusel/B9.png';
import B10 from '../assets/Carrusel/B10.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 550,
    },

    "@media (min-width: 10px) (max-widht: 1280px)": {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5)
    },

    gridRoot: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',


    },
    paper: {

        backgroundColor: 'transparent',
        height: '100%',
        boxShadow: 'none',
    },
    paper2: {
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.4)',
            'box-shadow': '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',

        },
        '&:hover .MuiAvatar-root': {
            backgroundColor: 'rgb(255, 87, 34, 1)',
            color: 'rgb(255, 255, 255, 1)',
        }
    },
    buttonNavigation: {
        width: '100%',
        height: '100%',
    },
    buttonIcon: {
        background: 'red',
    },
    orange: {

        color: 'rgb(255, 255, 255, 0.2)',
        backgroundColor: 'rgb(255, 87, 34, 0.2)',
    },


}));


const images = [
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7,
    B8,
    B9,
    B10
];

function Carousel() {
    const classes = useStyles();
   
    const [carouselImage, setCarouselImage] = useState({
        id: 0,
        image: images[0]
    })



    const beforeClick = async (e, operation = 0) => {
        console.log(e);
        let idp = carouselImage.id
        console.log("images.length " + images.length + " operation " + operation + " idp " + idp);


        if (operation !== 0) {
            carouselImage.id === 0 ? idp = images.length - 1 : idp = carouselImage.id - 1
        } else {
            carouselImage.id + 1 === images.length ? idp = 0 : idp = carouselImage.id + 1
        }
        const img = new Image()
        img.src = images[idp]
        console.log(idp);

        setCarouselImage({
            id: idp,
            image: images[idp]
        })
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.gridRoot}
                style={{ backgroundImage: `url(${carouselImage.image})`, transitionDelay: '1s', }}
            >
                <Grid
                    item xs={1}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={`${classes.paper} ${classes.paper2}`}
                >
                    <Paper className={classes.paper}>
                        <IconButton
                            aria-label="previous"
                            component="span"
                            className={classes.buttonNavigation}
                            onClick={(e) => beforeClick(e, 1)}
                        >
                            <Avatar className={classes.orange}>   <NavigateBeforeIcon /></Avatar>
                        </IconButton></Paper>

                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}> </Paper>
                </Grid>
                <Grid item xs={1}
                    container
                    justify="center"
                    alignItems="center"
                    className={`${classes.paper} ${classes.paper2}`}
                >
                    <Paper className={classes.paper}>
                        <IconButton
                            aria-label="next"
                            component="span"
                            onClick={(e) => beforeClick(e, 0)}
                            className={classes.buttonNavigation}>
                            <Avatar className={classes.orange}>   <NavigateNextIcon /></Avatar>
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Carousel

