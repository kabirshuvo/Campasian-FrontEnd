import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from "@mui/material"

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const Navbar = () => {

const dummyArray = ["kings college", "MotherLand", "FatherLand"]



  return (
    <AppBar>
        <Toolbar>
            <Box display="flex" width={"20%"}>
<AccessAlarmIcon /> 
<p >Campasian</p>
            </Box>
            <Box width={"50%"} margin= {"auto"}>
            <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) => <TextField variant="standard" {...params} label="Search College" />}
      />
            </Box>
            <Box display={"flex"}>
                <Tabs textColor="white" indicatorColor="secondary" >
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