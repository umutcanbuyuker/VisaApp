import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Container>
            <Grid container spacing={1} style={{ marginTop: "50px", marginBottom: "250px" }}>
                <Grid item xs={12} sm={3} >
                    <Card >
                        <Typography sx={{ position: "absolute", left: "8px", fontSize: "19px", color: "primary", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}> Bize Ulaşın</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Contact
