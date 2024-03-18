import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Route, Link as RouterLink } from "react-router-dom";

const Register = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleRegister = () => {
    // E-posta doğrulaması
    if (!email.includes("@")) {
      setErrorMessage("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    // Telefon numarası doğrulaması
    if (!phone.match(/^\d{10}$/)) {
      setErrorMessage(
        "Lütfen geçerli bir telefon numarası girin (örn: 5551234567)."
      );
      return;
    }

    // Parola doğrulaması
    if (password1.length < 6 || password2.length < 6) {
      setErrorMessage("Şifreniz en az 6 karakter uzunluğunda olmalıdır.");
      return;
    }

    if (password1 !== password2) {
      setErrorMessage("Girdiğiniz şifreler eşleşmiyor.");
      return;
    }
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
            Vize randevu güncellemelerinden haberdar olmak için kayıt olun!
          </Typography>
          <TextField
            type="text"
            fullWidth
            variant="outlined"
            placeholder="E-Mail"
            sx={{ borderRadius: "20px", marginBottom: "10px" }}
            InputProps={{
              sx: { borderRadius: "20px" },
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="tel"
            fullWidth
            variant="outlined"
            placeholder="Telefon Numarası"
            sx={{ borderRadius: "20px", marginBottom: "10px" }}
            InputProps={{
              sx: { borderRadius: "20px" },
            }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Parola"
            type={showPassword1 ? "text" : "password"}
            sx={{
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            InputProps={{
              sx: { borderRadius: "20px", cursor: "pointer" },
              endAdornment: (
                <Button
                  onClick={togglePasswordVisibility1}
                  sx={{ minWidth: "auto", borderRadius: "20px" }}
                >
                  {showPassword1 ? (
                    <VisibilityIcon sx={{ color: "grey" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "grey" }} />
                  )}
                </Button>
              ),
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Parola Doğrulama"
            type={showPassword2 ? "text" : "password"}
            sx={{
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            InputProps={{
              sx: { borderRadius: "20px", cursor: "pointer" },
              endAdornment: (
                <Button
                  onClick={togglePasswordVisibility2}
                  sx={{ minWidth: "auto", borderRadius: "20px" }}
                >
                  {showPassword2 ? (
                    <VisibilityIcon sx={{ color: "grey" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "grey" }} />
                  )}
                </Button>
              ),
            }}
          />
          <Typography sx={{ color: "red", marginBottom: "10px" }}>
            {errorMessage}
          </Typography>
          <Button
            fullWidth
            onClick={handleRegister}
            sx={{
              marginTop: "20px",
              fontWeight: "600",
              borderRadius: "30px",
              color: "white",
              backgroundColor: "red",
              padding: 2,
              "&:hover": {
                backgroundColor: "red", // Hover rengini
                opacity: 1, // Butonun hover olduğunda tamamen görünmesini sağlar.
              },
            }}
          >
            Kayıt Ol
          </Button>

          <Typography sx={{ marginTop: "30px" }}>
            <RouterLink
              to="/login"
              color="inherit"
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
              Zaten bir hesabın var mı?
            </RouterLink>
          </Typography>
        </Box>
      </form>
    </div>
  );
};

export default Register;
