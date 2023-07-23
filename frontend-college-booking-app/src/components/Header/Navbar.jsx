import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from "@mui/material"

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useState } from "react";


const Navbar = () => {

const dummyArray = ["kings college", "MotherLand", "FatherLand"]
const [value, setValue] = useState(0);



  return (
    <AppBar  sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
            <Box display="flex" width={"20%"}>
<AccessAlarmIcon /> 
<p >Campasian</p>
            </Box>
            <Box width={"20%"} margin= {"auto"}>
            <Autocomplete
            sx={{ borderRadius: 10, width: "40%", margin: "auto" }}
        id="free-solo-demo"
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) => <TextField sx={{
            borderRadius: 2,
            input: { color: "white" },
            bgcolor: "#2b2d42",
            padding: "6px",
          }} variant="standard" {...params} label="Search College" />}
      />
            </Box>
            <Box display={"flex"}>
                <Tabs textColor="white" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)} >
                    <Tab label="All Colleges"/>
                    <Tab label="Auth"/>
                    <Tab label="Admin"/>
                </Tabs>

            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar