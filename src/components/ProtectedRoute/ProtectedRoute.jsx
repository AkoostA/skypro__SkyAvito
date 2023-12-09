import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../../store/selectors/selectors";

function ProtectedRoute() {
  const user = useSelector(userSelector);

  if (!user.login) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
