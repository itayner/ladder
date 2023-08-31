import { useState, useEffect } from "react";
import { useIsMobileContext } from "../contexts/isMobile";
import { useMediaQuery } from "react-responsive";

export default function useResizeListening() {
  const { state, dispatch } = useIsMobileContext();

  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width;
  };

  useEffect(() => {
    function updateIsMobile() {
      console.log("Resize event handler called!!!");
      console.log(`Width: ${getWindowWidth()}`);
      const res = getWindowWidth < 576;
      dispatch({
        type: "updateIsMobile",
        payload: res,
      });
    }

    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);
}
