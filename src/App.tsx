import React, { useEffect, useState } from "react";
import "./App.scss";
import Landing from "./pages/landing.page";

function App() {
  const [vw, setVw] = useState(window.innerWidth);
  function debounce(func: any) {
    let timer: any;
    return function (event: any) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(
        () => {
          func(vw);
        },
        500,
        event
      );
    };
  }
  function resizer(vwOld: number) {
    //owlcarousel showing delay in calculation of width when page is resized
    // since resizing is not a common event, we can reload the page to fix the issue (with debounce to handle multiple resize events)
    if (vwOld !== window.innerWidth) {
      window.location.reload();
    }
  }
  useEffect(() => {
    window.addEventListener("resize", debounce(resizer));

    return () => {
      document.removeEventListener("resize", debounce(resizer));
    };
  }, []);

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
