import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./components/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import BottomNavBar from "./components/NavBar/BottomNavBar";

const AppLayout = () => (
  <div className="min-h-screen flex flex-col bg-primary">
    <NavBar />
    <div className="mt-[85px] lg:mt-[70px] mx-[20px] lg:mx-[255px]">
      <Outlet />
    </div>
    <div className="">
      <Footer />
    </div>
      <BottomNavBar />
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
