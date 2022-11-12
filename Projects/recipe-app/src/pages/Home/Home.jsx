import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const [query, setQuery] = useState("egg");
  const [selectedMeal, setselectedMeal] = useState("breakfast");

  const [recipes, setRecipes] = useState("");

  const APP_ID = "b6838f99";
  const APP_KEY = "73c81a31558f4c406a0ade6de393a72a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    // axios veriyi data içine koyuyor datayı tanımlarken açmış oluyoruz "destructuring yapıyoruz" ya da "data.hits"

    try {
      const { data } = await axios.get(url);
      console.log(data.hits);
      setRecipes(data.hits);
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
    </div>
  );
};

export default Home;
