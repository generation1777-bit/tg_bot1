const items = [
  { creator: "ton-studio", plan: "Insider", renew: "in 17 days", status: "active" },
  { creator: "signals-lab", plan: "Pro Circle", renew: "in 2 days", status: "expiring" },
  { creator: "market-alpha", plan: "Founders", renew: "expired", status: "expired" }
];

export default function MySubsPage() {
  return (
    <main className="space-y-5">
      <section className="card">
        <p className="section-title">Subscriber area</p>
        <h1 className="h2 mt-2">My subscriptions</h1>
        <p className="mt-1 text-sm p-muted">Track status and renew without leaving Telegram.</p>
      </section>

      <section className="space-y-3">
        {items.map((item) => {
          const cls = item.status === "active" ? "badge-success" : item.status === "expiring" ? "badge-warn" : "badge-danger";
          const label = item.status === "active" ? "Active" : item.status === "expiring" ? "Expiring" : "Expired";
          return (
            <article key={item.creator + item.plan} className="card flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold">{item.creator}</p>
                <p className="text-sm p-muted">{item.plan} · renew {item.renew}</p>
              </div>
              <div className="text-right">
                <span className={`badge ${cls}`}>{label}</span>
                <div className="mt-2">
                  <button className="btn btn-secondary !py-1.5">Open</button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
