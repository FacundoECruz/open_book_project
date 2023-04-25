import DiscoverBooks from "./DiscoverBooks/DiscoverBooks";
import BookScreen from "../../pages/BookScreen";
import NotFoundScreen from "../../pages/NotFoundScreen";
import useQuery from "../../hooks/useQuery";
import {Routes, Route} from "react-router-dom"
import "./AuthenticatedApp.css"

function AuthenticatedApp({user, logout}) {

  const {data, status, searchBook} = useQuery()

  return (
    <div className="authenticated-app">
      <AppRoutes data={data} status={status} searchBook={searchBook} user={user} logout={logout}/>
      {/* <DiscoverBooks user={user} logout={logout}/> */}
    </div>
  );
}

function AppRoutes({user, logout, data, status, searchBook}) {
  return (
    <Routes>
      <Route path="/" element={<DiscoverBooks user={user} logout={logout} data={data} status={status} searchBook={searchBook}/>} />
      <Route path="/book/:bookId" element={<BookScreen user={user} />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export default AuthenticatedApp;
