import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, IconButton } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import { Box } from "@mui/system";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [movieDetails, setMovieDetails] = useState({});

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  React.useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
    original_language,
  } = movieDetails;
  // console.log(movieDetails);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "1rem 0 1rem 5rem",
        padding: "1rem",
      }}
    >
      <Card>
        <CardActionArea sx={{ display: "flex" }}>
          <CardMedia component="img" image={defaultImage} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {overview}
            </Typography>
            <Typography>Original Language: {original_language}</Typography>
            <IconButton aria-label="add to favorites">
              <StarHalfOutlinedIcon />
              <Typography>
                {vote_average} / {vote_count} -{" "}
                {"Release Date: " + release_date}
              </Typography>
            </IconButton>
            <Box
              style={{
                marginTop: "1.3rem",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "gray",
                  border: "1px solid gray",
                  padding: "0.5rem",
                  borderRadius: "5px",
                }}
                to={-1}
              >
                Go Back
              </Link>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default MovieDetail;
