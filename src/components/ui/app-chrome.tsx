import Link from "next/link";
import type { ReactNode } from "react";

export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="flex items-center gap-2">
          <span className="brand-dot" />
          <span className="text-sm font-semibold">Tribute Mini</span>
        </div>
        <span className="badge">Telegram Mini App</span>
      </header>

      {children}

      <nav className="tabbar">
        <Link href="/" className="tab active">Home</Link>
        <Link href="/creator" className="tab">Creator</Link>
        <Link href="/my-subscriptions" className="tab">My subs</Link>
        <Link href="/admin" className="tab">Admin</Link>
      </nav>
    </div>
  );
}
