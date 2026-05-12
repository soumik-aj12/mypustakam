import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContextProvider from "./context/ContextProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <div className="font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/geo" element={<Geolocation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:profileID" element={<OtherProfile />} /> */}
          </Routes>
        </main>
      </div>
      <ToastContainer />
      <Footer/>
    </ContextProvider>
  );
}

export default App;
