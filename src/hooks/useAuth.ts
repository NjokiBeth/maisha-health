import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAuthenticated(!!decoded);
      } catch {
        setIsAuthenticated(false);
      }
    }
  }, []);

  return { isAuthenticated };
}