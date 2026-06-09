import { Outlet } from 'react-router-dom';
import { Topbar } from './Topbar';

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Topbar showMenu={false} />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
