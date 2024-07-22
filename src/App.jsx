import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/User/HomePage";
import Login from "./components/User/Login";
import HowToApply from "./components/User/HowToApply";
import Navbar from "./components/User/Navbar";
import Footer from "./components/User/Footer";
import Form from "./components/User/Form";
import TrackApplication from "./components/User/TrackApplication";
import TermsAndCondition from "./components/User/TermsAndCondition";
import Admin from "./components/Admin/Admin";
import Policy from "./components/User/Policy";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/claims" element={<Form />} />
        <Route path="/how-to-apply" element={<HowToApply />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/track" element={<TrackApplication />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
