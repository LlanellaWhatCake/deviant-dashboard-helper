import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import MainDashboardContainer from "./Components/MainDashboardContainer";

import { StyleContext, StyleContextProvider } from "./Contexts/StyleContext";

const rootElement = document.getElementById("root");
const App = () => {
  render(
    <BrowserRouter>
        <StyleContextProvider>
          <MainDashboardContainer />
          <Routes>
            {/* <Route path="/" element={<MainDashboard />} /> */}
          </Routes>
        </StyleContextProvider>
    </BrowserRouter>,
    rootElement
  );
}

export default App;