"use client";

import React, { useEffect } from "react";

const BODY_HTML = `<a class="skip" href="#about">Skip to content</a><div id="pre"><div class="pw">deevna<i>.</i></div><div class="pb"><s></s></div><span class="mono" id="pn">0</span></div><div id="prog"></div><canvas id="fx"></canvas><div id="glow"></div><div id="cmd"><div class="cb"><input id="ci" placeholder="Type a command or search…" autocomplete="off"><ul id="cl"></ul></div></div><div id="toast"></div><div id="cur"><span></span></div><div id="ov"></div><aside id="dr"><div class="dh"><span class="mono" id="dk"></span><button class="ib" id="dx">close ✕</button></div><div id="dc"></div><div class="dn"><button class="ib" id="dp">← prev</button><button class="ib" id="dn2">next →</button></div></aside>
<nav><div class="wrap"><a class="logo" href="#">deevna<i>.</i></a>
<div class="links"><a href="#projects">work</a><a href="#about">about me <span style="color:var(--accent)">✦</span></a><a href="#skills">skills</a><a href="#journey">experience</a><a href="#projects">research</a><a href="#contact">resume ↓</a></div>
<div class="rt"><button class="ib" id="kb">⌘K</button><button class="ib" id="th" title="Toggle theme">◐</button><a href="#contact" style="font-weight:500">say hey ↗</a></div></div></nav>
<header class="wrap">
<div class="sub"><span class="mono">Software Development Engineer · Backend &amp; Applied ML</span><span class="mono"><span class="dot"></span>Chennai, IN · Open to roles</span></div>
<div class="hey"><h1>hey, I’m</h1>
<svg id="sq" viewBox="0 0 300 60" fill="none"><path d="M4 30 C60 4 110 4 150 26 S240 52 296 24" stroke="#f0553a" stroke-width="7" stroke-linecap="round"/></svg>
<div class="catw" id="cat"><span class="tip">pet the cat</span><span class="purr">purr… 🐾</span>
<svg viewBox="0 0 150 130"><path d="M32 40 L42 6 L66 30Z" fill="#f2b552" stroke="#f0553a" stroke-width="4" stroke-linejoin="round"/><path d="M118 40 L108 6 L84 30Z" fill="#f2b552" stroke="#f0553a" stroke-width="4" stroke-linejoin="round"/>
<ellipse cx="75" cy="78" rx="60" ry="46" fill="#f2b552"/><ellipse cx="45" cy="70" rx="12" ry="7" fill="#f0553a" opacity=".55"/><ellipse cx="105" cy="70" rx="12" ry="7" fill="#f0553a" opacity=".55"/>
<g class="eo"><circle cx="52" cy="72" r="5" fill="#161616"/><circle cx="98" cy="72" r="5" fill="#161616"/></g>
<g class="eh" stroke="#161616" stroke-width="4" stroke-linecap="round" fill="none"><path d="M42 76 Q52 64 62 76"/><path d="M88 76 Q98 64 108 76"/></g>
<path d="M71 86 L79 86 L75 92Z" fill="#f0553a"/><path d="M66 96 Q75 105 84 96" stroke="#161616" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<g stroke="#161616" stroke-width="3.5" stroke-linecap="round"><path d="M12 76 L34 80"/><path d="M14 94 L34 90"/><path d="M138 76 L116 80"/><path d="M136 94 L116 90"/></g></svg></div></div>
<svg class="bdg3" viewBox="0 0 120 120"><defs><path id="cp" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0"/></defs><text><textPath href="#cp">open to roles · chennai · backend &amp; ML · </textPath></text><text x="60" y="68" text-anchor="middle" style="font-size:22px;fill:#f0553a;letter-spacing:0">✦</text></svg><div class="word">deevna<b></b></div><p class="tl">Building systems that hold up under real-world constraints. <em>Specializing in backend.</em></p><p class="roles">I build <em id="typed"></em><span class="caret"></span></p><div class="cta"><a class="btn" href="#contact">Let’s talk ↗</a><a class="gh" href="https://github.com/deevredd">GitHub</a><a class="gh" href="https://linkedin.com/in/deevnareddy">LinkedIn</a><span class="mono" id="clk"></span></div></header>
<div id="pen"><div class="tk"><span class="pc" id="pc">✏️</span></div><span id="pct">0%</span></div>

<div class="wrap"><div class="stats">
<div class="stat rv"><b><span data-to="50">0</span><i>M+</i></b><p>Alexa Calendar users supported</p></div>
<div class="stat rv"><b><span data-to="70">0</span><i>%</i></b><p>manual ops reduced on DSAR compliance</p></div>
<div class="stat rv"><b><span data-to="15">0</span><i>+</i></b><p>JDK 17 upgrades, zero-downtime rollouts</p></div>
<div class="stat rv"><b><span data-to="2">0</span><i>×</i></b><p>papers, Springer &amp; IEEE published</p></div></div></div>

<div class="mq"><div id="tr"></div></div>
<section id="about" class="s"><div class="wrap"><div class="mono" style="margin-bottom:14px">01 · About</div><h2 class="t">backend by habit, <em>ML by curiosity.</em></h2>
<div class="ab"><div class="rv"><p class="lead">I build backend systems and ML-driven products that hold up under real-world constraints: <mark>compliance deadlines, audit cycles, millions of users hitting a service at once</mark>.</p>
<p>I studied Computer Science Engineering (AI &amp; Data Analytics) at Sri Ramachandra Institute of Higher Education &amp; Research in Chennai. Most of what I know beyond that came from shipping at Amazon: closing out compliance risk on <mark>a service used by 50M+ people</mark>, migrating microservices with zero downtime, and teaching an on-device model to read handwriting off a Kindle Scribe.</p>
<p>Outside work, I like building agents and systems that make messy, unstructured problems tractable: claims documents, fraud patterns and clinical healthcare datasets.</p></div>
<div class="rv"><ul class="fx"><li>📍 Chennai, India · open to remote &amp; relocation</li><li>🎓 CS Engineering, AI &amp; Data Analytics</li><li>💼 SDE @ Amazon</li><li>📄 2× published (Springer &amp; IEEE)</li></ul>
<div class="sk"><b>Core languages</b><span>Java, Python, C++, TypeScript, SQL, Bash</span><b>Data &amp; applied ML</b><span>PyTorch, Scikit-learn, multi-agent RAG, SHAP, LiDAR point cloud processing, FastEmbed, NLP</span><b>Cloud &amp; distributed scale</b><span>AWS (Lambda, S3, DynamoDB, EC2), Docker, CI/CD, policy engine, Linux, microservices</span></div></div></div><div class="pri"><div class="prc rv"><span class="pn">PRINCIPLE 01</span><h3>Built to hold up</h3><p>Closed every policy engine risk item across two audit cycles, as the sole contributor.</p><span class="gl">01</span></div><div class="prc rv" style="transition-delay:80ms"><span class="pn">PRINCIPLE 02</span><h3>Change without downtime</h3><p>15+ JDK 8/11 → 17 migrations, each rolled out with zero downtime.</p><span class="gl">02</span></div><div class="prc rv" style="transition-delay:160ms"><span class="pn">PRINCIPLE 03</span><h3>Models you can explain</h3><p>Grad-CAM and SHAP made the fusion model legible, surfacing EGFR, TP63 and NKX2.1.</p><span class="gl">03</span></div></div></div></section>
<section id="skills" class="s" style="padding-top:40px"><div class="wrap"><div class="mono" style="margin-bottom:14px">02 · Toolkit</div><h2 class="t">what I reach for, <em>and where it shipped.</em></h2>
<div id="tk"></div></div></section>
<section id="journey" class="s" style="padding-top:40px"><div class="wrap"><div class="mono" style="margin-bottom:14px">03 · Experience</div><h2 class="t">my career, as a <em>git log</em></h2>
<div class="rib rv" id="rib"></div><div class="glt rv"><span style="color:var(--ink)"><span style="color:var(--accent)">deevna@portfolio</span> ~ $ git log --graph --author="deevna"</span><div class="glf" id="glf"></div></div><div id="glg"></div></div></section>



<section id="projects" class="s" style="padding-top:20px"><div class="wrap"><div class="mono" style="margin-bottom:14px">04 · Projects &amp; research</div><h2 class="t">problem, approach, outcome, <em>what I’d change.</em></h2>
<div class="pf" id="pf"></div><div class="bn" id="pjs"></div></div></section>

<section id="contact" class="s"><div class="wrap"><div class="mono"><span class="dot"></span>Open for full-time roles</div><p class="big">say hello,<br>let’s build something <em>that works.</em></p>
<a class="btn" href="mailto:deevnared@gmail.com">Let’s talk ↗</a> <button class="ib" id="cp2" style="margin-left:14px">copy email</button>
<div class="av rv"><span class="chipx"><span class="dot"></span>Open to full-time roles</span><span class="chipx">🕒 <span id="avt"></span></span><span class="chipx">🌍 Remote &amp; relocation welcome</span></div><form class="cf rv" id="cf" autocomplete="off"><div><label for="cn">Your name</label><input id="cn" name="n" required placeholder="Ada Lovelace"></div><div><label for="ce">Your email</label><input id="ce" name="e" type="email" required placeholder="ada@company.com"></div><div class="full"><label for="cm">What are you building?</label><textarea id="cm" name="m" rows="4" required placeholder="A role, a project, or just a hello…"></textarea></div><div class="full row"><button class="btn" type="submit">Send message ↗</button><span class="mono">opens your mail app, no data stored</span></div></form>
<div class="cg"><div><span class="mono">Email</span><p><a href="mailto:deevnared@gmail.com">deevnared@gmail.com</a></p></div><div><span class="mono">Base location</span><p>Chennai, India<br><span style="color:var(--mute)">Open to remote &amp; relocation</span></p></div><div><span class="mono">Social</span><p><a href="https://linkedin.com/in/deevnareddy">LinkedIn</a> · <a href="https://github.com/deevredd">GitHub</a></p></div></div></div></section>
<div class="gw" id="gw" aria-hidden="true">deevna.</div><div id="kbh"><div class="kc"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><span class="mono">Keyboard shortcuts</span><button class="ib" id="kbx">esc ✕</button></div>
<div class="kr"><span>Command palette</span><span><kbd>⌘</kbd> <kbd>K</kbd></span></div><div class="kr"><span>Jump to section</span><span><kbd>g</kbd> then <kbd>a</kbd> <kbd>s</kbd> <kbd>e</kbd> <kbd>w</kbd> <kbd>c</kbd></span></div><div class="kr"><span>Toggle light / dark</span><kbd>t</kbd></div><div class="kr"><span>Previous / next project</span><span><kbd>←</kbd> <kbd>→</kbd></span></div><div class="kr"><span>This help</span><kbd>?</kbd></div>
<p class="mono" style="margin:14px 0 0;text-transform:none;letter-spacing:.04em">a = about · s = toolkit · e = experience · w = work · c = contact</p></div></div><footer><div class="wrap"><span class="mono">© 2026 Deevna Reddy</span><span class="mono"><button class="ib" id="kbb">? shortcuts</button> <a href="#">↑ back to top</a> · built with a cat’s supervision 🐾</span></div></footer>`;

export default function Home() {
  useEffect(() => {
    const existing = document.getElementById("portfolio-engine");
    if (existing && typeof (window as any).__initPortfolio === "function") {
      (window as any).__initPortfolio();
    } else if (!existing) {
      const script = document.createElement("script");
      script.id = "portfolio-engine";
      script.src = "/portfolio.js";
      script.onload = () => {
        if (typeof (window as any).__initPortfolio === "function") {
          (window as any).__initPortfolio();
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
