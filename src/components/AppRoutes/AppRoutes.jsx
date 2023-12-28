import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../../pages/Main/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import ProfileSeller from "../../pages/ProfileSeller/ProfileSeller";
import Product from "../../pages/Product/Product";
import NotFound from "../../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile-seller/:id" element={<ProfileSeller />} />
      <Route path="/product/:id" element={<Product />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
