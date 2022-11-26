import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Container } from "@mui/system";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const IMG_API = "http://image.tmdb.org/t/p/w185/";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

export default function RecipeReviewCard() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

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
      {movies?.map((movie) => {
        console.log(movie);
        const {
          title,
          poster_path,
          release_date,
          overview,
          vote_average,
          vote_count,
          id,
          original_language,
        } = movie;
        return (
          <Card sx={{ maxWidth: 340, margin: "1rem" }}>
            <CardHeader
              title={title}
              subheader={"Release Date: " + release_date}
            />
            <CardMedia
              component="img"
              height="194"
              image={defaultImage}
              alt={title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography>Original Language: {original_language}</Typography>
              <IconButton aria-label="add to favorites">
                <StarHalfOutlinedIcon />
              </IconButton>
              {currentUser && (
                <Typography>
                  {vote_average} / {vote_count}
                </Typography>
              )}
            </CardActions>
            <Button
              onClick={() => {
                navigate("/detail/" + id);
              }}
              size="small"
            >
              Movie Detail
            </Button>
          </Card>
        );
      })}
    </Container>
  );
}
