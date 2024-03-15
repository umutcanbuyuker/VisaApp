import React from "react";
import Typography from "@mui/material/Typography";
import { Container, TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <Container>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
            fontWeight: "600",
          }}
          variant="h4"
        >
          Vize Randevu Takibi
        </Typography>

        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "800",
            color: "gray",
          }}
        >
          Vize randevu güncellemelerinden haberden olamak için giriş yapın
        </Typography>

        <TextField
          label="Kullanıcı Adı"
          type="text"
          required
          maxLength={50}
          style={{}}
        />
      </Container>
    </div>
  );
};

export default Login;
