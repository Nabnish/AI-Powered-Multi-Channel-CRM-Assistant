import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Clients from "./pages/Clients";
import Leads from "./pages/Leads";
import Emails from "./pages/Emails";
import Calls from "./pages/Calls";
import Ai from "./pages/Ai";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Navigate to="/clients" replace />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/ai" element={<Ai />} />
          {/* leads, emails, calls, chat routes go here as we build them */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}