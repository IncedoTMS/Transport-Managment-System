import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
