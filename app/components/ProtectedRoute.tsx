'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({
  children,
  requireAuth,
}: {
  children: React.ReactNode;
  requireAuth?: boolean;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        router.replace('/login');
      } else if (pathname === '/login' && user) {
        router.replace('/dashboard');
      }
    }
  }, [user, loading, pathname, router, requireAuth]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
}
