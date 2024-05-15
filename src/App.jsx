import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import {useEffect, useState} from "react";
import Entity from "./page/Entity.jsx";
import {ProtectedRoute} from "./auth/ProtectedRoutes.jsx";
import PageNotFound from "./page/PageNotFound.jsx";


// eslint-disable-next-line react/prop-types
function Logout({ handleLogout }) {
    useEffect(() => {
        console.log("logout useEffect aktiv");
        handleLogout();
    }, [handleLogout]);
    return <Navigate to="/home" />;
}

function App() {
    const [user, setUser] = useState([]); //array da jeg får token og mail
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setUser([]);
        setIsLoggedIn(false);
    };

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}><AppLayout isLoggedIn={isLoggedIn} /></ProtectedRoute>}>
                <Route index element={<Navigate to="home" />} />
                <Route path="/home" element={<Home user={user} isLoggedIn={isLoggedIn} />} />
                <Route path="/entity" element={<Entity isLoggedIn={isLoggedIn} user={user} setUser={setUser} />} />
                <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
              </Route>
              <Route path="/login" element={<Login welcomeUser={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/register" element={<Register setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
              <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;