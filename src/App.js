import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./home/home";
import HomeTablet from "./home/home-tablet";
import Reacteroids from "./Reacteroids";
import ReacteroidsMobile from "./mobile/Reacteroids-mobile";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import ReactGA from 'react-ga';

export default function App() {
  
  function initializeReactGA() {
    ReactGA.initialize('UA-163726402-1');
    ReactGA.pageview('/');
  }
  initializeReactGA();
  return (
    <HashRouter>
      <div>
        <Switch>
          <Router path="/game">
            {!isMobile ? 
              <Reacteroids />
             : (isMobileOnly ? 
              <DeviceOrientation lockOrientation={"portrait"} >
                <Orientation orientation="portrait" alwaysRender={false}>
                  <ReacteroidsMobile />
                </Orientation>
                <Orientation orientation="landscape" >
                  <div id="turn-device">
                    <img src={require("./assets/img/turn-device.gif")}></img>
                  </div>
                </Orientation>
                
              </DeviceOrientation>
             : 
              <div>Sono tablet</div>
             ) }
          </Router>
          <Route path="/">
            {isTablet ? <HomeTablet /> : <Home/>}
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
