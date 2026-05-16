import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import BestHouse from './BestHouse';
import Dashboard from '../Pages/Dashboard';
import LowCasehouse from './LowCasthouse';
;

export default function Router() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>

          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/best-house" element={<BestHouse />} />
            <Route path="/lowcast-house" element={<LowCasehouse />} />
            
            
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}