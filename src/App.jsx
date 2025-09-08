import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LenisScroll from "./components/LenisScroll";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
    return (
        <>
            <Router>
            <LenisScroll />
            <ScrollToTop/>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}