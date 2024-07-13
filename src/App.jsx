// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/sign-in" element={<Signin />}>
          {" "}
        </Route>
        <Route path="/sign-up" element={<SignUp />}>
          {" "}
        </Route>
        <Route path="/about" element={<About />}>
          {" "}
        </Route>
        <Route path="/profile" element={<Profile />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
