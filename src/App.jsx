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
import AdminTable from "./components/Admin/AdminTable";
import PrivateRoute from "./components/User/PrivateRoute";
import useFetchUserClaims from "./components/User/Hook/UseFetchUserClaims";

const App = () => {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/claims"
          element={
            <PrivateRoute>
              <Form />
            </PrivateRoute>
          }
        />
        <Route path="/how-to-apply" element={<HowToApply />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route
          path="/track"
          element={
            <PrivateRoute>
              <TrackApplication />
            </PrivateRoute>
          }
        />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
