import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="container">
        <div className="card">
          <div className="content">
            <h1 className="status-code">404</h1>
            <h2 className="title">Oops! Page not found</h2>
            <p className="description">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <div className="actions">
              <Button
                variant="secondary"
                size="small"
                onClick={() => navigate("/")}
              >
                Home
              </Button>
              <Button variant="secondary" size="small">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
