import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";
import PageContainer from "./PageContainer";
import { StyleContext } from "../Contexts/StyleContext";
import store from '../Redux/store/index';


const MainDashboardContainer = () => {

  //initially get the user's data at the start of the app, so messages, who they are logged in as, etc
  //eventually we'll do sorting on the messages after we get them, and then put them in the Redux store
  /**TODO: DO THE INCREMENTAL POLLING HERE
   * Use the setTimeout/clearTimeout in the cleanup function trick for the polling so you don't have a 
   * "stale state" when running the increments (in timeout on a usestate, no cleanup function means it gets the same state over and over
   * again that's from when you first ran it, lol)
   * */
  useState(() => {
    window.api.send("getMessages");
    window.api.receive("getMessages", (messages) => {
      console.log('got messages, here they are: ', messages, store);

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