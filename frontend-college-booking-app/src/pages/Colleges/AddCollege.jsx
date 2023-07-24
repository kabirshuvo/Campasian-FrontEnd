import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {
    Box,
    Button,
    Checkbox,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
import { addCollege } from "../../api-helpers/Api-helper";
  const labelProps = {
    mt: 1,
    mb: 1,
  };
  const AddCollege = () => {
    const [inputs, setInputs] = useState({
      title: "",
      description: "",
      posterUrl: "",
      stublishDate: "",
      featured: false,
    });
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState("");
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, subjects);
      addCollege({ ...inputs, subjects })
        .then((res) => {
          console.log(res);
          toast.success("New college added successfully!"); // Show success notification
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add new college."); // Show error notification
        });
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            width={"50%"}
            padding={10}
            margin="auto"
            display={"flex"}
            flexDirection="column"
            boxShadow={"10px 10px 20px #ccc"}
          >
            <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
              Add New College
            </Typography>
            <FormLabel sx={labelProps}>Title</FormLabel>
            <TextField
              value={inputs.title}
              onChange={handleChange}
              name="title"
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={labelProps}>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              name="description"
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={labelProps}>Poster URL</FormLabel>
            <TextField
              value={inputs.posterUrl}
              onChange={handleChange}
              name="posterUrl"
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={labelProps}>Stublishment Date</FormLabel>
            <TextField
              type={"date"}
              value={inputs.stublishDate}
              onChange={handleChange}
              name="stublishDate"
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={labelProps}>Subjects</FormLabel>
            <Box display={"flex"}>
              <TextField
                value={subject}
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                variant="standard"
                margin="normal"
              />
              <Button
                onClick={() => {
                    setSubjects([...subjects, subject]);
                    setSubject("");
                }}
              >
                Add
              </Button>
            </Box>
            <FormLabel sx={labelProps}>Featured</FormLabel>
            <Checkbox
              name="fetaured"
              checked={inputs.featured}
              onClick={(e) =>
                setInputs((prevSate) => ({
                  ...prevSate,
                  featured: e.target.checked,
                }))
              }
              sx={{ mr: "auto" }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "30%",
                margin: "auto",
                bgcolor: "#2b2d42",
                ":hover": {
                  bgcolor: "#121217",
                },
              }}
            >
              Add New
            </Button>
          </Box>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  };
  
  export default AddCollege;