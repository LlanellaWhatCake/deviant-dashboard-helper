import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import MainDashboard from "./Pages/MainDashboard";
import theme from "./Styling/DarkTheme";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<MainDashboard />} />
    </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);

export default App;