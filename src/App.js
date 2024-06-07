import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // alerts
  const [alert, setAlert] = useState(null);

  // show alert
  const showAlert = (title, msg, type) => {
    setAlert({
      title: title,
      message: msg,
      type: type,
    });

    // dismiss alert after some time
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const themeLight = {
    color: "black",
    bodyBg: "white",
    textAreaBg: "white",
  };
  const themeDark = {
    color: "white",
    bodyBg: "#212529",
    textAreaBg: "#2d3436",
  };
  const [themeColor, setThemeColor] = useState(themeLight);

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      // make theme dark
      setMode("dark");
      setThemeColor(themeDark);
      document.body.style.backgroundColor = themeDark.bodyBg;
      showAlert("Success", "Dark Mode has been enabled.", "success");
      document.title = "TextUtils - Dark";

      // Catching User Eyes method
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing!';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      // make theme light
      setMode("light");
      setThemeColor(themeLight);
      document.body.style.backgroundColor = themeLight.bodyBg;
      showAlert("Success", "Light Mode has been enabled.", "success");
      document.title = "TextUtils - Light";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
      />
      <Alert alert={alert} />
      <div className="container-lg mt-3 ">
        {/* <Router> */}
        {/* <Routes> */}
        {/* In the route component we can pass 'exact' attribute, but from react-v6 this behavior is became default */}
        {/* <Route path="/about" element={<About />} />
            <Route */}
        {/* path="/"
              element={ */}
        <TextForm
          heading="Enter Text"
          mode={mode}
          showAlert={showAlert}
          themeColor={themeColor}
        />
        {/* }
            /> */}
        {/* </Routes> */}
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
