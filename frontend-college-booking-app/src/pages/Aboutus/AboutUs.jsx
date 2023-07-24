
import { Container, Typography, Paper } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ padding: "20px", backgroundColor: "#f2f2f2" }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} sx={{ padding: "20px", textAlign: "justify" }}>
        <Typography variant="body1" gutterBottom>
          Welcome to Campasian! We are a college booking platform that aims to make the college selection and booking
          process easy and hassle-free for students. Our mission is to connect students with their dream colleges and help
          them find the perfect educational institutions to achieve their goals.
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Campasian, we understand that choosing the right college is a crucial decision in a student's life. It can
          shape their future and career. With our user-friendly search feature, students can explore a wide range of
          colleges, their courses, facilities, and more to make informed choices.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our platform offers a comprehensive database of colleges from all around the world. Whether you are looking for
          a renowned university, a specialized college, or a community college, you can find them all here. We also
          provide detailed information about each college, including admission criteria, tuition fees, and student
          reviews.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Campasian is not just for students; we also cater to parents and educators. Parents can use our platform to
          support their children in finding the best-fit college for their interests and aspirations. Educators can also
          utilize Campasian to stay updated on college-related news and trends.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our team at Campasian is dedicated to ensuring that students have a smooth and seamless experience while using
          our platform. We continuously strive to improve and enhance our services to provide the best possible support
          to our users.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for choosing Campasian as your college booking partner. We look forward to assisting you in your
          journey of finding the perfect college and shaping a bright future.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
