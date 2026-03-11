import Link from "next/link";

const advantages = [
  { title: "Fast payouts", text: "Transparent fees and clear ledger snapshots for creators." },
  { title: "Telegram-native", text: "Seamless flow inside Mini App with one-tap subscription actions." },
  { title: "Premium UX", text: "Clean fintech-inspired interface ready for demo and user testing." }
];

export default function HomePage() {
  return (
    <main className="space-y-5">
      <section className="card space-y-4">
        <p className="section-title">Creator monetization</p>
        <h1 className="h1">Build your paid Telegram community in minutes.</h1>
        <p className="p-muted">
          Tribute Mini helps creators launch subscription tiers, accept payments and manage access with polished Telegram-native UX.
        </p>
        <div className="flex gap-2">
          <Link href="/creator/subscription" className="btn btn-primary">Create plan</Link>
          <Link href="/c/ton-studio" className="btn btn-secondary">Public page</Link>
        </div>
      </section>

      <section className="grid gap-3">
        {advantages.map((item) => (
          <article key={item.title} className="soft-card">
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm p-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="card space-y-3">
        <h2 className="h2">Choose your role</h2>
        <div className="grid gap-2">
          <Link href="/creator" className="btn btn-secondary justify-between">Creator dashboard <span>→</span></Link>
          <Link href="/my-subscriptions" className="btn btn-secondary justify-between">Subscriber area <span>→</span></Link>
          <Link href="/admin" className="btn btn-secondary justify-between">Admin control center <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
