import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";
import PageContainer from "./PageContainer";
import { StyleContext } from "../Contexts/StyleContext";


const MainDashboardContainer = () => {

  //initially get the user's data at the start of the app, so messages, who they are logged in as, etc
  useState(() => {
    window.api.send("getMessages");
    window.api.receive("getMessages", (messages) => {
      console.log('got messages, here there are: ', messages);
    })
  }, []);

  const [styleContext, setStyleContext] = useContext(StyleContext);

  const style = {
    mainContainer: {
      backgroundColor: styleContext.theme.palette.backgroundMain.main,
      backgroundImage: `url(${styleContext.theme.spaceBackground.src})`,
      backgroundAttachment: "fixed",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      flex: 1,
      position: "fixed",
      overflow: "auto"
    }

  }

  return (
    <div style={{ ...style.mainContainer }}>
      <AppHeader />
      <Sidebar />
      <PageContainer />

    </div>
  );
}

export default MainDashboardContainer;