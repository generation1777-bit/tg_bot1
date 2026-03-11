export default function CreatorPublicPage({ params }: { params: { slug: string } }) {
  const plans = [
    { title: "Insider", price: "₽799", period: "month", perks: "Private channel, weekly notes" },
    { title: "Pro Circle", price: "₽1,990", period: "month", perks: "Everything in Insider + live sessions" }
  ];

  return (
    <main className="space-y-5">
      <section className="card space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-slate-700" />
          <div>
            <h1 className="h2">{params.slug}</h1>
            <p className="text-sm p-muted">Creator • Strategy & product</p>
          </div>
        </div>
        <p className="text-sm p-muted">Join the private community for deep-dive analysis, member-only posts and live sessions.</p>
      </section>

      <section className="space-y-3">
        {plans.map((plan) => (
          <article key={plan.title} className="card space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{plan.title}</h3>
              <span className="badge badge-success">Popular</span>
            </div>
            <p className="text-sm p-muted">{plan.perks}</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">{plan.price} <span className="text-sm p-muted">/ {plan.period}</span></p>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
