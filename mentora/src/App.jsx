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
import LearningPods from "./pages/LearningPods";

const AppShell = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-mentora-midnight text-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
          <div className="absolute inset-x-0 top-[-200px] h-[420px] bg-[radial-gradient(circle_600px_at_50%_-20%,rgba(124,250,211,0.25),transparent)] blur-3xl" />
          <div className="absolute inset-y-0 left-[-150px] w-[360px] bg-[radial-gradient(circle_450px_at_center,rgba(25,184,201,0.3),transparent)] blur-3xl" />
          <div className="absolute inset-y-0 right-[-120px] w-[420px] bg-[radial-gradient(circle_520px_at_center,rgba(8,19,50,0.85),transparent)] blur-3xl" />
        </div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/learning-pods" element={<LearningPods />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
