//Import
import React from "react";
import { Card, Grid, Container, Chip, Typography, Divider } from "@material-ui/core";



//Declarar clases
//state(variables)
//return

//Exportacion de manera automatica
export default function UserCard() {
    return (
        <Card>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="stretch"
            >
                <Grid item sm={4}>
                    <img src="https://m.media-amazon.com/images/M/MV5BNjUxNDcwMTg4Ml5BMl5BanBnXkFtZTcwMjU4NDYyOA@@._V1_.jpg" alt="" style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid Item sm={8}>
                    <Container maxWidth="lg" className="mt-1">
                        <Chip label="Hello and welcom"/>
                        <Typography variant="h2">
                            I'M GUSTAVO URBINA
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Software Engineer
                        </Typography>
                        <Divider variant="middle" />

                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom style={{marginTop:10}}>
                                   About me
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle2" gutterBottom>
                                    Age<br />Address<br /> Email<br />Phone<br />
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" gutterBottom>
                                    23<br />Morelia<br />gaurbina@sciodev.com<br />55-455-013-52
                        </Typography>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" />
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom style={{marginTop:10}}>
                                    Hobbies
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>

                                <Typography variant="subtitle2" gutterBottom>
                                    Videogames<br />Chess<br />Cooking<br />Jigsaw Puzzle<br />Listening to music<br />
                                </Typography>
                            </Grid>

                        </Grid>

                    </Container>
                </Grid>
            </Grid>
        </Card>
    );
}