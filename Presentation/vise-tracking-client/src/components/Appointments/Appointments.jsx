import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Box } from '@mui/material';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Data from "../../Data.json"
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from "@mui/icons-material/Campaign";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

const Appointments = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Grid container spacing={3} style={{ marginTop: "20px" }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom align="left" style={{ fontSize: "15px", fontWeight: "bold", marginTop: "10px", marginBottom: "1px" }}>Son Güncellenen Randevular</Typography>
                    </Grid>
                    {Data.map((result, index) => (
                        <Grid item xs={12} sm={3} ms={6} lg={2} key={index}>
                            <Card sx={{ maxWidth: 300, borderRadius: '10px', marginBottom: "10px" }}>
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="130"
                                        image={result.img}
                                        alt={result.title}
                                        style={{ padding: "5px", borderRadius: "10px" }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" style={{ fontSize: "15px" }}>
                                            {result.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ fontSize: "12px" }} >
                                            {result.des}
                                        </Typography>
                                        <Typography variant="body2" className='date' sx={{ display: 'flex', alignItems: 'center', fontSize: "10px", fontWeight: "700", justifyContent: 'space-between', marginTop: "15px" }}>
                                            {result.date}
                                            <ChevronRightIcon sx={{ fontSize: 12 }} />
                                        </Typography>
                                    </CardContent>
                                    <NotificationsIcon sx={{ position: 'absolute', top: '8px', right: '8px', color: 'white', backgroundColor: 'gray', borderRadius: '50%', padding: '4px' }} />
                                    <Typography sx={{ position: "absolute", top: "8px", left: "8px", fontSize: "9px", color: "white", fontWeight: "200", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "red", borderRadius: "30px", padding: "2px", width: "30px" }}>Yeni</Typography>
                                </CardActionArea>
                            </Card>
                        </Grid >
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="lg" sx={{ boxShadow: 1, marginBottom: "30px" }}
                style={{ marginTop: "20px", display: "flex", alignItems: "flex-start", padding: "10px", border: "1px solid grey", borderRadius: "20px", }}>

                <CampaignIcon fontSize='large' style={{ marginRight: "20px", marginTop: "4px" }} />
                <div>
                    <Typography variant='h6' style={{ fontSize: "12px", fontWeight: "600" }}>
                        En hızlı randevular için haberdar olun! Güncellemeler için kaydolun!
                    </Typography>
                    <Typography variant='h6' style={{ fontSize: "12px", fontWeight: "200", marginTop: "10px" }}>
                        En son randevu tarihleri ve konsolosluk haberleriyle güncel kalın. Bildirimler için hemen kaydolun!
                    </Typography>
                </div>
                <div style={{ marginLeft: "auto" }}>
                    <Link to="#">
                        <Typography variant='h6' style={{ display: "flex", alignItems: "center", fontSize: "10px", fontWeight: "400", marginTop: "7px", border: "1px solid grey", padding: "10px", borderRadius: "30px" }}>
                            Mail veya sms kaydı
                        </Typography>
                    </Link>
                </div>

            </Container>
        </ThemeProvider>
    );
};

export default Appointments;
