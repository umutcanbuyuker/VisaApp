import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import SliderImage from "../../../assets/slider.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Slider.scss"

const Slider = () => {
    return (
        <div className='grid-container'>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} style={{ position: 'relative' }}>
                        <div className="image-container">
                            <img src={SliderImage} alt="Slider Resmi" style={{ width: '100%', maxHeight: "250px", objectFit: "cover", borderRadius: "30px", }} />
                            <div className="image-overlay"></div>
                            <div className="text-container">
                                <h2 className="overlay-title">En Erken Vize Tarihini Bul</h2>
                                <p className='overlay-text'>Arayın ve anında bildirim alın!</p>
                                <div className="search-bar" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px", width: "100%", }}>
                                    <TextField
                                        style={{
                                            backgroundColor: "white",
                                            borderRadius: "20px",
                                            boxShadow: "1px 1px 10px grey "


                                        }}
                                        variant="outlined"
                                        placeholder="Ülke"
                                        fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <Button style={{ backgroundColor: "#9BCF53", borderRadius: "10px" }} variant="contained" endIcon={<ArrowForwardIcon />}>
                                                    Ara
                                                </Button>
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Slider;
