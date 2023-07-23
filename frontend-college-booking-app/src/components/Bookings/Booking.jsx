import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollegeDetails, newBooking, } from "../../api-helpers/Api-helper";

const Booking = () => {
  const [college, setCollege] = useState();
  const [inputs, setInputs] = useState({ idNumber: "", date: "" });
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getCollegeDetails(id)
      .then((res) => setCollege(res.college))
      .catch((err) => console.log(err));
  }, [id]);
//   console.log(college)

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    newBooking({ ...inputs, college: college._id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {college && (
        <Fragment>
          <Typography
            padding={4}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Admission Of College: {college.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"column"}
              flexDirection="column"
              paddingTop={3}
              width="60%"
              marginRight={"auto"}
            >
              <img
                width="80%"
                height={"300px"}
                src={college.posterUrl}
                alt={college.title}
              />
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Best Subjects:
                  {college.subjects.map((actor) => " " + actor + " ")}
                </Typography>
                <Typography paddingTop={2}>{college.description}</Typography>

                <Typography fontWeight={"bold"} marginTop={1}>
                  Stublish Date: {new Date(college.stublishDate).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width={"40%"} paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box
                  padding={5}
                  margin={"auto"}
                  display="flex"
                  flexDirection={"column"}
                >
                  <FormLabel>Subject Id Number</FormLabel>
                  <TextField
                    name="idNumber"
                    value={inputs.idNumber}
                    onChange={handleChange}
                    type={"number"}
                    margin="normal"
                    variant="standard"
                  />
                  <FormLabel>Booking Date</FormLabel>
                  <TextField
                    name="date"
                    type={"date"}
                    margin="normal"
                    variant="standard"
                    value={inputs.date}
                    onChange={handleChange}
                  />
                  <Button type="submit" sx={{ mt: 3 }}>
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
   
  );
};

export default Booking;