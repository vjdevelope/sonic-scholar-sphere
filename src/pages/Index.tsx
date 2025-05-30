
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LandingPage from '@/components/LandingPage';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { user } = useAuth();

  return user ? <Dashboard /> : <LandingPage />;
};

export default Index;
