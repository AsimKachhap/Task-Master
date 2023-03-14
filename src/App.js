import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DailyPage from "./components/DailyPage";
import WeeklyPage from "./components/WeeklyPage";
import MonthlyPage from "./components/MonthlyPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="daily" element={<DailyPage />} />
          <Route path="weekly" element={<WeeklyPage />} />
          <Route path="monthly" element={<MonthlyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
