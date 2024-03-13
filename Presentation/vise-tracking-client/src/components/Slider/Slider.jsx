import React from 'react';
import { Container, Grid } from '@mui/material';
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
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Slider;





