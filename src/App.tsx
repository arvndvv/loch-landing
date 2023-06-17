import React, { useEffect } from "react";
import "./App.scss";
import Landing from "./pages/landing.page";

function App() {
  function debounce(func: any) {
    let timer: any;
    return function (event: any) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 500, event);
    };
  }
  function resizer() {
    //owlcarousel showing delay in calculation of width when page is resized
    // since resizing is not a common event, we can reload the page to fix the issue (with debounce to handle multiple resize events)
    window.location.reload();
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
