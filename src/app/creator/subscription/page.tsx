export default function SubscriptionEditorPage() {
  return (
    <main className="space-y-5">
      <section className="card space-y-2">
        <p className="section-title">Create or edit plan</p>
        <h1 className="h2">Subscription designer</h1>
        <p className="text-sm p-muted">Launch a polished offer card that converts in Telegram.</p>
      </section>

      <form className="card space-y-4">
        <label className="block text-sm">
          Plan title
          <input className="input" placeholder="Insider Access" defaultValue="Insider Access" />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm">
            Price (RUB)
            <input className="input" type="number" defaultValue={799} />
          </label>
          <label className="block text-sm">
            Billing period
            <select className="select" defaultValue="30">
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="365">365 days</option>
            </select>
          </label>
        </div>

        <label className="block text-sm">
          Description
          <textarea className="textarea" defaultValue="Weekly insider updates, private channel and monthly Q&A." />
        </label>

        <label className="block text-sm">
          Preview tagline
          <input className="input" defaultValue="For your most engaged followers" />
        </label>

        <div className="soft-card space-y-2">
          <p className="text-xs p-muted">Preview</p>
          <p className="font-semibold">Insider Access</p>
          <p className="text-sm p-muted">Weekly insider updates, private channel and monthly Q&A.</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">₽799 / month</span>
            <span className="badge badge-success">Published</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button type="button" className="btn btn-primary">Save plan</button>
          <button type="button" className="btn btn-secondary">Preview public page</button>
        </div>
      </form>
    </main>
  );
}
