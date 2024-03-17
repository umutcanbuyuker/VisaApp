import React, { useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="650px"
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          // boxShadow={"5px 5px 10px #ccc"}
          // sx={{
          //   ":hover": {
          //     boxShadow: "10px 10px 20px #ccc",
          //   },
          // }}  İsteğe bağlı boxshadow
        >
          <Typography
            variant="h4"
            padding={3}
            textAlign={"center"}
            fontWeight={"600"}
          >
            Vize Randevu Takibi
          </Typography>
          <Typography
            variant="h6"
            fontSize={"15px"}
            marginBottom={"70px"}
            textAlign={"center"}
            fontWeight={"600"}
            color="#3D3B40"
          >
            Vize randevu güncellemelerinden haberden olamak için giriş yapın
          </Typography>
          <TextField
            type="text"
            fullWidth
            variant="outlined"
            placeholder="Kullanıcı Adı"
            sx={{ borderRadius: "20px", marginBottom: "10px" }}
            InputProps={{
              sx: { borderRadius: "20px" },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Parola"
            type={showPassword ? "text" : "password"}
            sx={{
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            InputProps={{
              sx: { borderRadius: "20px", cursor: "pointer" },
              endAdornment: (
                <Button
                  onClick={togglePasswordVisibility}
                  sx={{ minWidth: "auto", borderRadius: "20px" }}
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ color: "grey" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "grey" }} />
                  )}
                </Button>
              ),
            }}
          />

          <Button
            fullWidth
            sx={{
              marginTop: "20px",
              fontWeight: "600",
              borderRadius: "30px",
              color: "white",
              backgroundColor: "red",
              padding: 2,
              "&:hover": {
                backgroundColor: "red", // Hover rengini değiştirebilirsiniz.
                opacity: 1, // Butonun hover olduğunda tamamen görünmesini sağlar.
              },
            }}
          >
            Giriş Yap
          </Button>
          <Typography sx={{ marginTop: "30px" }}>
            <Link
              color="inherit"
              href="#"
              sx={{
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "300",
                "&:hover": {
                  color: "grey", // Buradaki renk istediğiniz hover rengini temsil eder.
                  textDecoration: "none", // Hover olduğunda altını çizmek için
                },
              }}
            >
              Parolamı Unuttum?
            </Link>
          </Typography>
        </Box>
      </form>
    </div>
  );
};

export default Login;
