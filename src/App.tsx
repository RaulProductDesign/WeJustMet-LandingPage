import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname !== "/" || !hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
