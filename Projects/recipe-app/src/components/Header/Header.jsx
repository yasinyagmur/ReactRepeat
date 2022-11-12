import HeaderStyle, {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setselectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setselectedMeal(e.target.value)}
        >
          {mealType.map((item, index) => {
            return (
              <option key={index} value={item.toLowerCase()}>
                {item}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
