import { Button, Card, Header, Image, MainContainer } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();

  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        const { label, image } = recipe;
        return (
          <Card key={index}>
            <Header>{label}</Header>
            <Image src={image || defaultImage} />
            <Button onClick={() => navigate("detail", { state: recipe })}>
              View More
            </Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
