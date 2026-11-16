import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import JucatoriPage from "./pages/JucatoriPage.jsx";
import JucatorDetaliuPage from "./pages/JucatorDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<JucatoriPage />} />
        <Route path="/jucatori/:id" element={<JucatorDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}