import axios from "axios";
import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const [query, setQuery] = useState("");
  const [selectedMeal, setselectedMeal] = useState("breakfast");

  const [recipes, setRecipes] = useState(null);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    // axios veriyi data içine koyuyor datayı tanımlarken açmış oluyoruz "destructuring yapıyoruz" ya da "data.hits"

    try {
      if (query) {
        const { data } = await axios.get(url);
        console.log(data.hits);
        setRecipes(data.hits);
      } else {
        alert("Please Enter Your Meal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        setselectedMeal={setselectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>Te food can not be found</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
