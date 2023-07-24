import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CollegeCard = ({title, id, description, posterUrl, stublishDate }) => {

  return (
    <Card
      sx={{
        margin: 1,
        width: 300, 
        height: 320,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        textAlign: "center"
      }}
    >
      <img height={'50%'} width={'100%'} src={posterUrl} alt={description} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
            stublis Date:
        {new Date(stublishDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button sx={{margin: 'auto'}}  size="small">View Details</Button> */}
        {/* <Button size="small">Learn More</Button> */}
        <Button
          LinkComponent={Link}
          to={`/booking/${id}`}
          variant="contained"
          fullWidth
          sx={{ margin: "auto", bgcolor:"#2b2d42", ":hover": {
            bgcolor:"#121217"
          }}}
          size="small"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CollegeCard;
