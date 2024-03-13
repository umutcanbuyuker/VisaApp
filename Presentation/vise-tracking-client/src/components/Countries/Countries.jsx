import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Countries = () => {
    return (
        <Container maxWidth="lg" style={{ marginTop: "50px" }}>
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom align="left" style={{ fontSize: "15px", fontWeight: "bold", marginTop: "10px", marginBottom: "1px" }}>Ülkeler</Typography>
            </Grid>
            <Grid container spacing={1} marginTop="10px" >
                <Grid item xs={12} sm={3} ms={6}  >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="282"
                                image="../../assets/almanya.png"
                                alt="Almanya"
                                style={{ borderRadius: "10px" }}
                            />
                            <Typography sx={{ position: "absolute", bottom: "8px", left: "8px", fontSize: "9px", color: "primary", fontWeight: "200", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "20px", padding: "5px" }}>Almanya</Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} ms={6} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/fransa.png"
                                alt="Fransa"
                                style={{ borderRadius: "10px" }}
                            />
                            <Typography sx={{ position: "absolute", bottom: "8px", left: "8px", fontSize: "9px", color: "primary", fontWeight: "200", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "20px", padding: "5px" }}>Fransa</Typography>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginTop: "2px" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/kanada.png"
                                alt="Kanada"
                                style={{ borderRadius: "10px" }}
                            />
                            <Typography sx={{ position: "absolute", bottom: "8px", left: "8px", fontSize: "9px", color: "primary", fontWeight: "200", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "20px", padding: "5px" }}>Kanada</Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} ms={6}  >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="282"
                                image="../../assets/amerika.png"
                                alt="Amerika"
                                style={{ borderRadius: "10px" }}
                            />
                            <Typography sx={{ position: "absolute", bottom: "8px", left: "8px", fontSize: "9px", color: "primary", fontWeight: "200", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "20px", padding: "5px" }}>Amerika</Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} ms={6}  >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/italya.png"
                                alt="İtalya"
                                style={{ borderRadius: "10px" }}
                            />
                            <Typography sx={{ position: "absolute", bottom: "8px", left: "8px", fontSize: "9px", color: "primary", fontWeight: "200", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "20px", padding: "5px" }}>İtalya</Typography>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginTop: "2px" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/avustralya.png"
                                alt="Avustralya"
                                style={{ borderRadius: "10px" }}
                            />
                            <Typography sx={{ position: "absolute", bottom: "8px", left: "8px", fontSize: "9px", color: "primary", fontWeight: "200", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "20px", padding: "5px" }}>Avusturalya</Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Countries;
