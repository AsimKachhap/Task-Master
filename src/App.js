import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DailyPage from "./pages/DailyPage";
import WeeklyPage from "./pages/WeeklyPage";
import MonthlyPage from "./pages/MonthlyPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<DailyPage />} />
          <Route path="daily" element={<DailyPage />} />
          <Route path="weekly" element={<WeeklyPage />} />
          <Route path="monthly" element={<MonthlyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
