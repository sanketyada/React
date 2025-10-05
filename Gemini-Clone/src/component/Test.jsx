import React, { useEffect, useState } from "react";

/*
  AgenticAI_UI_and_Features.jsx
  - A single-file React component (default export) that renders a modern, responsive
    dashboard UI for an Agentic misinformation detection & public-updates app.
  - Tailwind CSS utility classes are used (no imports required here). Follow the
    project conventions: place this component in your client (e.g. src/components/AgentDashboard.jsx)

  WHAT THIS FILE INCLUDES (high-level):
  1) A polished interface (sidebar, header, sources panel, live feed, fact-check panel)
  2) UI hooks for integrating with backend endpoints (stubs: /api/scan, /api/verify, /api/sources)
  3) Accessibility-friendly and mobile responsive layout
  4) Inline TODOs showing where to wire real data & agent actions

  BACKEND / AGENTIC PIPELINE SUGGESTIONS (see the README notes below inside comments):
  - Source ingestion: RSS, public APIs (Twitter/X, Reddit, news APIs), web-scrapers, fact-check org feeds
  - Prioritization: streaming classifier to detect possible misinformation -> scoring & deduplication
  - Evidence retrieval: agent collects supporting/contradicting sources, timestamps, authorship metadata
  - Automated verification: ensemble of LMs + knowledge graph + search + fact-check DB (Snopes, IFCN) + heuristics
  - Human-in-the-loop: critical items flagged for editor review before public broadcast
  - Public update format: short summary, uncertainty score, links, confidence, last-checked timestamp

  NOTE: This file intentionally keeps logic minimal and shows `fetch`-style calls that you must
  replace with your real API routes. The UI is ready to accept real-time events (use websockets)
  or polling (setInterval) depending on your infra.
*/

export default function Test() {
  const [feed, setFeed] = useState([]); // live feed items
  const [sources, setSources] = useState([]); // connected sources
  const [selected, setSelected] = useState(null); // selected feed item
  const [query, setQuery] = useState("");
  const [scanning, setScanning] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // load initial data (replace endpoints with your backend)
    fetchMockData();
    fetchSources();
  }, []);

  async function fetchMockData() {
    // TODO: replace with /api/feed or websocket subscription
    const mock = [
      {
        id: "itm-1",
        title: "Viral claim: Local water supply contaminated",
        snippet: "Residents report colored water; social posts show photos",
        score: 0.74,
        status: "under-review", // under-review | verified-true | verified-false | updated
        timestamp: new Date().toISOString(),
        evidence: [],
      },
      {
        id: "itm-2",
        title: "Rumor: Vaccine causes X",
        snippet: "A clip claims immediate adverse effects after vaccination",
        score: 0.89,
        status: "under-review",
        timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
        evidence: [],
      },
    ];
    setFeed(mock);
  }

  async function fetchSources() {
    // TODO: call /api/sources to list connected ingestion sources
    const mockSources = [
      { id: "src-1", name: "Local News RSS", status: "connected" },
      { id: "src-2", name: "Twitter/X (filtered) ", status: "connected" },
      { id: "src-3", name: "Reddit /r/news", status: "connected" },
    ];
    setSources(mockSources);
  }

  async function startScan() {
    setScanning(true);
    // TODO: call backend to start continuous agent scanning, or open websocket
    // fetch('/api/scan/start', { method: 'POST' })
    // For demo, toggle scanning and add sample item after 2s
    setTimeout(() => {
      setFeed((f) => [
        {
          id: `itm-${Date.now()}`,
          title: "New: Misleading post about food shortage",
          snippet: "A post claims that stores are empty due to a government order",
          score: 0.92,
          status: "under-review",
          timestamp: new Date().toISOString(),
          evidence: [],
        },
        ...f,
      ]);
    }, 2000);
  }

  async function stopScan() {
    setScanning(false);
    // TODO: call backend to stop scanning
  }

  async function verifyItem(itemId) {
    // UI stub: call /api/verify POST { id: itemId }
    // mock: mark selected as 'verified-false' with sample evidence
    setFeed((f) =>
      f.map((it) =>
        it.id === itemId
          ? {
              ...it,
              status: "verified-false",
              evidence: [
                { source: "Official Water Board", link: "https://example.gov/notice", summary: "No contamination reported" },
              ],
              score: 0.12,
            }
          : it
      )
    );
  }

  async function requestHumanReview(itemId) {
    // UI: trigger human-in-the-loop review workflow
    // TODO: POST /api/review/request { id }
    alert("Requested human review for " + itemId);
  }

  function prettyTime(iso) {
    const d = new Date(iso);
    return d.toLocaleString();
  }

  const filtered = feed.filter((it) => (filter === "all" ? true : it.status === filter));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* SIDEBAR */}
        <aside className="md:col-span-3 bg-white rounded-2xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Agent Control</h2>
          <p className="text-sm text-slate-500 mb-4">Monitor scans, connected sources & critical alerts.</p>

          <div className="flex gap-2 mb-3">
            <button
              onClick={() => (scanning ? stopScan() : startScan())}
              className="flex-1 py-2 rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {scanning ? "Stop Scanning" : "Start Scanning"}
            </button>
            <button
              onClick={() => window.alert("Snapshot saved (mock) - wire to /api/snapshot")}
              className="py-2 px-3 rounded-lg border"
            >
              Snapshot
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium">Connected Sources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {sources.map((s) => (
                <li key={s.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-xs text-slate-500">{s.status}</div>
                  </div>
                  <div className="text-xs">●</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium">Filters</h3>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 rounded-lg border">
                <option value="all">All</option>
                <option value="under-review">Under review</option>
                <option value="verified-true">Verified (True)</option>
                <option value="verified-false">Verified (False)</option>
                <option value="updated">Updated</option>
              </select>

              <input
                placeholder="Search feed..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-2 rounded-lg border"
              />
            </div>
          </div>
        </aside>

        {/* MAIN FEED */}
        <main className="md:col-span-6">
          <div className="bg-white rounded-2xl p-4 shadow">
            <header className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">Crisis Feed</h1>
                <div className="text-xs text-slate-500">Live, prioritized reports detected by the agents</div>
              </div>
              <div className="text-sm text-slate-600">Last sync: {new Date().toLocaleTimeString()}</div>
            </header>

            <ul className="space-y-3">
              {filtered.map((it) => (
                <li
                  key={it.id}
                  onClick={() => setSelected(it)}
                  className="p-3 rounded-lg border cursor-pointer hover:bg-slate-50 flex justify-between items-start"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <div className={`text-sm font-semibold`}>{it.title}</div>
                      <div className="text-xs px-2 py-0.5 rounded-full bg-slate-100">Score: {(it.score ?? 0).toFixed(2)}</div>
                    </div>
                    <div className="text-sm text-slate-600">{it.snippet}</div>
                    <div className="text-xs text-slate-400 mt-2">{prettyTime(it.timestamp)}</div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div
                      className={`text-xs font-medium rounded-full px-2 py-1 ${
                        it.status === "under-review" ? "bg-yellow-100 text-yellow-800" : it.status === "verified-true" ? "bg-green-100 text-green-800" : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {it.status}
                    </div>
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          verifyItem(it.id);
                        }}
                        className="text-xs px-2 py-1 rounded-md border"
                      >
                        Quick Verify
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {filtered.length === 0 && <div className="text-sm text-slate-500 mt-4">No items match this filter.</div>}
          </div>

          <div className="mt-4 bg-white rounded-2xl p-4 shadow">
            <h3 className="text-lg font-semibold">Activity</h3>
            <div className="text-sm text-slate-500 mt-2">Recent agent actions and audit trail</div>
            <ul className="mt-3 text-sm space-y-2">
              <li>Agent detected 2 high-priority posts in last 30m</li>
              <li>Automated verification performed on 1 item</li>
              <li>2 items sent to human review</li>
            </ul>
          </div>
        </main>

        {/* RIGHT PANE: Details / Fact-check panel */}
        <aside className="md:col-span-3">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-lg font-semibold">Detail & Fact-check</h3>
            {!selected && <div className="text-sm text-slate-500 mt-3">Select an item from the feed to view evidence and updates.</div>}

            {selected && (
              <div className="mt-3">
                <div className="font-semibold">{selected.title}</div>
                <div className="text-xs text-slate-500">{prettyTime(selected.timestamp)}</div>
                <p className="mt-2 text-sm text-slate-700">{selected.snippet}</p>

                <div className="mt-3">
                  <h4 className="text-sm font-medium">Agent Summary</h4>
                  <p className="text-sm text-slate-500">Automated summary generated by the verification agent. Confidence: {(selected.score ?? 0).toFixed(2)}</p>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-medium">Evidence</h4>
                  {selected.evidence && selected.evidence.length > 0 ? (
                    <ul className="text-sm mt-2 space-y-2">
                      {selected.evidence.map((e, idx) => (
                        <li key={idx} className="text-xs">
                          <a href={e.link} target="_blank" rel="noreferrer" className="underline">
                            {e.source}
                          </a>
                          : {e.summary}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-sm text-slate-400 mt-2">No evidence gathered yet.</div>
                  )}
                </div>

                <div className="mt-4 flex gap-2">
                  <button onClick={() => verifyItem(selected.id)} className="flex-1 py-2 rounded-lg bg-green-600 text-white">
                    Mark Verified (True)
                  </button>
                  <button onClick={() => requestHumanReview(selected.id)} className="py-2 px-3 rounded-lg border">
                    Send for Review
                  </button>
                </div>

                <div className="mt-3 text-xs text-slate-500">Pro tip: Use the 'Snapshot' to create a timestamped audit entry for public transparency.</div>
              </div>
            )}
          </div>

          <div className="mt-4 bg-white rounded-2xl p-4 shadow">
            <h4 className="text-sm font-medium">Public Bulletin Preview</h4>
            <div className="text-sm text-slate-500 mt-2">How an outgoing public update would look. This is autogenerated text from the agent and editable by the editor before publishing.</div>
            <div className="mt-3 p-3 rounded-lg border bg-slate-50">
              <div className="font-medium">Update — Water supply claim</div>
              <div className="text-xs text-slate-500">Confidence: 12% • Last-checked: {new Date().toLocaleString()}</div>
              <div className="text-sm mt-2">Our agents reviewed multiple sources and found no evidence of water contamination in the city. We will continue to monitor and will update if new facts emerge.</div>
            </div>

            <div className="mt-3">
              <button onClick={() => window.alert('Publish mock') } className="w-full py-2 rounded-lg bg-indigo-600 text-white">Publish Update</button>
            </div>
          </div>
        </aside>
      </div>

      {/* Small footer */}
      <footer className="max-w-7xl mx-auto p-4 text-xs text-slate-500">AgenticAI — Prototype UI • Replace mock fetch calls with your API routes</footer>
    </div>
  );
}

/* README NOTES (place in your repo README or developer docs):

API endpoints suggested (examples):
- POST /api/scan/start  -> begins continuous scanning job for the agent cluster
- POST /api/scan/stop   -> stops scanning
- GET  /api/feed?page=1 -> return prioritized items with score + status + evidence
- POST /api/verify     -> { id } -> perform verification run synchronously or async
- POST /api/review/request -> { id, reviewer } -> send to human review workflow
- GET  /api/sources    -> returns ingest sources and statuses
- POST /api/sources/connect -> add a new source (RSS, twitter, etc.)

Agent pipeline components:
1. Ingest (connectors for RSS, X/Twitter, Reddit, News APIs, web-scrapers)
2. Deduplication & clustering (group similar reports)
3. Misinformation detector (lightweight classifier to surface candidates)
4. Evidence retriever (search web, fact-check DBs, knowledge graphs)
5. Automated verifier (ensemble LLMs + rule-based checks + KG lookups)
6. Scoring / uncertainty quantification
7. Human-in-the-loop moderation & editor dashboard
8. Publish module (public bulletin, API, social posts) with audit trail

Security & Ethics:
- Rate-limit public endpoints and redact PII before display
- Maintain audit logs for each verification decision
- Provide a clear appeals & correction workflow
- Include a provenance panel in UI (who verified, when, sources used)

Deployment suggestions:
- Use message queue (Kafka/RabbitMQ) for streaming ingestion
- Serverless workers or containerized agent workers for verification tasks
- Use WebSockets (socket.io) for real-time UI updates
- Store artifacts (snapshots, evidence) in object storage and reference in DB

*/
