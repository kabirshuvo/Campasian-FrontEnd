import { Box, Button, Grid, Typography } from "@mui/material";
import CollegeCard from "./Colleges/CollegeCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllColleges } from "../api-helpers/Api-helper";
import AboutUs from "./Aboutus/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    getAllColleges()
      .then((data) => setColleges(data.colleges))
      .catch((err) => console.log(err));
  }, []);
  console.log(colleges);

  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="90%" height={"40vh"} padding={2}>
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="Hero image"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box paddingY={4}>
        <Typography variant="h3" textAlign={"center"}>
          Dream Colleges
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {colleges &&
          colleges.slice(0, 6).map((college, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CollegeCard
                id={college._id}
                title={college.title}
                description={college.description}
                posterUrl={college.posterUrl}
                stublishDate={college.stublishDate}
              />
            </Grid>
          ))}
      </Grid>

      <Box marginY={4} display="flex" justifyContent="center" padding={2}>
        <Button
          LinkComponent={Link}
          to="/colleges"
          variant="outlined"
          sx={{ color: "#2b2d42" }}
        >
          View All Colleges
        </Button>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={12}>
          <AboutUs />
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={12}>
          <ContactUs/>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
