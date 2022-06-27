import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Subscribe from "./pages/Subscribe";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Subscribe/>} />
        <Route path="/aulas" element={<EventPage />} />
        <Route path="/aulas/:slug" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
