import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Resume from "./components/resume";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  return (
    <Routes>
      {isResumePage ? (
        <Route path="/resume" element={<Resume />} />
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
