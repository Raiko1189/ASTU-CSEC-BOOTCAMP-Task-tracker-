import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Header from "./components/Header";

export default function App() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        text-slate-900 dark:text-slate-100
        transition-colors duration-300
      "
    >
      <BrowserRouter>
        <Header />

        {/* Main content wrapper */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
