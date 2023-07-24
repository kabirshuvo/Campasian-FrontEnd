import { AppBar, Autocomplete, Box, IconButton, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useEffect, useState } from "react";
import { getAllColleges } from "../../api-helpers/Api-helper";
import { Link, useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../../store";

const Navbar = () => {

// const dummyArray = ["kings college", "MotherLand", "FatherLand"]

const navigate = useNavigate();
const dispatch = useDispatch();
const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);


const [allColleges, setAllColleges] = useState([]);

const [value, setValue] = useState(0);

const [sellectedCollege, setSellectedCollege] = useState()

// useEffect(() => {
//     getAllColleges()
//       .then((data) => setAllColleges(data))
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(allColleges);

useEffect(() => {
  getAllColleges()
    .then((data) => {
      if (Array.isArray(data.colleges)) {
        setAllColleges(data.colleges); // Access the colleges array from the data object
      } else {
        console.log("Error: Data is not an array", data);
      }
    })
    .catch((err) => console.log("API Error:", err));
}, []);

const logout = (isAdmin) => {
  dispatch(isAdmin ? adminActions.logout() : userActions.logout());
};

// const handleChange = (e, val) => {
//   setSellectedCollege(val);
//   const college = colleges.find((coll) => coll.title === val)
//   console.log(college);
//   if (isUserLoggedIn){
//     navigate(`/booking/${college._id}`)
//   }
// }

const handleChange = (e, val) => {
  setSellectedCollege(val);
  if (isUserLoggedIn && allColleges.length > 0) {
    const college = allColleges.find((coll) => coll.title === val);
    if (college) {
      navigate(`/booking/${college._id}`);
    } else {
      console.log("College not found in the list.");
    }
  }
};

  return (
    <AppBar position="sticky"  sx={{ bgcolor: "#2b2d42" }}>
  <Toolbar>
    <Box display="flex" gap={"1%"} width={"20%"}>
      <IconButton LinkComponent={Link} to="/">
      <AccessAlarmIcon />
      <Typography variant="h6">Campasian</Typography>
      </IconButton>
    </Box>
    <Box flexGrow={1} margin="auto">
      <Autocomplete
      onChange={handleChange}
        sx={{ borderRadius: 10, width: "50%"}} 
        id="free-solo-demo"
        freeSolo
        options={Array.isArray(allColleges) ? allColleges.map((college) => college.title) : []}
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
        {!isAdminLoggedIn && !isUserLoggedIn && (
         <>
          <Tab LinkComponent={Link} to="/auth" label="Auth"/>
          <Tab LinkComponent={Link} to="/admin" label="Admin"/>
         </>

        )}
          {isUserLoggedIn && (
         <>
          <Tab LinkComponent={Link} to="/user" label="Profile"/>
          <Tab onClick={() => logout(false)} LinkComponent={Link} to="/" label="Logout"/>
         </>

        )}
        {isAdminLoggedIn && (
         <>
          <Tab LinkComponent={Link} to="/addCollege" label="Add College"/>
          <Tab LinkComponent={Link} to="/user-admin" label="Profile"/>
          <Tab onClick={() => logout(true)} LinkComponent={Link} to="/" label="Logout"/>
         </>

        )}
        
      </Tabs>
    </Box>
  </Toolbar>
</AppBar>
)
}

export default Navbar