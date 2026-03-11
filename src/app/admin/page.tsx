const cards = [
  { label: "Gross volume", value: "₽2.48M", delta: "+18%" },
  { label: "Platform revenue", value: "₽248K", delta: "+11%" },
  { label: "Creators", value: "126", delta: "+9" },
  { label: "Subscribers", value: "8,420", delta: "+214" }
];

const entities = [
  { name: "TON Studio", type: "Creator", state: "active", mrr: "₽148K" },
  { name: "Signals Lab", type: "Creator", state: "warning", mrr: "₽82K" },
  { name: "@alex", type: "Subscriber", state: "active", mrr: "—" },
  { name: "@maria", type: "Subscriber", state: "pending", mrr: "—" }
];

export default function AdminPage() {
  return (
    <main className="space-y-5">
      <section className="card">
        <p className="section-title">Admin control center</p>
        <h1 className="h2 mt-2">Platform overview</h1>
      </section>

      <section className="kpi-grid">
        {cards.map((c) => (
          <article key={c.label} className="soft-card">
            <p className="text-xs p-muted">{c.label}</p>
            <p className="kpi-value">{c.value}</p>
            <p className="text-xs p-muted">{c.delta}</p>
          </article>
        ))}
      </section>

      <section className="card space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="h2">Entities</h2>
          <button className="btn btn-secondary">Export</button>
        </div>
        <div className="space-y-2">
          {entities.map((e) => (
            <div key={e.name + e.type} className="soft-card flex items-center justify-between">
              <div>
                <p className="font-medium">{e.name}</p>
                <p className="text-sm p-muted">{e.type}</p>
              </div>
              <div className="text-right">
                <span className={`badge ${e.state === "active" ? "badge-success" : e.state === "warning" ? "badge-warn" : "badge-danger"}`}>{e.state}</span>
                <p className="mt-1 text-sm p-muted">{e.mrr}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
