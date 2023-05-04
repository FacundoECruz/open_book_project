import Explore from "./pages/Explore/Explore";
import Show from "./pages/Show/Show";
import NotFoundScreen from "./pages/NotFoundScreen";
import { Routes, Route } from "react-router-dom";
import "./stylesheets/AuthenticatedApp.css";

function AuthenticatedApp({ user, logout }) {

  return (
    <div className="authenticated-app">
      <AppRoutes user={user} logout={logout} />
    </div>
  );
}

function AppRoutes({ user, logout }) {
  return (
    <Routes user={user} logout={logout}>
      <Route path="/" element={<Explore user={user} logout={logout} />} />
      <Route path="/book/:bookId" element={<Show user={user} />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default AuthenticatedApp;
