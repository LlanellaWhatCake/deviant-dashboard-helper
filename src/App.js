import { render } from "react-dom";
import {
  BrowserRouter,
} from "react-router-dom";
import MainDashboardContainer from "./Components/MainDashboardContainer";

import { StyleContext, StyleContextProvider } from "./Contexts/StyleContext";


const rootElement = document.getElementById("root");
const App = () => {
  return(
    <BrowserRouter>
        <StyleContextProvider>
          <MainDashboardContainer />
        </StyleContextProvider>
    </BrowserRouter>
  );
}

export default App;