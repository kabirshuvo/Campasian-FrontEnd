import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllColleges } from "../../api-helpers/Api-helper";
import CollegeCard from "./CollegeCard";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    getAllColleges()
      .then((data) => setColleges(data.colleges))
      .catch((err) => console.log(err));
  }, []);
  console.log(colleges);

  return (
    <Box margin={"auto"} marginTop={4} maxWidth="1200px" padding={2}>
      <Typography
        variant="h4"
        sx={{
          backgroundColor: "#222324",
          margin: "auto",
          color: "white",
          padding: 2,
          width: "50%",
          textAlign: "center",
          borderRadius: "10px", // Add rounded corners
          lineHeight: 1.5, // Vertically center the text
        }}
      >
        All Colleges
      </Typography>
      <Box
        sx={{
          display: "grid", // Use grid layout
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Automatically fit the cards within the available space
          gap: 2, // Adjust the gap between cards as needed
          marginTop: 2, // Add space between the header and cards
        }}
      >
        {colleges &&
          colleges.map((college, index) => (
            <CollegeCard
              id={college._id}
              title={college.title}
              description={college.description}
              posterUrl={college.posterUrl}
              stublishDate={college.stublishDate}
              key={index}
            />
          ))}
      </Box>
      <Box display="flex" justifyContent="center" padding={2}>
        <Button
          LinkComponent={Link}
          to="/colleges"
          variant="outlined"
          sx={{ color: "#2b2d42" }}
        >
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default Colleges;
