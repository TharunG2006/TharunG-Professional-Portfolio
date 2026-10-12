const fs = require("fs");
const path = require("path");

const projDir = path.join(__dirname, "..", "public", "projects");
if (!fs.existsSync(projDir)) {
  fs.mkdirSync(projDir, { recursive: true });
}

// 1. Astrovia Preview
const astroviaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-astro" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050814"/>
      <stop offset="50%" stop-color="#0b1329"/>
      <stop offset="100%" stop-color="#04091a"/>
    </linearGradient>
    <linearGradient id="anom-glow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.0"/>
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#bg-astro)"/>
  
  <g stroke="#1e293b" stroke-width="0.8" opacity="0.6">
    <line x1="40" y1="80" x2="760" y2="80"/>
    <line x1="40" y1="160" x2="760" y2="160"/>
    <line x1="40" y1="240" x2="760" y2="240"/>
    <line x1="40" y1="320" x2="760" y2="320"/>
    <line x1="40" y1="400" x2="760" y2="400"/>
    <line x1="160" y1="40" x2="160" y2="440"/>
    <line x1="320" y1="40" x2="320" y2="440"/>
    <line x1="480" y1="40" x2="480" y2="440"/>
    <line x1="640" y1="40" x2="640" y2="440"/>
  </g>

  <rect x="40" y="30" width="720" height="44" rx="8" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="5" fill="#f43f5e"/>
  <circle cx="82" cy="52" r="5" fill="#eab308"/>
  <circle cx="99" cy="52" r="5" fill="#10b981"/>
  <text x="125" y="57" fill="#38bdf8" font-family="monospace" font-size="13" font-weight="bold">ASTROVIA // SAT-TELEMETRY ANOMALY ENGINE</text>
  <text x="610" y="57" fill="#10b981" font-family="monospace" font-size="11" font-weight="bold">● LIVE: SatNOGS</text>

  <rect x="40" y="90" width="220" height="345" rx="8" fill="#0b1120" stroke="#1e293b" stroke-width="1.2"/>
  <text x="60" y="120" fill="#94a3b8" font-family="monospace" font-size="11" font-weight="bold">TARGET SATELLITE</text>
  <text x="60" y="142" fill="#f8fafc" font-family="sans-serif" font-size="15" font-weight="bold">NASA SMAP / MSL</text>
  
  <text x="60" y="180" fill="#94a3b8" font-family="monospace" font-size="11">MODEL ARCHITECTURE</text>
  <text x="60" y="200" fill="#38bdf8" font-family="sans-serif" font-size="13" font-weight="600">PyTorch LSTM Multi-Ch</text>

  <text x="60" y="235" fill="#94a3b8" font-family="monospace" font-size="11">SCORING METHOD</text>
  <text x="60" y="255" fill="#a78bfa" font-family="sans-serif" font-size="13" font-weight="600">Z-Score Residual Error</text>

  <text x="60" y="290" fill="#94a3b8" font-family="monospace" font-size="11">EXPLAINABILITY</text>
  <text x="60" y="310" fill="#34d399" font-family="sans-serif" font-size="13" font-weight="600">Pred-Error Attribution</text>

  <rect x="55" y="340" width="190" height="70" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-width="1"/>
  <text x="70" y="365" fill="#818cf8" font-family="monospace" font-size="10">SIH 2026 WAITLISTED</text>
  <text x="70" y="388" fill="#c7d2fe" font-family="sans-serif" font-size="12" font-weight="bold">Live Orbit Inference</text>

  <rect x="280" y="90" width="480" height="345" rx="8" fill="#0b1120" stroke="#1e293b" stroke-width="1.2"/>
  
  <rect x="500" y="130" width="110" height="180" fill="url(#anom-glow)" rx="4"/>
  <line x1="500" y1="130" x2="500" y2="310" stroke="#f43f5e" stroke-dasharray="4" stroke-width="1.5"/>
  <line x1="610" y1="130" x2="610" y2="310" stroke="#f43f5e" stroke-dasharray="4" stroke-width="1.5"/>
  <text x="505" y="120" fill="#f43f5e" font-family="monospace" font-size="10" font-weight="bold">ANOMALY DETECTED (Z &gt; 3.2)</text>

  <path d="M 290 280 Q 340 240, 390 270 T 490 250 T 540 140 T 590 150 T 640 260 T 740 240" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <path d="M 290 282 Q 340 242, 390 268 T 490 252 T 540 248 T 590 255 T 640 258 T 740 242" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="5 3"/>

  <circle cx="310" cy="405" r="4" fill="#38bdf8"/>
  <text x="322" y="409" fill="#94a3b8" font-family="monospace" font-size="10">Actual Telemetry</text>
  <line x1="460" y1="405" x2="485" y2="405" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3 2"/>
  <text x="495" y="409" fill="#94a3b8" font-family="monospace" font-size="10">LSTM Forecast</text>
  <rect x="610" y="400" width="10" height="10" fill="#f43f5e"/>
  <text x="626" y="409" fill="#f43f5e" font-family="monospace" font-size="10">Residual Delta</text>
</svg>`;

// 2. SentinelAI Preview
const sentinelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-sentinel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060913"/>
      <stop offset="100%" stop-color="#0d1527"/>
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#bg-sentinel)"/>

  <rect x="40" y="30" width="720" height="44" rx="8" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="5" fill="#f43f5e"/>
  <circle cx="82" cy="52" r="5" fill="#eab308"/>
  <circle cx="99" cy="52" r="5" fill="#10b981"/>
  <text x="125" y="57" fill="#34d399" font-family="monospace" font-size="13" font-weight="bold">SENTINEL_AI // SIEM &amp; SOAR AUTONOMOUS TRIAGE</text>
  <text x="610" y="57" fill="#38bdf8" font-family="monospace" font-size="11">NODE: Llama-3.1 8B</text>

  <rect x="40" y="90" width="340" height="345" rx="8" fill="#0b1120" stroke="#1e293b" stroke-width="1.2"/>
  <text x="60" y="125" fill="#38bdf8" font-family="monospace" font-size="12" font-weight="bold">PIPELINE FLOW &amp; OCSF SCHEMA</text>
  
  <rect x="60" y="150" width="300" height="42" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="75" y="176" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="600">Vector Ingestion ➔ Redpanda Broker</text>

  <rect x="60" y="205" width="300" height="42" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="75" y="231" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="600">OCSF Schema ➔ OpenSearch Cluster</text>

  <rect x="60" y="260" width="300" height="42" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="75" y="286" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="600">Sigma Rules ➔ OpenSearch DSL</text>

  <rect x="60" y="315" width="300" height="42" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
  <text x="75" y="341" fill="#86efac" font-family="sans-serif" font-size="12" font-weight="bold">LangGraph Triage ➔ Shuffle/TheHive</text>

  <text x="60" y="395" fill="#64748b" font-family="monospace" font-size="10">ALLOW-LISTED INCIDENT SOAR PLAYBOOKS</text>

  <rect x="400" y="90" width="360" height="345" rx="8" fill="#020617" stroke="#1e293b" stroke-width="1.2"/>
  <rect x="400" y="90" width="360" height="30" rx="8" fill="#0f172a"/>
  <text x="415" y="110" fill="#94a3b8" font-family="monospace" font-size="11">AGENT TRIAGE REASONING STREAM</text>

  <g font-family="monospace" font-size="11" fill="#f8fafc">
    <text x="415" y="145" fill="#38bdf8">[INGEST]</text>
    <text x="475" y="145">OCSF SecurityEvent #8841</text>
    <text x="415" y="170" fill="#eab308">[SIGMA]</text>
    <text x="475" y="170">Rule Match: Suspicious PsExec</text>
    
    <text x="415" y="200" fill="#a78bfa">[LLAMA3.1]</text>
    <text x="495" y="200">Evaluating process lineage...</text>
    <text x="415" y="225" fill="#94a3b8">&gt; Parent: powershell.exe -enc</text>
    <text x="415" y="245" fill="#94a3b8">&gt; Severity: HIGH (Conf: 0.94)</text>

    <text x="415" y="280" fill="#34d399">[PLAYBOOK]</text>
    <text x="495" y="280">Dispatching to TheHive...</text>
    <text x="415" y="305" fill="#10b981">&gt; Case #1042 created with IoCs</text>
    <text x="415" y="330" fill="#10b981">&gt; Host isolation via Shuffle</text>

    <text x="415" y="375" fill="#38bdf8">[STATUS]</text>
    <text x="475" y="375" fill="#34d399">Incident Contained Automatically</text>
  </g>
</svg>`;

// 3. Orion AI Preview
const orionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-orion" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0518"/>
      <stop offset="50%" stop-color="#140b2e"/>
      <stop offset="100%" stop-color="#05030f"/>
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#bg-orion)"/>

  <rect x="40" y="30" width="720" height="44" rx="8" fill="#1e1035" stroke="#3b1f63" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="5" fill="#f43f5e"/>
  <circle cx="82" cy="52" r="5" fill="#eab308"/>
  <circle cx="99" cy="52" r="5" fill="#10b981"/>
  <text x="125" y="57" fill="#c084fc" font-family="monospace" font-size="13" font-weight="bold">ORION AI // LOCAL-FIRST HYBRID RAG ASSISTANT</text>
  <text x="615" y="57" fill="#a855f7" font-family="monospace" font-size="11">TAURI 2 + RUST</text>

  <rect x="40" y="90" width="340" height="345" rx="8" fill="#120924" stroke="#2e154f" stroke-width="1.2"/>
  <text x="60" y="125" fill="#c084fc" font-family="monospace" font-size="12" font-weight="bold">OFFLINE CORE ARCHITECTURE</text>

  <rect x="60" y="145" width="300" height="52" rx="6" fill="#1e1035" stroke="#3b1f63"/>
  <text x="75" y="168" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Python &amp; Rust Engine (PyO3)</text>
  <text x="75" y="186" fill="#a78bfa" font-family="monospace" font-size="10">High-speed native token &amp; vector ops</text>

  <rect x="60" y="210" width="300" height="52" rx="6" fill="#1e1035" stroke="#3b1f63"/>
  <text x="75" y="233" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">FAISS + SQLite FTS5 Hybrid RAG</text>
  <text x="75" y="251" fill="#a78bfa" font-family="monospace" font-size="10">Dense embeddings + BM25 keyword search</text>

  <rect x="60" y="275" width="300" height="52" rx="6" fill="#1e1035" stroke="#3b1f63"/>
  <text x="75" y="298" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Sandboxed Agent Runtime</text>
  <text x="75" y="316" fill="#a78bfa" font-family="monospace" font-size="10">Local code execution &amp; automated tools</text>

  <text x="60" y="375" fill="#818cf8" font-family="monospace" font-size="11">Linux • macOS • Windows</text>
  <text x="60" y="398" fill="#64748b" font-family="monospace" font-size="10">Zero Cloud Data Exfiltration</text>

  <rect x="400" y="90" width="360" height="345" rx="8" fill="#090414" stroke="#2e154f" stroke-width="1.2"/>
  
  <circle cx="580" cy="200" r="65" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="6 3"/>
  <circle cx="580" cy="200" r="45" fill="#2e154f" opacity="0.6"/>
  <circle cx="580" cy="200" r="28" fill="#7c3aed" opacity="0.4"/>
  <circle cx="580" cy="200" r="10" fill="#c084fc"/>

  <text x="430" y="315" fill="#e9d5ff" font-family="monospace" font-size="12" font-weight="bold">&gt; ORION: "Ready to assist offline."</text>
  <text x="430" y="345" fill="#94a3b8" font-family="sans-serif" font-size="11">Indexed 12,400 docs in SQLite FTS5</text>
  <text x="430" y="370" fill="#94a3b8" font-family="sans-serif" font-size="11">Local latency: ~14ms time-to-first-token</text>
</svg>`;

// 4. Prism Preview
const prismSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-prism" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040d1a"/>
      <stop offset="100%" stop-color="#021424"/>
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#bg-prism)"/>

  <rect x="40" y="30" width="720" height="44" rx="8" fill="#0b1e36" stroke="#1d4ed8" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="5" fill="#f43f5e"/>
  <circle cx="82" cy="52" r="5" fill="#eab308"/>
  <circle cx="99" cy="52" r="5" fill="#10b981"/>
  <text x="125" y="57" fill="#38bdf8" font-family="monospace" font-size="13" font-weight="bold">PRISM // END-TO-END ENCRYPTED MESSAGING</text>
  <text x="600" y="57" fill="#10b981" font-family="monospace" font-size="11">RSA-4096 / AES-256</text>

  <rect x="40" y="90" width="340" height="345" rx="8" fill="#05152b" stroke="#0e3a6c" stroke-width="1.2"/>
  <text x="60" y="125" fill="#38bdf8" font-family="monospace" font-size="12" font-weight="bold">WEB CRYPTO ZERO-TRUST FLOW</text>

  <rect x="60" y="145" width="300" height="52" rx="6" fill="#082347" stroke="#1d4ed8"/>
  <text x="75" y="168" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Client-Side RSA Keypair</text>
  <text x="75" y="186" fill="#60a5fa" font-family="monospace" font-size="10">Private key never leaves browser</text>

  <rect x="60" y="210" width="300" height="52" rx="6" fill="#082347" stroke="#1d4ed8"/>
  <text x="75" y="233" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">AES-256-GCM Session Cipher</text>
  <text x="75" y="251" fill="#60a5fa" font-family="monospace" font-size="10">Authenticated encryption per payload</text>

  <rect x="60" y="275" width="300" height="52" rx="6" fill="#082347" stroke="#1d4ed8"/>
  <text x="75" y="298" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Socket.IO Encrypted Transport</text>
  <text x="75" y="316" fill="#60a5fa" font-family="monospace" font-size="10">Server relays only ciphertext blobs</text>

  <text x="60" y="375" fill="#34d399" font-family="monospace" font-size="11">Zero Plaintext On Central Server</text>

  <rect x="400" y="90" width="360" height="345" rx="8" fill="#020d1c" stroke="#0e3a6c" stroke-width="1.2"/>
  
  <rect x="420" y="120" width="220" height="42" rx="8" fill="#1e293b"/>
  <text x="435" y="145" fill="#94a3b8" font-family="sans-serif" font-size="11">Can you share the orbit keys?</text>
  
  <rect x="520" y="180" width="220" height="48" rx="8" fill="#1d4ed8"/>
  <text x="535" y="202" fill="#ffffff" font-family="sans-serif" font-size="11">Sent. Encrypted with your RSA key.</text>
  <text x="535" y="218" fill="#93c5fd" font-family="monospace" font-size="9">🔒 AES-GCM Encrypted</text>

  <rect x="420" y="250" width="320" height="60" rx="6" fill="#082347" stroke="#1d4ed8" stroke-dasharray="3"/>
  <text x="435" y="272" fill="#38bdf8" font-family="monospace" font-size="10">CIPHERTEXT BLOB ON SERVER:</text>
  <text x="435" y="295" fill="#64748b" font-family="monospace" font-size="9">7f8a91b2c4e5...[ZERO_KNOWLEDGE]</text>
</svg>`;

// 5. GeoForesight Preview
const geoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-geo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#021415"/>
      <stop offset="100%" stop-color="#052426"/>
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#bg-geo)"/>

  <rect x="40" y="30" width="720" height="44" rx="8" fill="#042f2e" stroke="#115e59" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="5" fill="#f43f5e"/>
  <circle cx="82" cy="52" r="5" fill="#eab308"/>
  <circle cx="99" cy="52" r="5" fill="#10b981"/>
  <text x="125" y="57" fill="#2dd4bf" font-family="monospace" font-size="13" font-weight="bold">GEOFORESIGHT // REMOTE SENSING PLATFORM</text>
  <text x="610" y="57" fill="#14b8a6" font-family="monospace" font-size="11">NEXT.JS + R2</text>

  <rect x="40" y="90" width="340" height="345" rx="8" fill="#031f20" stroke="#115e59" stroke-width="1.2"/>
  <text x="60" y="125" fill="#2dd4bf" font-family="monospace" font-size="12" font-weight="bold">RESEARCH COLLABORATION SUITE</text>

  <rect x="60" y="145" width="300" height="50" rx="6" fill="#042f2e" stroke="#0d9488"/>
  <text x="75" y="168" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Role-Aware Peer Moderation</text>
  <text x="75" y="185" fill="#5eead4" font-family="monospace" font-size="10">Academic review workflows &amp; verify</text>

  <rect x="60" y="205" width="300" height="50" rx="6" fill="#042f2e" stroke="#0d9488"/>
  <text x="75" y="228" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Threaded Geospatial Chats</text>
  <text x="75" y="245" fill="#5eead4" font-family="monospace" font-size="10">Coordinate-linked discussion threads</text>

  <rect x="60" y="265" width="300" height="50" rx="6" fill="#042f2e" stroke="#0d9488"/>
  <text x="75" y="288" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Cloudflare R2 Asset Delivery</text>
  <text x="75" y="305" fill="#5eead4" font-family="monospace" font-size="10">Fast edge caching for satellite tiles</text>

  <text x="60" y="375" fill="#99f6e4" font-family="monospace" font-size="11">Deployed: geoforesight.org</text>

  <rect x="400" y="90" width="360" height="345" rx="8" fill="#021c1d" stroke="#115e59" stroke-width="1.2"/>
  
  <circle cx="580" cy="230" r="85" fill="#042f2e" stroke="#0d9488" stroke-width="2"/>
  <ellipse cx="580" cy="230" rx="85" ry="30" fill="none" stroke="#14b8a6" stroke-width="1.2" stroke-dasharray="4"/>
  <ellipse cx="580" cy="230" rx="30" ry="85" fill="none" stroke="#14b8a6" stroke-width="1.2" stroke-dasharray="4"/>
  <ellipse cx="580" cy="230" rx="120" ry="45" fill="none" stroke="#2dd4bf" stroke-width="1.5" transform="rotate(-25 580 230)"/>
  <circle cx="670" cy="190" r="5" fill="#f43f5e"/>
  <text x="680" y="193" fill="#f43f5e" font-family="monospace" font-size="10">Sentinel-2 Tile</text>
</svg>`;

// 6. Aegis Toolkit Preview
const aegisSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-aegis" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14070a"/>
      <stop offset="100%" stop-color="#240c13"/>
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#bg-aegis)"/>
  <rect x="40" y="30" width="720" height="44" rx="8" fill="#2b0d16" stroke="#881337" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="5" fill="#f43f5e"/>
  <circle cx="82" cy="52" r="5" fill="#eab308"/>
  <circle cx="99" cy="52" r="5" fill="#10b981"/>
  <text x="125" y="57" fill="#fb7185" font-family="monospace" font-size="13" font-weight="bold">AEGIS TOOLKIT // CYBERSECURITY RECON WORKSTATION</text>
  <text x="630" y="57" fill="#fbbf24" font-family="monospace" font-size="11">IN PROGRESS</text>

  <rect x="40" y="90" width="720" height="345" rx="8" fill="#180a0f" stroke="#881337" stroke-width="1.2"/>
  <text x="60" y="130" fill="#fb7185" font-family="monospace" font-size="13" font-weight="bold">INTEGRATED PENETRATION TESTING MODULES</text>
  
  <rect x="60" y="155" width="210" height="145" rx="8" fill="#2b0d16" stroke="#be123c"/>
  <text x="75" y="190" fill="#f8fafc" font-family="sans-serif" font-size="14" font-weight="bold">Nmap Scanner</text>
  <text x="75" y="218" fill="#fda4af" font-family="monospace" font-size="10">Automated TCP/UDP</text>
  <text x="75" y="236" fill="#fda4af" font-family="monospace" font-size="10">port reconnaissance</text>
  <text x="75" y="254" fill="#fda4af" font-family="monospace" font-size="10">&amp; OS fingerprinting</text>

  <rect x="295" y="155" width="210" height="145" rx="8" fill="#2b0d16" stroke="#be123c"/>
  <text x="310" y="190" fill="#f8fafc" font-family="sans-serif" font-size="14" font-weight="bold">Hash Analyzer</text>
  <text x="310" y="218" fill="#fda4af" font-family="monospace" font-size="10">SHA256, MD5, bcrypt</text>
  <text x="310" y="236" fill="#fda4af" font-family="monospace" font-size="10">hash identification</text>
  <text x="310" y="254" fill="#fda4af" font-family="monospace" font-size="10">&amp; validation engine</text>

  <rect x="530" y="155" width="210" height="145" rx="8" fill="#2b0d16" stroke="#be123c"/>
  <text x="545" y="190" fill="#f8fafc" font-family="sans-serif" font-size="14" font-weight="bold">Payload Encoder</text>
  <text x="545" y="218" fill="#fda4af" font-family="monospace" font-size="10">Base64, Hex, XOR, URL</text>
  <text x="545" y="236" fill="#fda4af" font-family="monospace" font-size="10">multi-round encode</text>
  <text x="545" y="254" fill="#fda4af" font-family="monospace" font-size="10">&amp; decode payload tool</text>

  <rect x="60" y="325" width="680" height="85" rx="6" fill="#13070b" stroke="#4c0519"/>
  <text x="80" y="355" fill="#f43f5e" font-family="monospace" font-size="11" font-weight="bold">[WORKSTATION CLI INTEGRATION]</text>
  <text x="80" y="380" fill="#94a3b8" font-family="monospace" font-size="10">&gt; aegis --scan 192.168.1.0/24 --ports top-100 --detect-cve --output audit.json</text>
</svg>`;

// 7. HireHub Preview
const hirehubSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-hh" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1226"/>
      <stop offset="100%" stop-color="#111c38"/>
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#bg-hh)"/>
  <rect x="40" y="30" width="720" height="44" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="5" fill="#f43f5e"/>
  <circle cx="82" cy="52" r="5" fill="#eab308"/>
  <circle cx="99" cy="52" r="5" fill="#10b981"/>
  <text x="125" y="57" fill="#60a5fa" font-family="monospace" font-size="13" font-weight="bold">HIREHUB // CAMPUS PLACEMENT CONCURRENCY PLATFORM</text>
  <text x="630" y="57" fill="#fbbf24" font-family="monospace" font-size="11">IN PROGRESS</text>

  <rect x="40" y="90" width="720" height="345" rx="8" fill="#0b1329" stroke="#1e293b" stroke-width="1.2"/>
  <text x="60" y="130" fill="#38bdf8" font-family="monospace" font-size="13" font-weight="bold">HIGH-CONCURRENCY ARCHITECTURE &amp; RBAC</text>

  <rect x="60" y="155" width="210" height="145" rx="8" fill="#16203d" stroke="#2563eb"/>
  <text x="75" y="190" fill="#f8fafc" font-family="sans-serif" font-size="14" font-weight="bold">Role-Based Access</text>
  <text x="75" y="218" fill="#93c5fd" font-family="monospace" font-size="10">Granular RBAC for</text>
  <text x="75" y="236" fill="#93c5fd" font-family="monospace" font-size="10">recruiters, students,</text>
  <text x="75" y="254" fill="#93c5fd" font-family="monospace" font-size="10">&amp; placement admins</text>

  <rect x="295" y="155" width="210" height="145" rx="8" fill="#16203d" stroke="#2563eb"/>
  <text x="310" y="190" fill="#f8fafc" font-family="sans-serif" font-size="14" font-weight="bold">DynamoDB Scale</text>
  <text x="310" y="218" fill="#93c5fd" font-family="monospace" font-size="10">Sub-10ms latency</text>
  <text x="310" y="236" fill="#93c5fd" font-family="monospace" font-size="10">under concurrent</text>
  <text x="310" y="254" fill="#93c5fd" font-family="monospace" font-size="10">registration spikes</text>

  <rect x="530" y="155" width="210" height="145" rx="8" fill="#16203d" stroke="#2563eb"/>
  <text x="545" y="190" fill="#f8fafc" font-family="sans-serif" font-size="14" font-weight="bold">AWS S3 Verification</text>
  <text x="545" y="218" fill="#93c5fd" font-family="monospace" font-size="10">Automated student</text>
  <text x="545" y="236" fill="#93c5fd" font-family="monospace" font-size="10">credential ingestion</text>
  <text x="545" y="254" fill="#93c5fd" font-family="monospace" font-size="10">&amp; document storage</text>

  <rect x="60" y="325" width="680" height="85" rx="6" fill="#0f172a" stroke="#1e293b"/>
  <text x="80" y="355" fill="#60a5fa" font-family="monospace" font-size="11" font-weight="bold">[STACK SUMMARY]</text>
  <text x="80" y="380" fill="#94a3b8" font-family="monospace" font-size="10">Next.js 16 • Node.js • AWS DynamoDB • AWS S3 • E2E Encrypted Messaging</text>
</svg>`;

// Write all preview SVGs
fs.writeFileSync(path.join(projDir, "astrovia.svg"), astroviaSvg);
fs.writeFileSync(path.join(projDir, "sentinelai.svg"), sentinelSvg);
fs.writeFileSync(path.join(projDir, "orion-ai.svg"), orionSvg);
fs.writeFileSync(path.join(projDir, "prism.svg"), prismSvg);
fs.writeFileSync(path.join(projDir, "geoforesight.svg"), geoSvg);
fs.writeFileSync(path.join(projDir, "aegis-toolkit.svg"), aegisSvg);
fs.writeFileSync(path.join(projDir, "hirehub.svg"), hirehubSvg);

console.log("All project previews successfully regenerated with zero text overflow.");
