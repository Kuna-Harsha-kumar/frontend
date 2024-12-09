import { Link } from 'react-router-dom';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Link to="/login" className="login-button">Log In</Link>
      <Link to="/signup" className="signup-button">Sign Up</Link>
    </div>
  );
};

export default AuthButtons;
