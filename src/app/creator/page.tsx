import Link from "next/link";

const metrics = [
  { label: "MRR", value: "₽148,400", note: "+12.4%" },
  { label: "Active subs", value: "1,842", note: "+76 today" },
  { label: "Renewal", value: "87%", note: "Stable" },
  { label: "Churn", value: "4.1%", note: "-0.8pp" }
];

const activePlans = [
  { name: "Insider", price: "₽799 / month", members: 1240, status: "active" },
  { name: "Pro Circle", price: "₽1,990 / month", members: 512, status: "active" },
  { name: "Founders", price: "₽4,990 / month", members: 90, status: "limited" }
];

export default function CreatorPage() {
  return (
    <main className="space-y-5">
      <section className="card">
        <p className="section-title">Creator dashboard</p>
        <div className="mt-2 flex items-center justify-between">
          <h1 className="h2">TON Studio</h1>
          <span className="badge badge-success">Healthy</span>
        </div>
        <p className="mt-2 text-sm p-muted">Your monetization stack is live. Keep momentum with retention-focused offers.</p>
      </section>

      <section className="kpi-grid">
        {metrics.map((m) => (
          <article key={m.label} className="soft-card">
            <p className="text-xs p-muted">{m.label}</p>
            <p className="kpi-value">{m.value}</p>
            <p className="text-xs p-muted">{m.note}</p>
          </article>
        ))}
      </section>

      <section className="card space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="h2">Active subscriptions</h2>
          <Link href="/creator/subscription" className="btn btn-secondary">New plan</Link>
        </div>
        <div className="space-y-2">
          {activePlans.map((plan) => (
            <div key={plan.name} className="soft-card flex items-center justify-between">
              <div>
                <p className="font-medium">{plan.name}</p>
                <p className="text-sm p-muted">{plan.price} · {plan.members} members</p>
              </div>
              <span className={`badge ${plan.status === "active" ? "badge-success" : "badge-warn"}`}>
                {plan.status === "active" ? "Active" : "Limited"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-3">
        <article className="card space-y-2">
          <p className="section-title">Quick actions</p>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/creator/subscription" className="btn btn-secondary">Create tariff</Link>
            <Link href="/creator/subscribers" className="btn btn-secondary">Manage subs</Link>
            <button className="btn btn-secondary">Send promo</button>
            <button className="btn btn-secondary">Export report</button>
          </div>
        </article>
        <article className="card">
          <p className="section-title">Referral program</p>
          <p className="mt-2 text-sm">Invite creators and earn 15% of platform fee for 3 months.</p>
          <div className="mt-3 flex items-center justify-between rounded-xl border px-3 py-2" style={{ borderColor: "var(--line)" }}>
            <span className="text-sm p-muted">tribute.app/r/tonstudio</span>
            <button className="btn btn-primary !py-1.5">Copy</button>
          </div>
        </article>
      </section>
    </main>
  );
}
