import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Telegram Tribute MVP</h1>
      <div className="grid gap-2">
        <Link href="/creator" className="underline">Creator dashboard</Link>
        <Link href="/my-subscriptions" className="underline">My subscriptions</Link>
        <Link href="/admin" className="underline">Admin</Link>
      </div>
    </main>
  );
}
