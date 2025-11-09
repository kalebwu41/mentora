import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Roadmaps from "./pages/Roadmaps";
import Simulations from "./pages/Simulations";
import LearningPod from "./pages/LearningPod";
import Profile from "./pages/Profile";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-slate-50/80 backdrop-blur">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/learning-pod" element={<LearningPod />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
