import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reseting the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} width="70%">
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          fullWidth
          multiline
          rows={4}
          required
        />
       <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
                mt: 2,
                bgcolor: "#2b2d42",
                ":hover": {
                bgcolor: "#121217",
                },
            }}
            >
            Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
