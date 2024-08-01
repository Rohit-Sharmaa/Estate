import { useEffect, useState } from "react";
import "./loader.css";

const Loader = ({ disableCenter }) => {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === "Loading...") return "Loading";
        return prevText + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`container ${disableCenter ? "container-no-center" : ""}`}>
      <div className="loader">
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--text">{loadingText}</div>
      </div>
    </div>
  );
};

export default Loader;
