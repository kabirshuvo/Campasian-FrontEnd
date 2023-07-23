import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material"

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useEffect, useState } from "react";
import { getAllColleges } from "../../api-helpers/Api-helper";
import { Link } from "react-router-dom";


const Navbar = () => {

const dummyArray = ["kings college", "MotherLand", "FatherLand"]
const [value, setValue] = useState(0);
const [data, setData] = useState([]);

useEffect(() => {
    getAllColleges()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
//   console.log(data);

  return (
    <AppBar position="sticky"  sx={{ bgcolor: "#2b2d42" }}>
  <Toolbar>
    <Box display="flex" gap={"1%"} width={"20%"}>
      <AccessAlarmIcon />
      <Typography variant="h6">Campasian</Typography>
    </Box>
    <Box flexGrow={1} margin="auto">
      <Autocomplete
        sx={{ borderRadius: 10, width: "50%"}} // Adjust the maxWidth as per your needs
        id="free-solo-demo"
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) => (
          <TextField
            sx={{
              borderRadius: 2,
              input: { color: "inherit" },
              bgcolor: "#2b2d42",
              padding: "6px",
            }}
            variant="standard"
            {...params}
            label="Search College"
          />
        )}
      />
    </Box>
    <Box display="flex">
      <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)} >
        <Tab LinkComponent={Link} to="/colleges" label="All Colleges"/>
        <Tab LinkComponent={Link} to="/auth" label="Auth"/>
        <Tab LinkComponent={Link} to="/admin" label="Admin"/>
      </Tabs>
    </Box>
  </Toolbar>
</AppBar>
)
}

export default Navbar