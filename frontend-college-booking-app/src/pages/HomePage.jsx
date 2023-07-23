import { Box, Typography } from "@mui/material"

const HomePage = () => {
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      
      <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
<img 
      src="https://images.unsplash.com/photo-1689332220916-3cb59b7b6314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      alt="Hero image"
      width={"100%"}
      height={"100%"}
 />
      </Box>
      <Box>
        <Typography variant="h3" textAlign={"center"}>
          Best Colleges
        </Typography>
      </Box>
    
    </Box>
  )
}

export default HomePage