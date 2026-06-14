import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--vs-ink)",
            color: "var(--vs-bg)",
            border: "none",
            borderRadius: 0,
            fontFamily: "Manrope, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.04em",
          },
        }}
      />
    </div>
  );
}

export default App;
