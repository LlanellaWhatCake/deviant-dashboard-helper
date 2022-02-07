import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import MainDashboardContainer from "./Components/MainDashboardContainer";
import theme from "./Styling/DarkTheme";

const rootElement = document.getElementById("root");
const App = () => {
  render (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <MainDashboardContainer />
      <Routes>
        {/* <Route path="/" element={<MainDashboard />} /> */}
      </Routes>
      </ThemeProvider>
    </BrowserRouter>,
    rootElement
  );
} 

export default App;