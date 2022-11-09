import LoginStyle, {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userınfo = {
    username: "yasin",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userınfo));
    navigate("-1");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"JR Recipe"}</Header>
        {/* login form elementi start */}
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="User name" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        {/* login form elementi finish */}
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
