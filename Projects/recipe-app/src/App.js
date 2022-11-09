import "./App.css";
import Approuter from "./router/Approuter";
import theme from "./components/GlobalStyles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Approuter />
    </ThemeProvider>
  );
}

export default App;
