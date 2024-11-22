import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header/header";

function _ScrollToTop(props: { children: any }) {
  const { pathname } = useLocation();
  const publicUrl = import.meta.env.VITE_PUBLIC_URL;
  console.log(publicUrl);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255,64,64"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
