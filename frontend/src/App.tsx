import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Clients from "./pages/Clients";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Navigate to="/clients" replace />} />
          <Route path="/clients" element={<Clients />} />
          {/* leads, emails, calls, chat routes go here as we build them */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}