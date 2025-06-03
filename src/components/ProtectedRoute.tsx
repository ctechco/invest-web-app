
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Check if user is authenticated (in a real app, this would check actual auth state)
  const isAuthenticated = localStorage.getItem('userAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    // Redirect to authentication page
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
