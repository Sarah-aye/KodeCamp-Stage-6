import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function withAuth(Component) {
  function WithAuth(props) {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    if (loading) {
      return <div>Loading...</div>;
    }
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  }
  WithAuth.displayName = `WithAuth(${Component.displayName || Component.name || "Component"})`;
  return WithAuth;
}
export default withAuth;
