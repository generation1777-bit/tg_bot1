const subscribers = [
  { user: "@alex", plan: "Insider", status: "active", joined: "12 Feb" },
  { user: "@maria", plan: "Pro Circle", status: "pending", joined: "1 Mar" },
  { user: "@den", plan: "Insider", status: "revoked", joined: "28 Jan" },
  { user: "@kate", plan: "Founders", status: "active", joined: "11 Mar" }
];

export default function SubscriberManagementPage() {
  return (
    <main className="space-y-5">
      <section className="card space-y-3">
        <p className="section-title">Subscriber management</p>
        <div className="flex gap-2">
          <input className="input !mt-0" placeholder="Search by username" />
          <select className="select !mt-0 max-w-[132px]" defaultValue="all">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="revoked">Revoked</option>
          </select>
        </div>
      </section>

      <section className="space-y-2">
        {subscribers.map((s) => {
          const cls = s.status === "active" ? "badge-success" : s.status === "pending" ? "badge-warn" : "badge-danger";
          return (
            <article key={s.user + s.joined} className="soft-card flex items-center justify-between">
              <div>
                <p className="font-medium">{s.user}</p>
                <p className="text-sm p-muted">{s.plan} · joined {s.joined}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`badge ${cls}`}>{s.status}</span>
                <button className="btn btn-secondary !py-1.5">Actions</button>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
