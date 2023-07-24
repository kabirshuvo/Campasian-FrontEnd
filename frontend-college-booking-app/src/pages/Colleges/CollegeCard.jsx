import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CollegeCard = ({ title, id, description, posterUrl, stublishDate }) => {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleBookNow = () => {
    if (isUserLoggedIn) {
      // User is logged in, navigate to the booking page
      navigate(`/booking/${id}`);
    } else {
      // User is not logged in, navigate to the Auth page
      navigate("/auth");
    }
  };

  return (
    <Card
      sx={{
        width: 300,
        height: "100%", // Make the card take the full height of its container
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={posterUrl}
        alt={description}
        style={{
          height: "50%", // Adjust the height of the image to occupy 50% of the card's height
          width: "100%",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Established at: {new Date(stublishDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleBookNow}
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#2b2d42",
            ":hover": {
              bgcolor: "#121217",
            },
          }}
          size="small"
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CollegeCard;
