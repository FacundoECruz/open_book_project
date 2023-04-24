import DiscoverBooks from "./DiscoverBooks/DiscoverBooks";
import BookScreen from "../../pages/BookScreen";
import NotFoundScreen from "../../pages/NotFoundScreen";
import {Routes, Route} from "react-router-dom"
import "./AuthenticatedApp.css"

function AuthenticatedApp({user, logout}) {
  return (
    <div className="authenticated-app">
      <AppRoutes user={user} logout={logout}/>
      {/* <DiscoverBooks user={user} logout={logout}/> */}
    </div>
  );
}

function AppRoutes({user, logout}) {
  return (
    <Routes>
      <Route path="/" element={<DiscoverBooks user={user} logout={logout}/>} />
      <Route path="/book/:bookId" element={<BookScreen user={user} />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export default AuthenticatedApp;
