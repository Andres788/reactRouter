import { Menu } from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  EventDetailPage,
  EventListPage,
  TicketPaymentPage,
} from "./pages";
export function AppRouter() {
  return (
    <>
      <Menu />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route
          path="/events/:eventId/tickets/:ticketId"
          element={<TicketPaymentPage />}
        />
        <Route
          path="/*"
          element={<h1>Estás en un recurso que no existe actualmente</h1>}
        />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <div>
      <BrowserRouter children={<AppRouter />} />
    </div>
  );
}
