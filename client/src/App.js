import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, AppBar, Typography, Grow, Grid, createTheme } from '@material-ui/core';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import useStyles from "./styles"
import { ThemeProvider } from "@material-ui/styles";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js';
import './index.css';






const memories = "https://i.ytimg.com/vi/g97La0u55_g/maxresdefault.jpg"
const theme = createTheme({
    palette: {
        type: "dark"
    }
});

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position='static' color='inherit'>
                    <Typography className={classes.heading} variant='h2' align="center">Takeoff</Typography>
                    <img className={classes.image} width="60" src={memories} alt="memoriesfailed" height="60">
                    </img>
                    <button>connect</button>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container className='mainContainer' justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Container>
                </Grow>

           </Container>
        </ThemeProvider>
    )
}

export default App

/*
 <Grid container className='mainContainer' justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} ></Form>
                            </Grid>
                        </Grid>
*/ 