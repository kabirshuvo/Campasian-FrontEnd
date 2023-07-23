import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { getAllColleges } from "../../api-helpers/Api-helper";
import CollegeCard from "./CollegeCard";
import { Link } from "react-router-dom";


const Colleges = () => {

  const [colleges, setColleges] = useState([])

  useEffect(() => {
    getAllColleges()
      .then((data) => setColleges(data.colleges))
      .catch((err) => console.log(err));
  }, []);
  console.log(colleges)

  return (
    <Box margin={'auto'} marginTop={4}>
      <Typography variant="h4" 
     sx={{
      backgroundColor: "#222324",
      margin: 'auto',
      color: "white",
      padding: 2,
      width: "50%",
      textAlign: "center",
      borderRadius: "10px", // Add rounded corners
      lineHeight: 1.5, // Vertically center the text
    }}
      >
        Al Colleges
      </Typography>
      <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
        {/* <img src="" alt="" /> */}
      </Box>
      <Box
      margin={'auto'} display="flex" width="100%" justifyContent={"center"} flexWrap="wrap" alignItems={'center'}
      >
{colleges && colleges.map((college, index)=> <CollegeCard id={college.id} title={college.title} description={college.description} posterUrl={college.posterUrl} stublishDate={college.stublishDate} key={index}/>)}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/colleges"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          Show More
        </Button>
       
      </Box>
    
    


    </Box>
  )
}

export default Colleges