import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Alert,
  Box,
  Stack,
} from "@mui/material";
import Cats_Dogs from "../../images/Cats_Dogs.png";
import styles from "./FormDiscont.module.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setError("");
  };

  return (
    <div className={styles.container}>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(261.47deg, #2451C6 32.63%, #0D50FF 98.96%)",
          borderRadius: 4,
          mb: 10,
        }}
      >
        <Typography
          sx={{ paddingTop: 4 }}
          align="center"
          color="#FFFFFF"
          variant="h2"
        >
          5% off on the first order
        </Typography>
        <Box className={styles.box_img_Form}>
        <Stack className={styles.dogsForm}>
          <img src={Cats_Dogs} alt="Cats_Dogs" />
        </Stack>
        <Box className={styles.formBox}>
         <form className={styles.form} onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            pattern="[A-Za-zА-Яа-яЁё\s]+"
            title="Только буквы и пробелы"
            required
          ></input>

          <input
            placeholder="Phone number"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            pattern="^\+\d{1,3}\d{7,}$"
            title="Номер должен начинаться с + и содержать от 7 цифр"
            required
          ></input>

          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>

          <button type="submit" style={{ marginTop: 20 }}>
            Get discount
          </button>
        </form>
        <Box className={styles.boxMsg}>

        {success && (
          <Alert variant="h4" style={{ marginTop: 20, color: "white" }}>
            Поздравляем! Вы получили 5% скидку!
          </Alert>
        )}

        {error && (
          <Alert variant="h6" style={{ marginTop: 20 }}>
            Что то пошло не так: {error}
          </Alert>
        )}
        </Box>
        </Box>
        </Box>
      </Box>
    </div>
  );
}

export default RegisterForm;
