import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Switch, Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (Message, Type) => {
    setAlert({
      Messages: Message,
      Types: Type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (buttonColor) => {
    if (buttonColor === "btn-primary") {
      document.body.style.backgroundColor = "#001A3E";
      document.body.style.color = "White";
    } else if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000231";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
      <Alert Alert={alert} />
      <div className="container mx-5">
        <div className="row">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <div className="containter textbox my-3">
            <TextForm
              heading="Enter text below to analyze"
              Mode={Mode}
              showAlert={showAlert}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
