const sampleAnswer = {
  summary: "Building a peaceful global community requires trustworthy institutions, education, justice, economic inclusion, and practical local action.",
  key_dimensions: ["Personal conduct", "Local institutions", "National policy", "Global cooperation"],
  practical_steps: ["Start with local service projects", "Teach nonviolent communication", "Support trustworthy institutions", "Use technology responsibly"],
  perspectives: ["Peace needs inner transformation and policy reform.", "Sustainable peace depends on both justice and reconciliation."],
  risks: ["Oversimplifying complex conflicts", "Ignoring local context", "Using AI without verification"],
  positive_direction: ["Focus on what individuals, schools, and communities can implement now."],
  moderation_note: "Constructive mode: answer designed to support safe, prosocial action."
};
export default function Home() {
  return (
    <main className="container">
      <p>StraightLens frontend is live.</p> <-- added March 25, 12:32 PM -->
      <div className="nav">
        <div>
          <div className="badge">StraightLens alpha</div>
          <h1 style={{margin:'10px 0 0 0'}}>StraightLens</h1>
          <div className="muted">Clear answers. Guided understanding. Practical direction for the common good.</div>
        </div>
        <button className="button">Sign in</button>
      </div>
      <section className="hero">
        <div className="badge" style={{background:'rgba(255,255,255,.18)', color:'white'}}>AI disclosure</div>
        <h2 style={{fontSize:'38px', margin:'16px 0 10px'}}>Ask any meaningful question</h2>
        <p style={{maxWidth:'760px', lineHeight:'1.6'}}>StraightLens turns questions into structured explanations, practical next steps, balanced perspectives, and rich visual guidance. It aims for clarity, safety, and human benefit.</p>
        <input className="input" defaultValue="How can communities build lasting peace?" />
      </section>
      <div className="grid">
        <section className="card">
          <h3>Structured answer</h3>
          <div className="answer-section">
            <strong>Summary</strong>
            <p>{sampleAnswer.summary}</p>
          </div>
          <div className="two-col">
            <div className="metric">
              <strong>Key dimensions</strong>
              <ul>{sampleAnswer.key_dimensions.map((x)=> <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="metric">
              <strong>Practical steps</strong>
              <ul>{sampleAnswer.practical_steps.map((x)=> <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
          <div className="two-col" style={{marginTop:'16px'}}>
            <div className="metric">
              <strong>Perspectives</strong>
              <ul>{sampleAnswer.perspectives.map((x)=> <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="metric">
              <strong>Risks to avoid</strong>
              <ul>{sampleAnswer.risks.map((x)=> <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
          <div className="answer-section">
            <strong>Positive direction</strong>
            <p>{sampleAnswer.positive_direction[0]}</p>
          </div>
        </section>
        <aside className="card">
          <h3>Trust and compliance</h3>
          <div className="metric"><strong>Moderation mode</strong><p className="muted">{sampleAnswer.moderation_note}</p></div>
          <div className="metric" style={{marginTop:'16px'}}><strong>User controls</strong><ul><li>Account deletion</li><li>Retention settings</li><li>Password reset</li><li>Email verification</li></ul></div>
          <div className="metric" style={{marginTop:'16px'}}><strong>Admin audit access</strong><p className="muted">Restricted to admin and superadmin roles, backed by PostgreSQL.</p></div>
        </aside>
      </div>
    </main>
  );
}
