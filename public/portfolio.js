(function() {
  function initPortfolio() {
    // Clean up any previously created dynamic elements from previous runs / hot-reloads
    document.querySelectorAll("#up, #sd, #mm, #hb, .acw, .mq.rev, .dvw").forEach(el => el.remove());

    const cat = document.getElementById("cat");
    let pt;
    if (cat) {
      cat.onclick = () => {
        cat.classList.remove("pet");
        void cat.offsetWidth;
        cat.classList.add("pet");
        clearTimeout(pt);
        pt = setTimeout(() => cat.classList.remove("pet"), 1600);
        const p = document.createElement("span");
        p.className = "paw";
        p.textContent = "🐾";
        p.style.left = (20 + Math.random() * 60) + "%";
        p.style.top = "30%";
        cat.appendChild(p);
        setTimeout(() => p.remove(), 1200);
      };
    }

    const pc = document.getElementById("pc"), pct = document.getElementById("pct");
    let jr = null;
    function onS() {
      const r = Math.min(1, scrollY / (document.body.scrollHeight - innerHeight || 1));
      if (pc) pc.style.top = (r * 100) + "%";
      if (pct) pct.textContent = Math.round(r * 100) + "%";
      if (jr && document.getElementById("jr")) jr();
    }
    addEventListener("scroll", onS, { passive: true });

    const $ = id => document.getElementById(id);
    const tg = a => a.map(x => `<span class="tag">${x}</span>`).join("");
    const G = [
      { s: "HEAD", m: "chore: open to full-time roles", o: "Chennai, IN", d: "now", ln: 0, ty: "hx", g: "*", bd: [["HEAD → main", ""]], st: [], b: ["+ looking for full-time backend and applied ML roles", "+ remote and relocation welcome"], lk: ["mailto:deevnared@gmail.com", "say hello ↗"] },
      { s: "e5c1b07", m: "Merge branch ’research’ into main", o: "IEEE ICCDS 2025 · Springer Nature", d: "2025", ln: 0, ty: "mg", g: "research", bd: [["merge", "k"]], st: [["2×", "papers published"]], b: ["+ IEEE ICCDS 2025 (first author)", "+ Springer Nature"] },
      { s: "9d3a41c", m: "feat: DSAR compliance onboarding (50M+ users)", o: "Amazon · Alexa Calendar · SDE", d: "2025 → Mar 2026", ln: 0, g: "amazon", st: [["−70%", "manual DSAR ops"], ["15+", "zero-downtime migrations"], ["+20%", "runtime performance"]], b: ["+ DSAR compliance onboarding, end to end, for 50M+ users", "~ manual data access and deletion processing time −70%", "+ closed every policy engine risk item, sole contributor, across two audit cycles", "~ 15+ JDK 8/11 → 17 migrations with zero-downtime rollouts"] },
      { s: "3b8e7f2", m: "docs: first-author paper, IEEE ICCDS 2025", o: "Genomic & imaging biomarker analysis", d: "2025", ln: 1, g: "research", bd: [["research", "o"]], st: [["98.32%", "fusion accuracy"], ["0.99", "AUC"]], b: ["+ dual-branch model: DenseNet121 + Grad-CAM on CT, Random Forest + SHAP on RNA-seq", "~ 98.32% accuracy vs 90.15% imaging-only and 95.47% genomics-only", "+ SHAP flagged EGFR, TP63 and NKX2.1, consistent with known cancer biology"], lk: ["https://ieeexplore.ieee.org/document/11209732", "view paper ↗"] },
      { s: "c71d09a", m: "feat: ethnic disparities in toddler ASD screening", o: "Springer Nature chapter", d: "2025", ln: 1, g: "research", bd: [["research", "o"]], st: [], b: ["+ statistical analysis and ML evaluation of screening disparities across ethnic cohorts", "+ benchmarks for more equitable pediatric diagnostic frameworks"], lk: ["https://link.springer.com/chapter/10.1007/978-3-032-14908-4_37", "view paper ↗"] },
      { s: "4fa2c18", m: "perf: stroke straightening → native C++", o: "Amazon · Kindle Scribe · SDE Intern", d: "Jan 2025", ln: 0, g: "amazon", bd: [["branch point", "o"]], st: [["+25%", "detection robustness"]], b: ["+ Python ETL: raw stroke data → per-word feature dataset for handwriting recognition", "+ stroke straightening model ported to native C++, dependency-free, on-device", "~ baseline detection robustness +25%"] },
      { s: "a90e6d4", m: "feat: aerial point-cloud pipeline", o: "REUDE Technologies · Data & Image Analyst", d: "Sep 2023 – Apr 2024", ln: 0, g: "early", st: [["+20%", "spatial accuracy"]], b: ["+ drone-based aerial data acquisition", "+ point cloud processing", "~ spatial data accuracy +20% over raw sensor output"] },
      { s: "68c3b5e", m: "feat: HR chatbot with NLP + RAG", o: "Agilisium Consulting · AI & ML Intern", d: "Aug – Oct 2023", ln: 0, g: "early", st: [["−40%", "HR query workload"]], b: ["+ HR chatbot using NLP and RAG over internal knowledge sources", "~ manual HR query workload −40%"] },
      { s: "0000001", m: "Initial commit: B.Tech, CSE (AI & Data Analytics)", o: "Sri Ramachandra Institute · Chennai", d: "2021", ln: 0, g: "early", st: [], b: ["+ where the backend and ML obsession started"] }
    ];
    const n = G.length;
    const gr = (r, i) => {
      let h = `<i style="left:17px;top:${i === 0 ? 46 : 0}px;${i === n - 1 ? "height:46px" : "bottom:0"}"></i>`;
      if (i === 1) h += `<svg style="top:46px" viewBox="0 0 80 46"><path d="M18 0 C18 24 58 22 58 46"/></svg><i style="left:57px;top:92px;bottom:0"></i>`;
      if (i >= 2 && i <= 4) h += `<i style="left:57px;top:0;bottom:0"></i>`;
      if (i === 5) h += `<svg style="top:0" viewBox="0 0 80 46"><path d="M58 0 C58 24 18 22 18 46"/></svg>`;
      return h + `<b class="${r.ty || (r.ln ? "br" : "")}" style="left:${r.ln ? 52 : 12}px"></b>`;
    };

    const glgEl = $("glg");
    if (glgEl) {
      glgEl.innerHTML = G.map((r, i) => `<div class="glr rv${i === 2 ? " on" : ""}" data-g="${r.g}" style="transition-delay:${i * 50}ms"><div class="gcol">${gr(r, i)}</div><div class="glc"><div class="mm"><span class="sh">${r.s}</span>${r.m}${(r.bd || []).map(b => `<span class="bg2 ${b[1]}">${b[0]}</span>`).join("")}</div><div class="mt2">${r.o} · ${r.d}</div>${r.st.map(x => `<span class="gsc">${x[0]}<small>${x[1]}</small></span>`).join("")}<div class="glb"><div><div class="diff"><div class="h2">commit ${r.s === "HEAD" ? "e7f02a9" : r.s}<br>Author: deevna &lt;deevnared@gmail.com&gt;<br>Date: ${r.d}</div><br>${r.b.map(l => `<div class="${l[0] === "+" ? "pl" : "md"}">${l}</div>`).join("")}${r.lk ? `<br><a href="${r.lk[0]}">${r.lk[1]}</a>` : ""}</div></div></div></div></div>`).join("");
    }
    const rows = [...document.querySelectorAll(".glr")];
    rows.forEach(r => r.onclick = e => { if (!e.target.closest("a") && !e.target.closest(".diff")) r.classList.toggle("on"); });
    const F = [["all", "*"], ["amazon", "amazon"], ["research", "research"], ["early-career", "early"]];
    const glfEl = $("glf");
    if (glfEl) {
      glfEl.innerHTML = F.map((f, i) => `<button class="ib${i ? "" : " on"}" data-f="${f[1]}">${f[0]}</button>`).join("") + `<button class="ib" id="gx">expand all</button>`;
      glfEl.querySelectorAll("[data-f]").forEach(b => b.onclick = () => {
        glfEl.querySelectorAll("[data-f]").forEach(x => x.classList.toggle("on", x === b));
        rows.forEach(r => r.classList.toggle("dim", b.dataset.f !== "*" && r.dataset.g !== "*" && r.dataset.g !== b.dataset.f));
      });
      const gxEl = $("gx");
      if (gxEl) {
        gxEl.onclick = () => {
          const o = rows.some(r => !r.classList.contains("on"));
          rows.forEach(r => r.classList.toggle("on", o));
          gxEl.textContent = o ? "collapse all" : "expand all";
        };
      }
    }

    const P = [
      ["Claims Agent", "AI / ML · Multi-agent", "Turning messy claim documents into structured, auto-routed decisions.", "80%", "auto-triaged", "Claims teams drown in unstructured PDFs, scans and emails full of policyholder PII, and every claim needed a human just to redact and read it.", "An agent pipeline (ingest & mask PII → extract → validate → route → queue) pulls 15+ structured fields, then runs an LLM validation pass so low-confidence extractions never slip through silently.", "80% of first-pass triage now runs without a human, with full PII compliance. The other 20% are flagged with the exact field that failed validation.", "The validation catches malformed fields, not ambiguous ones. I’d add a cross-field consistency check before scaling past pilot volume.", ["Python", "LLMs", "RAG", "Multi-agent", "PII redaction"], "https://github.com/deevredd/Modulus-AI", "View source ↗"],
      ["TradeShield", "Fintech · Fraud detection", "Catching fraud patterns a logistic regression would miss.", "+25%", "PR-AUC gain", "A logistic regression baseline caught obvious fraud but missed small, spaced-out, plausible-looking transactions that only look wrong in aggregate.", "Pattern recognition on transaction features, layered with a behavioral anomaly model that scores sequences. Served via FastAPI so a flagged transaction hits the risk dashboard within a second.", "Precision-recall AUC improved 25% over the baseline, with the biggest gains on slow-burn fraud.", "New accounts get scored on thinner evidence. I’d add a separate cold-start tier instead of forcing them through the same model.", ["Python", "Scikit-learn", "FastAPI", "Next.js"], "https://github.com/deevredd/Banking-Fraud-Detection", "View source ↗"],
      ["Genomic & Imaging Biomarker Analysis", "Published · IEEE ICCDS 2025", "First-author paper on explainable lung cancer classification.", "98.32%", "fusion accuracy", "Lung cancer AI tools usually use one data type and give a bare label. Clinicians can’t act on a black-box call, especially on small, ambiguous nodules.", "A dual-branch model: DenseNet121 + Grad-CAM reads CT scans (LIDC-IDRI), a Random Forest + SHAP branch reads TCGA RNA-seq gene expression. Late fusion predicts LUAD, LUSC or Normal.", "98.32% accuracy and 0.99 AUC, beating imaging-only (90.15%) and genomics-only (95.47%). SHAP flagged EGFR, TP63 and NKX2.1, consistent with known cancer biology.", "Validation was retrospective on public datasets. I’d want prospective validation with a hospital partner before trusting this near a real diagnosis.", ["DenseNet121", "Grad-CAM", "Random Forest", "SHAP"], "https://ieeexplore.ieee.org/document/11209732", "View paper ↗"],
      ["Ethnic Disparities in ASD Analysis", "Published · Springer Nature", "Statistical and ML evaluation of ethnic disparities in toddler ASD screening.", "2×", "papers published", "Traditional ASD screening models often underrepresent minority ethnic cohorts, delaying diagnoses and creating disparate screening outcomes.", "Evaluated demographic and behavioral screening indicators across ethnic cohorts using hypothesis testing and supervised classification to measure disparate impact.", "Quantified significant variance in screening markers across ethnic groups, establishing benchmarks for more equitable pediatric diagnostic frameworks.", "I’d expand the longitudinal cohort data to track post-intervention outcomes across multiple hospital networks over several years.", ["Statistical modeling", "Machine learning", "Healthcare data"], "https://link.springer.com/chapter/10.1007/978-3-032-14908-4_37", "View paper ↗"]
    ];
    const bars = (t, a) => `<b>${t}</b>` + a.map(x => `<div class="br"><span>${x[0]}</span><i><s style="--w:${x[1]}%"></s></i><span>${x[2]}</span></div>`).join("");
    const D = [
      `<b>LIVE EXTRACTION TEST</b><ul class="stp" id="stp">${["Ingest raw PDF", "Extract 15 structured fields", "LLM validation gate", "Auto-triage queue"].map(x => `<li>${x}</li>`).join("")}</ul><button class="ib" id="run">⚡ Run live extraction</button>`,
      bars("PRECISION-RECALL AUC · RELATIVE", [["Baseline (logistic reg.)", 80, "1.0×"], ["TradeShield", 100, "+25%"]]),
      bars("TOP SHAP FEATURES", [["EGFR", 94, "94%"], ["TP63", 81, "81%"], ["NKX2.1", 73, "73%"], ["Grad-CAM nodule region", 68, "68%"]]),
      bars("SCREENING DISPARITY METRICS", [["Q-CHAT-10 scoring variance", 88, "88%"], ["Demographic disparity ratio", 76, "76%"], ["Speech & social milestone delay", 82, "82%"], ["Pediatric referral age gap", 71, "71%"]])
    ];

    const pjsEl = $("pjs");
    if (pjsEl) {
      pjsEl.innerHTML = P.map((p, i) => `<button class="pr rv" data-i="${i}" style="transition-delay:${i * 60}ms"><span class="n">0${i + 1}</span><div><h3>${p[0]}</h3><p>${p[1]} · ${p[2]}</p></div><div class="pm">${p[3]}<small>${p[4].toUpperCase()}</small></div><span class="ar">↗</span></button>`).join("");
    }

    let pi = 0;
    const dr = $("dr"), ov = $("ov"), dc = $("dc");
    function openP(i) {
      pi = (i + P.length) % P.length;
      const p = P[pi];
      if ($("dk")) $("dk").textContent = `0${pi + 1} / 0${P.length} · ${p[1]}`;
      if (dc) {
        dc.classList.remove("go");
        dc.innerHTML = `<h3 class="dt2">${p[0]}</h3><div class="dm">${p[3]}<small>${p[4].toUpperCase()}</small></div><p class="tg2">${p[2]}</p><div class="g4"><div><b>PROBLEM</b><p>${p[5]}</p></div><div><b>APPROACH</b><p>${p[6]}</p></div><div><b>OUTCOME</b><p>${p[7]}</p></div><div><b>WHAT I’D CHANGE</b><p>${p[8]}</p></div></div><div class="demo">${D[pi]}</div><div class="ft2">${tg(p[9])}<a href="${p[10]}">${p[11]}</a></div>`;
        dc.scrollTop = 0;
      }
      if (dr) dr.classList.add("o");
      if (ov) ov.classList.add("o");
      document.body.style.overflow = "hidden";
      if (pi === 0 && $("run")) {
        $("run").onclick = () => {
          const l = [...($("stp") ? $("stp").children : [])];
          l.forEach(x => x.classList.remove("d"));
          l.forEach((x, idx) => setTimeout(() => x.classList.add("d"), (idx + 1) * 700));
        };
      }
      requestAnimationFrame(() => requestAnimationFrame(() => { if (dc) dc.classList.add("go"); }));
    }

    const cl = () => {
      if (dr) dr.classList.remove("o");
      if (ov) ov.classList.remove("o");
      document.body.style.overflow = "";
    };

    if (pjsEl) {
      pjsEl.querySelectorAll(".pr").forEach(b => b.onclick = () => openP(+b.dataset.i));
    }
    if ($("dx")) $("dx").onclick = cl;
    if (ov) ov.onclick = cl;
    if ($("dp")) $("dp").onclick = () => openP(pi - 1);
    if ($("dn2")) $("dn2").onclick = () => openP(pi + 1);

    addEventListener("keydown", e => {
      if (!dr || !dr.classList.contains("o")) return;
      if (e.key === "Escape") cl();
      if (e.key === "ArrowRight") openP(pi + 1);
      if (e.key === "ArrowLeft") openP(pi - 1);
    });

    const SK = ["Python", "Java", "C++", "TypeScript", "AWS", "PyTorch", "Multi-agent RAG", "FastAPI", "Microservices", "SHAP", "LiDAR", "CI/CD"];
    if ($("tr")) $("tr").innerHTML = [...SK, ...SK].map(x => `<span>${x}</span>`).join("");

    const T = () => {
      const d = document.documentElement;
      const c = d.dataset.theme || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
      d.dataset.theme = c === "dark" ? "light" : "dark";
    };
    const toast = m => {
      const t = $("toast");
      if (!t) return;
      t.textContent = m;
      t.classList.add("o");
      setTimeout(() => t.classList.remove("o"), 1800);
    };
    const CE = () => {
      navigator.clipboard && navigator.clipboard.writeText("deevnared@gmail.com");
      toast("email copied ✓");
    };

    const CM = [
      ["Go to about", "#about"],
      ["Go to experience", "#journey"],
      ["Go to projects & research", "#projects"],
      ["Say hello", "#contact"],
      ["Open GitHub", "https://github.com/deevredd"],
      ["Open LinkedIn", "https://linkedin.com/in/deevnareddy"],
      ["Copy email", CE],
      ["Toggle light / dark", T]
    ];
    let ci = 0, fl = CM;
    const rl = () => {
      if ($("cl")) {
        $("cl").innerHTML = fl.map((c, i) => `<li class="${i === ci ? "on" : ""}" data-i="${i}">${c[0]}<span>${typeof c[1] === "function" ? "run" : c[1][0] === "#" ? "jump" : "open"}</span></li>`).join("");
      }
    };
    const go = c => {
      if ($("cmd")) $("cmd").classList.remove("o");
      if (typeof c[1] === "function") c[1]();
      else if (c[1][0] === "#") location.hash = c[1];
      else open(c[1], "_blank");
    };
    const op = () => {
      if ($("cmd")) $("cmd").classList.add("o");
      if ($("ci")) $("ci").value = "";
      fl = CM;
      ci = 0;
      rl();
      if ($("ci")) $("ci").focus();
    };

    if ($("kb")) $("kb").onclick = op;
    if ($("th")) $("th").onclick = T;
    if ($("cp2")) $("cp2").onclick = CE;
    if ($("ci")) {
      $("ci").oninput = e => {
        const q = e.target.value.toLowerCase();
        fl = CM.filter(c => c[0].toLowerCase().includes(q));
        ci = 0;
        rl();
      };
    }
    if ($("cl")) {
      $("cl").onclick = e => {
        const li = e.target.closest("li");
        if (li) go(fl[+li.dataset.i]);
      };
    }
    if ($("cmd")) {
      $("cmd").onclick = e => {
        if (e.target.id === "cmd") $("cmd").classList.remove("o");
      };
    }

    addEventListener("keydown", e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        op();
        return;
      }
      if (!$("cmd") || !$("cmd").classList.contains("o")) return;
      if (e.key === "Escape") $("cmd").classList.remove("o");
      else if (e.key === "ArrowDown") {
        ci = Math.min(fl.length - 1, ci + 1);
        rl();
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        ci = Math.max(0, ci - 1);
        rl();
        e.preventDefault();
      } else if (e.key === "Enter" && fl[ci]) go(fl[ci]);
    });

    const nv = document.querySelector("nav"), lk = [...document.querySelectorAll(".links a")];
    let ly = 0;
    addEventListener("scroll", () => {
      const y = scrollY;
      if (nv) {
        nv.classList.toggle("hd", y > ly && y > 200);
        nv.classList.toggle("sc", y > 20);
      }
      ly = y;
      let cur = "";
      ["about", "journey", "projects", "contact"].forEach(i => {
        const el = $(i);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4) cur = i;
      });
      lk.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
    }, { passive: true });

    const eyes = [...document.querySelectorAll("#cat .eo circle")];
    addEventListener("pointermove", e => {
      const g = $("glow");
      if (g) {
        g.style.setProperty("--x", e.clientX + "px");
        g.style.setProperty("--y", e.clientY + "px");
      }
      if (cat) {
        const r = cat.getBoundingClientRect(),
          dx = e.clientX - r.left - r.width / 2,
          dy = e.clientY - r.top - r.height / 2,
          l = Math.hypot(dx, dy) || 1,
          k = Math.min(4, l / 60);
        eyes.forEach(c => c.style.transform = `translate(${dx / l * k}px,${dy / l * k}px)`);
      }
    });

    document.querySelectorAll(".btn").forEach(b => {
      b.onpointermove = e => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      };
      b.onpointerleave = () => b.style.transform = "";
    });

    const ck = () => {
      if ($("clk")) $("clk").textContent = "Chennai · " + new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date()) + " IST";
    };
    ck();
    setInterval(ck, 30000);

    const dvp = "M0 12 q27.5 -14 55 0" + " t55 0".repeat(19);
    document.querySelectorAll("section.s").forEach(sec => {
      const w = document.createElement("div");
      w.className = "wrap dvw rv";
      w.innerHTML = `<svg class="dv" viewBox="0 0 1100 24" preserveAspectRatio="none"><path d="${dvp}"/></svg>`;
      sec.before(w);
    });
    document.querySelectorAll("h2.t").forEach(h => h.classList.add("rv"));

    const cu = $("cur");
    let tx = 0, ty = 0, cx = 0, cy = 0;
    addEventListener("pointermove", e => {
      tx = e.clientX;
      ty = e.clientY;
      if (cu) {
        cu.classList.add("v");
        cu.classList.toggle("h", !!e.target.closest("a,button,.glr,.pr,.catw"));
      }
    });
    (function lp() {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      if (cu) cu.style.transform = `translate(${cx}px,${cy}px)`;
      requestAnimationFrame(lp);
    })();

    const io = new IntersectionObserver(es => es.forEach(x => {
      if (!x.isIntersecting) return;
      x.target.classList.add("in");
      io.unobserve(x.target);
      x.target.querySelectorAll("[data-to]").forEach(c => {
        const to = +c.dataset.to, t0 = performance.now();
        (function f(t) {
          const p = Math.min((t - t0) / 1400, 1);
          c.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(f);
        })(t0);
      });
    }), { threshold: 0.12 });
    document.querySelectorAll(".rv").forEach(el => io.observe(el));

    /* ===== v2 enrichments ===== */
    const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;

    /* preloader */
    (function () {
      const p = $("pre"), n = $("pn");
      if (!p) return;
      const t0 = performance.now();
      document.body.style.overflow = "hidden";
      const done = () => {
        p.classList.add("x");
        document.body.style.overflow = "";
        setTimeout(() => p.remove(), 1000);
      };
      (function f(t) {
        const k = Math.min((t - t0) / 900, 1);
        if (n) n.textContent = Math.round(k * 100);
        const sBar = p.querySelector("s");
        if (sBar) sBar.style.transform = "scaleX(" + k + ")";
        if (k < 1) requestAnimationFrame(f);
        else setTimeout(done, 150);
      })(t0);
      setTimeout(done, 3000);
    })();

    /* progress bar, back-to-top, parallax, side dots */
    const prog = $("prog"), up = document.createElement("button");
    up.id = "up";
    up.textContent = "↑";
    up.title = "Back to top";
    up.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
    document.body.appendChild(up);

    const SD = [["about", "about"], ["skills", "toolkit"], ["journey", "experience"], ["projects", "work"], ["contact", "contact"]];
    const sd = document.createElement("div");
    sd.id = "sd";
    sd.innerHTML = SD.map(s => `<a href="#${s[0]}" data-s="${s[0]}"><span>${s[1]}</span></a>`).join("");
    document.body.appendChild(sd);

    const wordEl = document.querySelector(".word");
    function sc() {
      const max = document.body.scrollHeight - innerHeight || 1;
      if (prog) prog.style.transform = "scaleX(" + Math.min(1, scrollY / max) + ")";
      up.classList.toggle("v", scrollY > 800);
      if (!RM && wordEl && scrollY < 1000) wordEl.style.transform = "translateX(" + (-scrollY * 0.12) + "px)";
      let cur = "";
      SD.forEach(s => {
        const e = $(s[0]);
        if (e && e.getBoundingClientRect().top < innerHeight * 0.45) cur = s[0];
      });
      sd.querySelectorAll("a").forEach(a => a.classList.toggle("on", a.dataset.s === cur));
    }
    addEventListener("scroll", sc, { passive: true });
    sc();

    /* hero letters */
    if (wordEl && !wordEl.querySelector(".l")) {
      const b = wordEl.querySelector("b");
      wordEl.textContent = "";
      "deevna".split("").forEach(ch => {
        const s = document.createElement("span");
        s.className = "l";
        s.textContent = ch;
        wordEl.appendChild(s);
      });
      if (b) wordEl.appendChild(b);
      else {
        const newB = document.createElement("b");
        wordEl.appendChild(newB);
      }
    }

    /* typed roles */
    (function () {
      const T_el = $("typed");
      if (!T_el) return;
      const R = ["backend systems at scale", "compliance infrastructure", "on-device ML", "multi-agent RAG pipelines", "explainable healthcare AI"];
      if (RM) {
        T_el.textContent = R[0];
        return;
      }
      let i = 0, j = 0, del = false;
      (function tick() {
        const w = R[i];
        j += del ? -1 : 1;
        T_el.textContent = w.slice(0, j);
        let d = del ? 28 : 60;
        if (!del && j === w.length) {
          del = true;
          d = 1600;
        } else if (del && j === 0) {
          del = false;
          i = (i + 1) % R.length;
          d = 350;
        }
        setTimeout(tick, d);
      })();
    })();

    /* particles */
    let fxOn = !RM;
    (function () {
      const cv = $("fx");
      if (!cv) return;
      const c = cv.getContext("2d");
      let W, H, P_pts = [], mx = -999, my = -999, col = "#f0553a", mu = "#77746d", f = 0;
      const rs = () => {
        const d = Math.min(devicePixelRatio || 1, 2);
        W = innerWidth;
        H = innerHeight;
        cv.width = W * d;
        cv.height = H * d;
        c.setTransform(d, 0, 0, d, 0, 0);
        const N = Math.round(Math.min(70, W * H / 20000));
        P_pts = Array.from({ length: N }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.8
        }));
      };
      rs();
      addEventListener("resize", rs);
      addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; });
      (function drLoop() {
        requestAnimationFrame(drLoop);
        if (!fxOn || document.hidden) return;
        if (f++ % 90 === 0) {
          const s = getComputedStyle(document.documentElement);
          col = s.getPropertyValue("--accent").trim() || col;
          mu = s.getPropertyValue("--mute").trim() || mu;
        }
        c.clearRect(0, 0, W, H);
        for (let i = 0; i < P_pts.length; i++) {
          const p = P_pts[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          const dx = mx - p.x, dy = my - p.y, dm = Math.hypot(dx, dy);
          if (dm < 150 && dm > 1) {
            p.x -= dx / dm * 0.6;
            p.y -= dy / dm * 0.6;
            c.globalAlpha = (1 - dm / 150) * 0.5;
            c.strokeStyle = col;
            c.beginPath();
            c.moveTo(p.x, p.y);
            c.lineTo(mx, my);
            c.stroke();
          }
          c.globalAlpha = 0.55;
          c.fillStyle = dm < 150 ? col : mu;
          c.beginPath();
          c.arc(p.x, p.y, p.r, 0, 6.283);
          c.fill();
          for (let k = i + 1; k < P_pts.length; k++) {
            const q = P_pts[k], d = Math.hypot(p.x - q.x, p.y - q.y);
            if (d < 120) {
              c.globalAlpha = (1 - d / 120) * 0.22;
              c.strokeStyle = mu;
              c.beginPath();
              c.moveTo(p.x, p.y);
              c.lineTo(q.x, q.y);
              c.stroke();
            }
          }
        }
        c.globalAlpha = 1;
      })();
    })();

    /* tilt + spotlight */
    function tilt(el, max) {
      max = max || 7;
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", x * 100 + "%");
        el.style.setProperty("--my", y * 100 + "%");
        if (!RM && el.classList.contains("in")) el.style.transform = "perspective(800px) rotateX(" + ((0.5 - y) * max) + "deg) rotateY(" + ((x - 0.5) * max) + "deg) translateY(-4px)";
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    }
    document.querySelectorAll(".stat").forEach(s => { s.classList.add("t3d"); tilt(s, 6); });
    document.querySelectorAll(".pr").forEach(b => b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--mx", (e.clientX - r.left) + "px");
      b.style.setProperty("--my", (e.clientY - r.top) + "px");
    }));

    /* second marquee */
    const mq = document.querySelector(".mq");
    if (mq && !document.querySelector(".mq.rev")) {
      const m2 = document.createElement("div");
      m2.className = "mq rev";
      const IN = ["Alexa Calendar", "Kindle Scribe", "IEEE ICCDS 2025", "Springer Nature", "DSAR compliance", "JDK 17", "Policy engine", "Genomics", "Fraud detection", "Claims automation"];
      m2.innerHTML = "<div>" + [...IN, ...IN].map(x => `<span>${x}</span>`).join("") + "</div>";
      mq.after(m2);
    }

    /* ===== v3: toolkit + work showcase ===== */
    const CX = { AMZ: ["Alexa Calendar", "#journey"], KND: ["Kindle Scribe", "#journey"], RES: ["Research", "P2"], CLM: ["Claims Agent", "P0"], TSH: ["TradeShield", "P1"], REU: ["REUDE", "#journey"], AGI: ["Agilisium", "#journey"] };
    const GR = { lang: { n: "Languages", c: "#f0553a", b: "What I write production code in." }, ml: { n: "Applied ML", c: "#19b97a", b: "From research models to agent pipelines." }, cloud: { n: "Cloud & scale", c: "#4c8bf5", b: "Keeping services up while they change." } };
    const SKL = [
      ["lang", "Java", "JDK 8/11 → 17 migrations and policy engine work on Alexa Calendar at Amazon.", ["AMZ"]],
      ["lang", "Python", "ETL for Kindle Scribe handwriting data, ML research, the claims agent and fraud models.", ["KND", "CLM", "TSH", "RES"]],
      ["lang", "C++", "A dependency-free, on-device stroke straightening model on Kindle Scribe.", ["KND"]],
      ["lang", "TypeScript", "Typed front-end and tooling work, alongside the Next.js stack in TradeShield.", ["TSH"]],
      ["lang", "SQL", "An everyday data language behind backend and analytics work.", []],
      ["lang", "Bash", "Linux automation and workflow glue.", []],
      ["ml", "PyTorch", "Deep learning for the CT imaging branch of the biomarker paper.", ["RES"]],
      ["ml", "Scikit-learn", "Random Forest branches in the paper and the TradeShield fraud model.", ["RES", "TSH"]],
      ["ml", "Multi-agent RAG", "The Claims Agent pipeline, plus the HR chatbot at Agilisium.", ["CLM", "AGI"]],
      ["ml", "SHAP", "Explainability that surfaced EGFR, TP63 and NKX2.1 in the IEEE paper.", ["RES"]],
      ["ml", "LiDAR & point clouds", "Drone-based aerial data pipeline at REUDE Technologies.", ["REU"]],
      ["ml", "FastEmbed & NLP", "Retrieval and language work behind chatbot and document tasks.", ["AGI", "CLM"]],
      ["cloud", "AWS", "Lambda, S3, DynamoDB and EC2 behind production services.", ["AMZ"]],
      ["cloud", "Microservices", "15+ zero-downtime rollouts across service upgrades.", ["AMZ"]],
      ["cloud", "Policy engine", "Closed every risk item as sole contributor across two audit cycles.", ["AMZ"]],
      ["cloud", "Docker & CI/CD", "Repeatable builds and safe, staged releases.", ["AMZ"]],
      ["cloud", "Linux", "The day-to-day environment for services and tooling.", []]
    ];

    const tk = $("tk");
    if (tk) {
      tk.innerHTML = `
      <div class="tk-grid">
        <div class="stack-card has-selection" id="stackCard">
          <div class="depth-ruler">
            <span class="ruler-lbl">CLIENT / UI</span>
            <div class="ruler-track"></div>
            <div class="ruler-pip" id="rulerPip" style="top: 90%;"></div>
            <span class="ruler-lbl">BARE METAL / CLOUD</span>
          </div>

          <div class="iso-box" id="isoBox">
            <div class="iso-parallax-node" id="isoParallax">
              <svg class="iso-svg" viewBox="0 0 280 400" id="isoSvg">
                <defs>
                  <linearGradient id="smoothActiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fff5f2"/>
                    <stop offset="100%" stop-color="#fae2db"/>
                  </linearGradient>
                </defs>
                <polygon class="floor-shadow" points="140,325 250,365 140,405 30,365"/>

                <!-- SLAB 1 (Top): Applications -->
                <g class="iso-slab" id="slab-1">
                  <polygon class="slab-left" points="30,65 140,105 140,121 30,81"/>
                  <polygon class="slab-right" points="140,105 250,65 250,81 140,121"/>
                  <polygon class="slab-top" points="140,25 250,65 140,105 30,65"/>
                </g>

                <!-- SLAB 2: AI Layer -->
                <g class="iso-slab" id="slab-2">
                  <polygon class="slab-left" points="30,125 140,165 140,181 30,141"/>
                  <polygon class="slab-right" points="140,165 250,125 250,141 140,181"/>
                  <polygon class="slab-top" points="140,85 250,125 140,165 30,125"/>
                </g>

                <!-- SLAB 3: Backend Services -->
                <g class="iso-slab" id="slab-3">
                  <polygon class="slab-left" points="30,185 140,225 140,241 30,201"/>
                  <polygon class="slab-right" points="140,225 250,185 250,201 140,241"/>
                  <polygon class="slab-top" points="140,145 250,185 140,225 30,185"/>
                </g>

                <!-- SLAB 4: Data Layer -->
                <g class="iso-slab" id="slab-4">
                  <polygon class="slab-left" points="30,245 140,285 140,301 30,261"/>
                  <polygon class="slab-right" points="140,285 250,245 250,261 140,301"/>
                  <polygon class="slab-top" points="140,205 250,245 140,285 30,245"/>
                </g>

                <!-- SLAB 5: Infrastructure -->
                <g class="iso-slab active" id="slab-5">
                  <polygon class="slab-left" points="30,305 140,345 140,361 30,321"/>
                  <polygon class="slab-right" points="140,345 250,305 250,321 140,361"/>
                  <polygon class="slab-top" points="140,265 250,305 140,345 30,305"/>
                </g>

                <!-- Connector Rays -->
                <line class="ray-line" id="ray-1" x1="250" y1="65" x2="280" y2="65"/>
                <line class="ray-line" id="ray-2" x1="250" y1="125" x2="280" y2="125"/>
                <line class="ray-line" id="ray-3" x1="250" y1="185" x2="280" y2="185"/>
                <line class="ray-line" id="ray-4" x1="250" y1="245" x2="280" y2="245"/>
                <line class="ray-line active" id="ray-5" x1="250" y1="305" x2="280" y2="305"/>
              </svg>
            </div>
          </div>

          <div class="strata-list">
            <button class="strata-row" id="row-1">
              <span class="strata-dot"></span>
              <div class="strata-text">
                <h4>Applications</h4>
                <span>(Products &amp; Services)</span>
              </div>
              <span class="strata-key">1</span>
            </button>
            <button class="strata-row" id="row-2">
              <span class="strata-dot"></span>
              <div class="strata-text">
                <h4>AI Layer</h4>
                <span>(RAG · ML Models)</span>
              </div>
              <span class="strata-key">2</span>
            </button>
            <button class="strata-row" id="row-3">
              <span class="strata-dot"></span>
              <div class="strata-text">
                <h4>Backend Services</h4>
                <span>(Microservices)</span>
              </div>
              <span class="strata-key">3</span>
            </button>
            <button class="strata-row" id="row-4">
              <span class="strata-dot"></span>
              <div class="strata-text">
                <h4>Data Layer</h4>
                <span>(ETL · Databases)</span>
              </div>
              <span class="strata-key">4</span>
            </button>
            <button class="strata-row active" id="row-5">
              <span class="strata-dot"></span>
              <div class="strata-text">
                <h4>Infrastructure</h4>
                <span>(AWS · Docker)</span>
              </div>
              <span class="strata-key">5</span>
            </button>
          </div>
        </div>

        <div class="inspector-column">
          <div class="cat-bubble" id="catBubble">purr… 🐾</div>
          <div class="peeking-cat-box" id="peekingCat">
            <svg viewBox="0 0 160 52" fill="none">
              <path d="M 32 14 L 22 6" class="cat-alert-spark"/>
              <path d="M 38 8 L 36 0" class="cat-alert-spark"/>
              <path d="M 46 12 L 52 4" class="cat-alert-spark"/>
              <path d="M 2 48 L 158 48" class="cat-ink" style="stroke-width:1.5; stroke:var(--line);"/>
              <path d="M 44 48 C 42 34, 45 20, 52 16 C 55 14, 60 12, 64 18 C 76 16, 94 16, 106 18 C 110 12, 115 14, 118 16 C 125 20, 128 34, 126 48 Z" class="cat-paper-fill cat-ink" stroke-width="1.8"/>
              <path d="M 54 18 L 60 24" class="cat-ink" style="stroke-width:1.4"/>
              <path d="M 116 18 L 110 24" class="cat-ink" style="stroke-width:1.4"/>
              <g id="leftEyeGroup">
                <circle cx="74" cy="30" r="4" fill="none" stroke="var(--ink)" stroke-width="1"/>
                <circle class="cat-eye-pupil" id="leftPupil" cx="74" cy="30" r="2.2"/>
              </g>
              <g id="rightEyeGroup">
                <circle cx="96" cy="30" r="4" fill="none" stroke="var(--ink)" stroke-width="1"/>
                <circle class="cat-eye-pupil" id="rightPupil" cx="96" cy="30" r="2.2"/>
              </g>
              <path d="M 85 33 L 85 35 M 82 37 Q 85 39 88 37" class="cat-ink" style="stroke-width:1.5"/>
              <path d="M 52 48 C 52 42, 60 42, 60 48" class="cat-ink cat-paper-fill" style="stroke-width:1.8"/>
              <path d="M 110 48 C 110 42, 118 42, 118 48" class="cat-ink cat-paper-fill" style="stroke-width:1.8"/>
            </svg>
          </div>

          <div class="inspector-card" id="inspCard">
            <div class="insp-bar">
              <div class="insp-status">
                <span class="status-pip"></span>
                <span>INSPECTOR</span>
              </div>
              <div class="insp-tech-hint">
                <span>&gt; explore tech</span>
                <kbd>⌘K</kbd>
              </div>
            </div>

            <div class="insp-lead-row">
              <h3 class="insp-heading" id="leadTitle">AWS</h3>
              <div class="insp-logo-frame" id="leadLogo"></div>
            </div>

            <p class="insp-summary" id="leadSummary"></p>
            <div class="insp-pills-row" id="pillsRow"></div>

            <div class="insp-outcome-area">
              <span class="outcome-label">USED FOR</span>
              <p class="outcome-desc" id="outcomeDesc"></p>
              <span class="outcome-callout" id="outcomeCallout"></span>
            </div>

            <div class="insp-bottom-bar">
              <a href="#journey" class="action-jump" id="actionJump">
                <span id="actionLabel">→ Explore Amazon experience ↗</span>
              </a>
              <span class="telemetry-chip" id="specTag">VERIFIED PRODUCTION</span>
            </div>
          </div>
        </div>
      </div>`;

      const strataData = {
        1: {
          name: "Applications",
          rulerPos: "10%",
          tools: {
            "Next.js": {
              title: "Next.js 16",
              desc: "Full-stack React framework with server components and edge rendering for fast, accessible interfaces.",
              usedFor: "Interactive research visualizers, claims triage workflows, and high-performance client portals.",
              metric: "✦ <25ms TTFB & zero client runtime overhead",
              tag: "WEB CORE",
              actionText: "→ Explore project case studies ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="60" height="36" fill="none"><circle cx="30" cy="20" r="18" fill="var(--ink)"/><path d="M22 28V12h3.5l11.5 15.5V12h3v16h-3.5L25 12.5V28h-3z" fill="var(--bg)"/></svg>`
            },
            "TypeScript": {
              title: "TypeScript",
              desc: "Strictly typed contract-driven development across frontends, node microservices, and internal tooling.",
              usedFor: "End-to-end type safety between backend APIs, claims schemas, and interactive state visualizers.",
              metric: "✦ Zero production schema mismatches",
              tag: "STATIC TYPES",
              actionText: "→ Explore codebase structure ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><rect width="56" height="36" rx="6" fill="#3178c6"/><text x="28" y="25" font-family="var(--sans)" font-weight="800" font-size="20" fill="#fff" text-anchor="middle">TS</text></svg>`
            },
            "React UI": {
              title: "React",
              desc: "Component architecture with concurrent rendering, custom hooks, and high-frequency DOM manipulation.",
              usedFor: "Dynamic telemetry inspectors, real-time command palettes (⌘K), and responsive data dashboards.",
              metric: "✦ 60 FPS animation budget",
              tag: "CLIENT RENDER",
              actionText: "→ Explore interactive UI ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><ellipse cx="30" cy="20" rx="16" ry="6" stroke="#00d8ff" stroke-width="1.8" transform="rotate(30 30 20)"/><ellipse cx="30" cy="20" rx="16" ry="6" stroke="#00d8ff" stroke-width="1.8" transform="rotate(90 30 20)"/><ellipse cx="30" cy="20" rx="16" ry="6" stroke="#00d8ff" stroke-width="1.8" transform="rotate(150 30 20)"/><circle cx="30" cy="20" r="2.8" fill="#00d8ff"/></svg>`
            },
            "Tailwind": {
              title: "Tailwind CSS",
              desc: "Design-system engine with compiled CSS variables, custom typography hierarchies, and dark mode tokens.",
              usedFor: "Crafting editorial paper textures, tactile border physics, and fluid typography across viewports.",
              metric: "✦ Micro-bundle utility styling",
              tag: "DESIGN TOKENS",
              actionText: "→ Explore style system ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><path d="M20 22c1.5-3 4-4.5 7.5-4.5 5 0 6.5 3.5 9.5 3.5 2 0 4-1 5-3-1.5 3-4 4.5-7.5 4.5-5 0-6.5-3.5-9.5-3.5-2 0-4 1-5 3zm-6 6c1.5-3 4-4.5 7.5-4.5 5 0 6.5 3.5 9.5 3.5 2 0 4-1 5-3-1.5 3-4 4.5-7.5 4.5-5 0-6.5-3.5-9.5-3.5-2 0-4 1-5 3z" fill="#38bdf8"/></svg>`
            }
          }
        },
        2: {
          name: "AI Layer",
          rulerPos: "30%",
          tools: {
            "PyTorch": {
              title: "PyTorch",
              desc: "Deep learning framework for training multimodal neural networks marrying pathology imagery with patient genomics.",
              usedFor: "Biomarker discovery fusion network (IEEE ICCDS 2025) predicting lung cancer clinical outcomes.",
              metric: "✦ 98.32% validation accuracy",
              tag: "TENSOR ENGINE",
              actionText: "→ Read IEEE 2025 paper ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><path d="M30 6l-11 17h10l-4 11 16-17h-10l4-11z" fill="#f0553a"/><circle cx="17" cy="14" r="2.8" fill="var(--ink)"/><circle cx="43" cy="14" r="2.8" fill="var(--ink)"/></svg>`
            },
            "Multi-Agent RAG": {
              title: "Agentic RAG",
              desc: "Asynchronous multi-agent orchestration for clinical record triage, policy enforcement, and autonomous routing.",
              usedFor: "Automated claim triage reducing manual document review cycles from days to seconds.",
              metric: "✦ 70% reduction in operational lag",
              tag: "AGENT ORCHESTRATION",
              actionText: "→ Explore Claims Agent demo ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><circle cx="20" cy="20" r="8" stroke="var(--ink)" stroke-width="2"/><circle cx="40" cy="12" r="6" stroke="#f0553a" stroke-width="2"/><circle cx="40" cy="28" r="6" stroke="var(--ink)" stroke-width="2"/><line x1="28" y1="18" x2="34" y2="14" stroke="var(--ink)" stroke-width="1.8"/><line x1="28" y1="22" x2="34" y2="26" stroke="var(--ink)" stroke-width="1.8"/></svg>`
            },
            "SHAP & Grad-CAM": {
              title: "Explainable ML",
              desc: "Feature attribution and saliency activation maps validating that deep learning decisions match clinical pathology.",
              usedFor: "Surfaced real biological drivers (EGFR, TP63, NKX2.1) in peer-reviewed oncology research.",
              metric: "✦ Clinically interpretable saliency",
              tag: "INTERPRETABILITY",
              actionText: "→ Explore research insights ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><rect x="12" y="10" width="10" height="20" rx="3" fill="rgba(240,85,58,0.2)" stroke="#f0553a" stroke-width="1.5"/><rect x="25" y="6" width="10" height="24" rx="3" fill="#f0553a"/><rect x="38" y="16" width="10" height="14" rx="3" fill="rgba(240,85,58,0.4)" stroke="#f0553a" stroke-width="1.5"/></svg>`
            },
            "FastEmbed": {
              title: "FastEmbed",
              desc: "Lightweight, highly optimized token embedding generation executing on constrained CPU/edge nodes.",
              usedFor: "Sub-millisecond semantic retrieval pipelines for conversational search and clinical triage.",
              metric: "✦ <5ms vector generation",
              tag: "LOCAL EMBEDDINGS",
              actionText: "→ Explore Agilisium work ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><path d="M12 20h36M24 12l-8 8 8 8M36 12l8 8-8 8" stroke="#f0553a" stroke-width="2.2" stroke-linecap="round"/></svg>`
            }
          }
        },
        3: {
          name: "Backend Services",
          rulerPos: "50%",
          tools: {
            "Java 17": {
              title: "Java JDK 17",
              desc: "Modern LTS language runtime powering high-throughput distributed microservices under strict SLA constraints.",
              usedFor: "Migrated 15+ production services from Java 8/11 with zero downtime across Amazon Alexa Calendar.",
              metric: "✦ 15+ zero-downtime microservice migrations",
              tag: "ENTERPRISE RUNTIME",
              actionText: "→ Explore Amazon Alexa work ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><path d="M22 28c4 3 12 3 16 0M20 22c5 2 15 2 20 0M28 10c-2 4 4 6 2 10" stroke="#f0553a" stroke-width="2.4" stroke-linecap="round"/></svg>`
            },
            "Native C++": {
              title: "Modern C++17",
              desc: "Low-level system programming with zero heap allocations in the hot path for on-device embedded edge devices.",
              usedFor: "Kindle Scribe handwriting stroke trajectory tracking with strict real-time e-ink frame timings.",
              metric: "✦ 0.0ms GC pause & zero jitter",
              tag: "SILICON EDGE",
              actionText: "→ Explore Kindle Scribe work ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><path d="M26 12c-6 0-10 4-10 8s4 8 10 8c4 0 7-2 8-5l-4-2c-.8 2-2.3 3.2-4 3.2-3 0-5.5-2-5.5-4.2s2.5-4.2 5.5-4.2c1.7 0 3.2 1.2 4 3.2l4-2c-1-3-4-5-8-5zm12 5h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2zm8 0h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" fill="#00599c"/></svg>`
            },
            "Microservices": {
              title: "Microservices",
              desc: "Decoupled asynchronous service architectures with circuit-breakers, idempotency gates, and retry budgets.",
              usedFor: "Processing high-volume user calendar events worldwide without single points of failure.",
              metric: "✦ 99.999% system availability",
              tag: "DISTRIBUTED SCALE",
              actionText: "→ Explore architectural patterns ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><rect x="12" y="14" width="10" height="12" rx="2" stroke="var(--ink)" stroke-width="1.8"/><rect x="25" y="8" width="10" height="12" rx="2" stroke="#f0553a" stroke-width="1.8"/><rect x="38" y="18" width="10" height="12" rx="2" stroke="var(--ink)" stroke-width="1.8"/></svg>`
            },
            "Policy Engine": {
              title: "Policy Engine",
              desc: "Automated compliance, DSAR regulatory data processing, and security validation rules.",
              usedFor: "Closed out every open policy and compliance item as sole contributor across two audit cycles.",
              metric: "✦ 100% audit pass rate (Sole SDE)",
              tag: "SECURITY GOVERNANCE",
              actionText: "→ Read compliance case study ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><path d="M30 8l14 5v8c0 10-14 15-14 15S16 31 16 21v-8l14-5z" fill="rgba(240,85,58,0.15)" stroke="#f0553a" stroke-width="2"/><path d="M26 21l3 3 6-6" stroke="#f0553a" stroke-width="2" stroke-linecap="round"/></svg>`
            }
          }
        },
        4: {
          name: "Data Layer",
          rulerPos: "70%",
          tools: {
            "DynamoDB": {
              title: "AWS DynamoDB",
              desc: "Single-digit millisecond key-value and document database with global replication and partition key design.",
              usedFor: "Sub-millisecond retrieval of active user calendars, authentication tokens, and event mappings.",
              metric: "✦ P99 latency < 12ms under peak load",
              tag: "NOSQL KEY-VALUE",
              actionText: "→ Explore database design ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><ellipse cx="30" cy="12" rx="16" ry="5" stroke="#4053d6" stroke-width="2"/><path d="M14 12v16c0 2.8 7.2 5 16 5s16-2.2 16-5V12" stroke="#4053d6" stroke-width="2"/><path d="M14 20c0 2.8 7.2 5 16 5s16-2.2 16-5" stroke="#4053d6" stroke-width="2"/></svg>`
            },
            "S3 Buckets": {
              title: "Amazon S3",
              desc: "Object storage infrastructure with lifecycle expiration policies, encryption-at-rest, and partitioned prefixes.",
              usedFor: "Archival of compliance records, regulatory audit logs, and pathology whole-slide image tiles.",
              metric: "✦ 99.999999999% durability guarantee",
              tag: "OBJECT STORAGE",
              actionText: "→ Explore storage architecture ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><path d="M16 12l14-6 14 6v16l-14 6-14-6V12z" stroke="#e25340" stroke-width="2"/><path d="M16 12l14 6 14-6M30 18v16" stroke="#e25340" stroke-width="1.8"/></svg>`
            },
            "SQL / ETL": {
              title: "SQL & Pipelines",
              desc: "Relational database modeling, query index optimization, and distributed batch processing.",
              usedFor: "High-integrity clinical record joins, genomic feature indexing, and analytical telemetry pipelines.",
              metric: "✦ Zero-data-loss ACID guarantees",
              tag: "RELATIONAL ETL",
              actionText: "→ Explore data models ↗",
              actionLink: "#projects",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><ellipse cx="30" cy="11" rx="16" ry="5" stroke="var(--ink)" stroke-width="2"/><path d="M14 11v8c0 2.8 7.2 5 16 5s16-2.2 16-5v-8M14 19v8c0 2.8 7.2 5 16 5s16-2.2 16-5v-8" stroke="var(--ink)" stroke-width="2"/></svg>`
            },
            "LiDAR Clouds": {
              title: "LiDAR & Spatial",
              desc: "Point cloud registration, spatial KD-Tree segmentation, and coordinate coordinate transforms for drone aerial data.",
              usedFor: "Automated aerial infrastructure mapping and spatial surveying pipeline at REUDE Technologies.",
              metric: "✦ Sub-centimeter point cloud precision",
              tag: "SPATIAL TELEMETRY",
              actionText: "→ Explore REUDE Technologies ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><circle cx="20" cy="14" r="2" fill="#10b981"/><circle cx="30" cy="10" r="2.5" fill="#10b981"/><circle cx="40" cy="16" r="2" fill="#10b981"/><circle cx="16" cy="24" r="2" fill="#10b981"/><circle cx="26" cy="20" r="3" fill="#f0553a"/><circle cx="36" cy="26" r="2" fill="#10b981"/><circle cx="44" cy="22" r="2" fill="#10b981"/></svg>`
            }
          }
        },
        5: {
          name: "Infrastructure",
          rulerPos: "90%",
          tools: {
            "AWS": {
              title: "AWS Cloud",
              desc: "Cloud infrastructure for building scalable, resilient systems under high availability SLAs.",
              usedFor: "Hosting production services, scaling to 50M+ users across Amazon Alexa services.",
              metric: "✦ 50,000,000+ daily active users served",
              tag: "GLOBAL MESH",
              actionText: "→ Explore Amazon experience ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 80 48" width="66" height="40" fill="none"><path d="M22 28c-4.4 0-8-3-8-8s3.6-8 8-8c3 0 5.4 1.4 6.8 3.6l-3.2 2c-.8-1.2-2-1.8-3.6-1.8-2.3 0-4.2 1.8-4.2 4.2s1.9 4.2 4.2 4.2c1.6 0 2.8-.7 3.6-1.8l3.2 2c-1.4 2.2-3.8 3.6-6.8 3.6z" fill="#f0553a"/><path d="M38 12.5h4v15h-4v-1.8c-1.2 1.4-3 2.1-4.8 2.1-4 0-7.2-3.2-7.2-7.6s3.2-7.6 7.2-7.6c1.8 0 3.6.7 4.8 2.1v-2.2zm-4 11.5c2.3 0 4-1.7 4-4s-1.7-4-4-4-4 1.7-4 4 1.7 4 4 4z" fill="var(--ink)"/><path d="M57 12.5l-4 15h-3.6l-2.8-10.4-2.8 10.4H40l-4-15h4.2l2 9.5 2.8-9.5h3.6l2.8 9.5 2-9.5H57z" fill="var(--ink)"/><path d="M12 36c18 8 40 8 56-2" stroke="#f0553a" stroke-width="2.5" stroke-linecap="round"/><path d="M66 32l4 3-5 2 1-5z" fill="#f0553a"/></svg>`
            },
            "Docker": {
              title: "Docker",
              desc: "Reproducible container runtimes with multi-stage minimal scratch builds and hardened security profiles.",
              usedFor: "Standardized environments across local development, CI pipelines, and production clusters.",
              metric: "✦ Immutable multi-arch image builds",
              tag: "CONTAINER RUNTIME",
              actionText: "→ View deployment workflow ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><rect x="14" y="16" width="6" height="5" fill="#2496ed"/><rect x="22" y="16" width="6" height="5" fill="#2496ed"/><rect x="30" y="16" width="6" height="5" fill="#2496ed"/><rect x="22" y="9" width="6" height="5" fill="#2496ed"/><rect x="30" y="9" width="6" height="5" fill="#2496ed"/><path d="M42 16c2-1 4-1 6 0 1 2 0 5-2 7-6 6-28 6-34 0-1-1-2-4 0-6 2-2 10-2 14-2h16z" fill="#2496ed"/></svg>`
            },
            "CI/CD": {
              title: "Pipelines & CI",
              desc: "Automated regression testing, canary deployments, and staged regional rollouts with rollback triggers.",
              usedFor: "Zero-downtime microservice updates with automated canary analysis before traffic promotion.",
              metric: "✦ 100% automated release gates",
              tag: "SAFE DEPLOY",
              actionText: "→ Explore release engineering ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><circle cx="18" cy="20" r="5" stroke="var(--ink)" stroke-width="2"/><circle cx="42" cy="14" r="5" stroke="#f0553a" stroke-width="2"/><circle cx="42" cy="26" r="5" stroke="var(--ink)" stroke-width="2"/><path d="M23 20h10M33 20v-6h4M33 20v6h4" stroke="var(--ink)" stroke-width="1.8"/></svg>`
            },
            "Linux": {
              title: "Linux Kernel",
              desc: "POSIX system calls, eBPF telemetry, memory management, and asynchronous network epoll event loops.",
              usedFor: "The daily production foundation behind microservices, container nodes, and embedded firmware.",
              metric: "✦ Low-level process & memory tuning",
              tag: "CORE SYSTEM",
              actionText: "→ View Linux proficiency ↗",
              actionLink: "#journey",
              logo: `<svg viewBox="0 0 60 40" width="56" height="36" fill="none"><ellipse cx="30" cy="20" rx="12" ry="15" fill="var(--ink)"/><ellipse cx="30" cy="22" rx="9" ry="11" fill="var(--bg)"/><circle cx="26" cy="14" r="1.8" fill="var(--ink)"/><circle cx="34" cy="14" r="1.8" fill="var(--ink)"/><path d="M27 18q3 2 6 0" stroke="#f0553a" stroke-width="1.8"/></svg>`
            }
          }
        }
      };

      function selectStratum(id) {
        const data = strataData[id];
        if (!data) return;

        const pip = $("rulerPip");
        if (pip) pip.style.top = data.rulerPos;

        for (let i = 1; i <= 5; i++) {
          const slab = $("slab-" + i);
          const row = $("row-" + i);
          const ray = $("ray-" + i);
          const isTarget = (i === id);

          if (row) row.classList.toggle("active", isTarget);
          if (ray) ray.classList.toggle("active", isTarget);
          if (slab) {
            slab.classList.toggle("active", isTarget);
            if (isTarget) {
              slab.style.transform = "translateY(-24px)";
            } else if (i < id) {
              slab.style.transform = "translateY(-8px)";
            } else {
              slab.style.transform = "translateY(8px)";
            }
          }
        }

        const pillsRow = $("pillsRow");
        const toolKeys = Object.keys(data.tools);
        if (pillsRow) {
          pillsRow.innerHTML = toolKeys.map((k, idx) => 
            `<button class="tool-chip ${idx === 0 ? "active" : ""}" data-stratum="${id}" data-tool="${k}">${k}</button>`
          ).join("");
          pillsRow.querySelectorAll(".tool-chip").forEach(btn => {
            btn.onclick = () => {
              pillsRow.querySelectorAll(".tool-chip").forEach(b => b.classList.remove("active"));
              btn.classList.add("active");
              updateInspector(btn.dataset.stratum, btn.dataset.tool);
            };
          });
        }

        updateInspector(id, toolKeys[0]);
        nudgeCat();
      }

      function updateInspector(stratumId, toolKey) {
        const t = strataData[stratumId].tools[toolKey];
        if (!t) return;

        const title = $("leadTitle"), logo = $("leadLogo"), sum = $("leadSummary"),
              desc = $("outcomeDesc"), callout = $("outcomeCallout"), act = $("actionLabel"),
              link = $("actionJump"), tag = $("specTag");

        [title, sum, desc, callout].forEach(e => {
          if (e) {
            e.style.opacity = "0.2";
            e.style.transform = "translateY(2px)";
          }
        });

        setTimeout(() => {
          if (title) title.textContent = t.title;
          if (logo) logo.innerHTML = t.logo;
          if (sum) sum.textContent = t.desc;
          if (desc) desc.textContent = t.usedFor;
          if (callout) callout.textContent = t.metric;
          if (act) act.textContent = t.actionText;
          if (link) link.setAttribute("href", t.actionLink);
          if (tag) tag.textContent = t.tag;

          [title, sum, desc, callout].forEach(e => {
            if (e) {
              e.style.opacity = "1";
              e.style.transform = "none";
              e.style.transition = "opacity 0.2s cubic-bezier(0.16,1,0.3,1), transform 0.2s cubic-bezier(0.16,1,0.3,1)";
            }
          });
        }, 90);
      }

      for (let i = 1; i <= 5; i++) {
        const slab = $("slab-" + i);
        const row = $("row-" + i);
        if (slab) slab.onclick = () => selectStratum(i);
        if (row) row.onclick = () => selectStratum(i);
      }

      // Parallax
      const isoBox = $("isoBox"), isoParallax = $("isoParallax");
      let targetRotX = 0, targetRotY = 0, currentRotX = 0, currentRotY = 0;
      if (isoBox && isoParallax) {
        isoBox.addEventListener("mousemove", e => {
          const rect = isoBox.getBoundingClientRect();
          const x = e.clientX - rect.left - (rect.width / 2);
          const y = e.clientY - rect.top - (rect.height / 2);
          targetRotX = (y / (rect.height / 2)) * -4;
          targetRotY = (x / (rect.width / 2)) * 6;
        });
        isoBox.addEventListener("mouseleave", () => {
          targetRotX = 0; targetRotY = 0;
        });
        function renderParallax() {
          currentRotX += (targetRotX - currentRotX) * 0.08;
          currentRotY += (targetRotY - currentRotY) * 0.08;
          isoParallax.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
          requestAnimationFrame(renderParallax);
        }
        requestAnimationFrame(renderParallax);
      }

      // Cat Eye Gaze
      const leftPupil = $("leftPupil"), rightPupil = $("rightPupil"), peekingCat = $("peekingCat");
      let catTargetX = 0, catTargetY = 0, catCurX = 0, catCurY = 0;
      window.addEventListener("mousemove", e => {
        if (!peekingCat || !leftPupil || !rightPupil) return;
        const rect = peekingCat.getBoundingClientRect();
        const cx = rect.left + (rect.width / 2), cy = rect.top + (rect.height / 2);
        const dx = e.clientX - cx, dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const max = 2.4;
        catTargetX = (dx / dist) * Math.min(max, dist / 80);
        catTargetY = (dy / dist) * Math.min(max, dist / 80);
      });

      function animateCatEyes() {
        catCurX += (catTargetX - catCurX) * 0.12;
        catCurY += (catTargetY - catCurY) * 0.12;
        if (leftPupil && rightPupil) {
          leftPupil.style.transform = `translate(${catCurX.toFixed(2)}px, ${catCurY.toFixed(2)}px)`;
          rightPupil.style.transform = `translate(${catCurX.toFixed(2)}px, ${catCurY.toFixed(2)}px)`;
        }
        requestAnimationFrame(animateCatEyes);
      }
      requestAnimationFrame(animateCatEyes);

      function randomBlink() {
        const leftEye = $("leftEyeGroup"), rightEye = $("rightEyeGroup");
        if (leftEye && rightEye) {
          leftEye.style.transform = "scaleY(0.1)"; rightEye.style.transform = "scaleY(0.1)";
          leftEye.style.transformOrigin = "74px 30px"; rightEye.style.transformOrigin = "96px 30px";
          setTimeout(() => {
            leftEye.style.transform = "scaleY(1)"; rightEye.style.transform = "scaleY(1)";
          }, 120);
        }
        setTimeout(randomBlink, 3500 + Math.random() * 4000);
      }
      setTimeout(randomBlink, 2500);

      function nudgeCat() {
        if (peekingCat) {
          peekingCat.style.transform = "translateY(-3px)";
          setTimeout(() => peekingCat.style.transform = "none", 160);
        }
      }

      if (peekingCat) {
        peekingCat.onclick = () => {
          const bubble = $("catBubble");
          peekingCat.style.transform = "translateY(-6px) scale(1.06)";
          if (bubble) bubble.classList.add("active");
          setTimeout(() => peekingCat.style.transform = "none", 200);
          setTimeout(() => bubble && bubble.classList.remove("active"), 1600);
        };
      }

      // Keys 1 to 5
      window.addEventListener("keydown", e => {
        if (["1", "2", "3", "4", "5"].includes(e.key)) {
          selectStratum(parseInt(e.key));
        }
      });

      selectStratum(5);
    }

    /* work showcase */
    let dots = "";
    [20, 150, 280].forEach((ox, c) => {
      for (let r = 0; r < 5; r++)
        for (let q = 0; q < 7; q++) {
          const hi = (q * 7 + r * 3 + c * 5) % 5 === 0;
          dots += `<circle class="dt3${hi ? " h" : ""}" cx="${ox + q * 14}" cy="${26 + r * 16}" r="${hi ? 4.4 : 3.2}" style="animation-delay:${((q + r) % 6) * 0.25}s"/>`;
        }
    });

    const V = [
      `<svg viewBox="0 0 420 130"><path class="flw" d="M30 54H390"/><path class="flw" d="M300 54V96"/><circle r="4.5" fill="currentColor"><animateMotion dur="3.4s" repeatCount="indefinite" path="M30 54H390"/></circle>${[30, 120, 210, 300, 390].map((x, i) => `<circle class="nd2" cx="${x}" cy="54" r="10"/><text x="${x}" y="82">${["ingest", "mask PII", "extract", "validate", "route"][i]}</text>`).join("")}<rect class="pill" x="248" y="98" width="104" height="22" rx="11"/><text x="300" y="113" style="fill:currentColor">flagged field</text></svg>`,
      `<svg viewBox="0 0 420 130"><path class="ar2" d="M0 96 C50 92 80 86 120 78 S190 66 240 58 S330 40 420 28 V130 H0Z"/><path class="bs" d="M0 104 C50 102 100 100 150 96 S250 90 320 86 S390 82 420 80"/><path class="ln" d="M0 96 C50 92 80 86 120 78 S190 66 240 58 S330 40 420 28"/><text x="372" y="100">baseline</text><text x="350" y="18" style="fill:currentColor">TradeShield</text></svg>`,
      `<svg viewBox="0 0 420 130"><rect class="pill" x="14" y="16" width="150" height="30" rx="10"/><text x="89" y="35">CT · DenseNet121</text><rect class="pill" x="14" y="84" width="150" height="30" rx="10"/><text x="89" y="103">RNA-seq · RF + SHAP</text><path class="lnk" d="M164 31C200 31 196 65 226 65"/><path class="lnk" d="M164 99C200 99 196 65 226 65"/><circle class="nd2" cx="242" cy="65" r="17"/><text x="242" y="69" style="fill:currentColor">fuse</text><path class="flw" d="M259 65H290"/><rect class="pill" x="296" y="14" width="92" height="24" rx="12"/><text x="342" y="30">LUAD</text><rect class="pill" x="296" y="53" width="92" height="24" rx="12"/><text x="342" y="69">LUSC</text><rect class="pill" x="296" y="92" width="92" height="24" rx="12"/><text x="342" y="108">Normal</text></svg>`,
      `<svg viewBox="0 0 400 130">${dots}<text x="62" y="124">cohort A</text><text x="192" y="124">cohort B</text><text x="322" y="124">cohort C</text></svg>`
    ];
    const PM = [{ c: "#f0553a", t: "build" }, { c: "#19b97a", t: "build" }, { c: "#4c8bf5", t: "pub" }, { c: "#b06af0", t: "pub" }];

    if ($("pf")) {
      $("pf").innerHTML = `<span class="mono">Filter</span>` + [["all", "all work"], ["build", "builds"], ["pub", "published"]].map((f, i) => `<button class="ib${i ? "" : " on"}" data-f="${f[0]}">${f[1]}</button>`).join("") + `<span class="mono" style="margin-left:auto">${P.length} projects · 2 papers</span>`;
    }
    if ($("pjs")) {
      $("pjs").innerHTML = P.map((p, i) => `<button class="pcd t3d rv" data-i="${i}" data-t="${PM[i].t}" style="--c:${PM[i].c};transition-delay:${i * 70}ms"><div class="pcd-t"><span class="tagc">0${i + 1} · ${p[1]}</span><span class="pcd-ar">↗</span></div><div class="pcd-v">${V[i]}</div><div class="pcd-b"><div><h3>${p[0]}</h3><p>${p[2]}</p></div><div class="pcd-m"><span class="cnt">${p[3]}</span><small>${p[4].toUpperCase()}</small></div></div><div class="pcd-g">${p[9].slice(0, 4).map(x => `<span class="tag">${x}</span>`).join("")}<span class="go">View breakdown →</span></div></button>`).join("");
      const pc2 = [...document.querySelectorAll(".pcd")];
      pc2.forEach((c, i) => {
        io.observe(c);
        c.onclick = () => openP(i);
        tilt(c, 4);
      });
      if ($("pf")) {
        $("pf").querySelectorAll("[data-f]").forEach(b => b.onclick = () => {
          $("pf").querySelectorAll("[data-f]").forEach(x => x.classList.toggle("on", x === b));
          pc2.forEach(c => c.classList.toggle("off", b.dataset.f !== "all" && c.dataset.t !== b.dataset.f));
        });
      }
      const cio = new IntersectionObserver(es => es.forEach(x => {
        if (!x.isIntersecting) return;
        cio.unobserve(x.target);
        const el = x.target.querySelector(".cnt"), tx_val = el ? el.textContent : "", m = tx_val.match(/\d+(\.\d+)?/);
        if (!m || RM) return;
        const to = parseFloat(m[0]), dp = (m[1] || "").length - (m[1] ? 1 : 0), t0 = performance.now();
        (function f(t) {
          const p = Math.min((t - t0) / 1500, 1), v = to * (1 - Math.pow(1 - p, 3));
          if (el) el.textContent = tx_val.replace(m[0], v.toFixed(dp));
          if (p < 1) requestAnimationFrame(f);
        })(t0);
      }), { threshold: 0.4 });
      pc2.forEach(c => cio.observe(c));
    }

    openP = function (i) {
      pi = (i + P.length) % P.length;
      const p = P[pi], m = PM[pi];
      if ($("dk")) $("dk").textContent = `0${pi + 1} / 0${P.length} · ${p[1]}`;
      if (dc) {
        dc.classList.remove("go");
        dc.style.setProperty("--c", m.c);
        dc.innerHTML = `<div class="dvis">${V[pi]}</div><h3 class="dt2">${p[0]}</h3><div class="dm">${p[3]}<small>${p[4].toUpperCase()}</small></div><p class="tg2">${p[2]}</p><div class="tlw">${[["PROBLEM", p[5]], ["APPROACH", p[6]], ["OUTCOME", p[7]], ["WHAT I’D CHANGE", p[8]]].map((x, k) => `<div class="tls" style="--k:${k}"><i>${k + 1}</i><b>${x[0]}</b><p>${x[1]}</p></div>`).join("")}</div><div class="demo">${D[pi]}</div><div class="ft2">${tg(p[9])}<a class="dlnk" href="${p[10]}">${p[11]}</a></div>`;
        dc.scrollTop = 0;
      }
      if (dr) dr.classList.add("o");
      if (ov) ov.classList.add("o");
      document.body.style.overflow = "hidden";
      if (pi === 0 && $("run")) {
        $("run").onclick = () => {
          const l = [...($("stp") ? $("stp").children : [])];
          l.forEach(x => x.classList.remove("d"));
          l.forEach((x, idx) => setTimeout(() => x.classList.add("d"), (idx + 1) * 700));
        };
      }
      requestAnimationFrame(() => requestAnimationFrame(() => { if (dc) dc.classList.add("go"); }));
    };

    /* contact form */
    if ($("cf")) {
      $("cf").onsubmit = e => {
        e.preventDefault();
        const f = new FormData(e.target);
        location.href = "mailto:deevnared@gmail.com?subject=" + encodeURIComponent("Hello from your portfolio, " + (f.get("n") || "")) + "&body=" + encodeURIComponent((f.get("m") || "") + "\n\n" + (f.get("n") || "") + " (" + (f.get("e") || "") + ")");
        toast("opening your mail app…");
      };
    }

    /* cat easter egg */
    let cc = 0;
    if (cat) {
      cat.addEventListener("click", () => {
        cc++;
        if (cc % 5) return;
        toast("you found the cat’s favorite spot 🐾");
        const r = cat.getBoundingClientRect();
        for (let i = 0; i < 26; i++) {
          const s = document.createElement("span");
          s.textContent = i % 3 ? "🐾" : "✦";
          s.style.cssText = "position:fixed;z-index:300;pointer-events:none;font-size:" + (14 + Math.random() * 16) + "px;color:var(--accent);left:" + (r.left + r.width / 2) + "px;top:" + (r.top + r.height / 2) + "px";
          document.body.appendChild(s);
          const a = Math.random() * 6.283, d = 120 + Math.random() * 260;
          s.animate([{ transform: "translate(0,0) rotate(0)", opacity: 1 }, { transform: "translate(" + Math.cos(a) * d + "px," + (Math.sin(a) * d + 140) + "px) rotate(" + (Math.random() * 540 - 270) + "deg)", opacity: 0 }], { duration: 1100 + Math.random() * 700, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = () => s.remove();
        }
      });
    }

    /* command palette extras */
    CM.splice(3, 0, ["Go to toolkit", "#skills"]);
    CM.push(["Back to top", () => scrollTo({ top: 0, behavior: "smooth" })], ["Toggle particle background", () => {
      fxOn = !fxOn;
      if ($("fx")) $("fx").style.display = fxOn ? "" : "none";
      toast("particles " + (fxOn ? "on" : "off"));
    }], ["Print / save as PDF", () => print()]);

    /* ===== v4 ===== */
    const AC = [["coral", "#f0553a"], ["ocean", "#3f7be0"], ["mint", "#17a870"], ["violet", "#9b5de5"], ["amber", "#d98a00"], ["rose", "#e5457a"]];
    const setAcc = (c, save) => {
      document.documentElement.style.setProperty("--accent", c);
      document.querySelectorAll("#acp button").forEach(b => b.classList.toggle("on", b.dataset.c === c));
      if (save) {
        try { localStorage.setItem("acc", c); } catch (e) { }
      }
    };
    if (!document.querySelector(".acw") && $("th")) {
      const acw = document.createElement("span");
      acw.className = "acw";
      acw.innerHTML = `<button class="ib" id="ab" title="Accent colour" aria-label="Accent colour">●</button><div id="acp">${AC.map(a => `<button style="--c:${a[1]}" data-c="${a[1]}" title="${a[0]}" aria-label="${a[0]}"></button>`).join("")}</div>`;
      $("th").parentNode.insertBefore(acw, $("th"));
      if ($("ab")) $("ab").onclick = e => { e.stopPropagation(); if ($("acp")) $("acp").classList.toggle("o"); };
      if ($("acp")) {
        $("acp").onclick = e => {
          const b = e.target.closest("button");
          if (b) { setAcc(b.dataset.c, true); toast("accent → " + b.title); }
        };
      }
    }
    addEventListener("click", e => {
      if (!e.target.closest(".acw") && $("acp")) $("acp").classList.remove("o");
    });
    try {
      const sv = localStorage.getItem("acc");
      if (sv) setAcc(sv);
    } catch (e) { }
    if (!document.querySelector("#acp .on")) setAcc(AC[0][1]);
    AC.forEach(a => CM.push(["Accent: " + a[0], () => { setAcc(a[1], true); toast("accent → " + a[0]); }]));
    CM.push(["Keyboard shortcuts", () => { if ($("kbh")) $("kbh").classList.add("o"); }]);

    /* mobile menu */
    if (!document.getElementById("mm")) {
      const mm = document.createElement("div");
      mm.id = "mm";
      mm.innerHTML = `<button class="ib" id="mx" style="position:absolute;top:22px;right:22px">close ✕</button>` + [["about", "01", "about me"], ["skills", "02", "toolkit"], ["journey", "03", "experience"], ["projects", "04", "work"], ["contact", "05", "say hey"]].map(x => `<a href="#${x[0]}"><span>${x[1]}</span>${x[2]}</a>`).join("");
      document.body.appendChild(mm);
      if ($("mx")) $("mx").onclick = () => mm.classList.remove("o");
      mm.onclick = e => { if (e.target.closest("a")) mm.classList.remove("o"); };
    }
    if (!document.getElementById("hb") && $("kb")) {
      const hb = document.createElement("button");
      hb.className = "ib";
      hb.id = "hb";
      hb.textContent = "☰";
      hb.setAttribute("aria-label", "Menu");
      $("kb").before(hb);
      hb.onclick = () => { const mm = $("mm"); if (mm) mm.classList.add("o"); };
    }

    /* word-reveal headings */
    function sp(node, ix) {
      [...node.childNodes].forEach(n_node => {
        if (n_node.nodeType === 3) {
          const fr = document.createDocumentFragment();
          n_node.textContent.split(/(\s+)/).forEach(t_str => {
            if (!t_str) return;
            if (/^\s+$/.test(t_str)) fr.appendChild(document.createTextNode(" "));
            else {
              const w_el = document.createElement("span");
              w_el.className = "w";
              const s_el = document.createElement("span");
              s_el.style.setProperty("--i", ix.i++);
              s_el.textContent = t_str;
              w_el.appendChild(s_el);
              fr.appendChild(w_el);
            }
          });
          n_node.replaceWith(fr);
        } else if (n_node.nodeType === 1) sp(n_node, ix);
      });
    }
    document.querySelectorAll("h2.t:not(.sp-done)").forEach(h => {
      h.classList.add("sp-done");
      sp(h, { i: 0 });
    });

    /* cursor labels */
    const cu2 = $("cur"), cs = cu2 ? cu2.querySelector("span") : null;
    addEventListener("pointermove", e => {
      const t = e.target.closest && e.target.closest(".pcd,.chip,.glr,.cn,.rn,.catw,a[href^='mailto'],#up");
      let l = "";
      if (t) {
        l = t.matches(".pcd") ? "view" : t.matches(".chip") ? "peek" : t.matches(".glr") ? "toggle" : t.matches(".cn") ? "jump" : t.matches(".rn") ? "go" : t.matches(".catw") ? "pet" : t.matches("#up") ? "top" : "mail";
      }
      if (cs) cs.textContent = l;
      if (cu2) cu2.classList.toggle("lb", !!l);
    });

    /* shareable project links */
    const SL = ["claims-agent", "tradeshield", "biomarker-analysis", "asd-disparities"];
    const _o = openP;
    openP = function (i) {
      _o(i);
      try { history.replaceState(null, "", "#work/" + SL[pi]); } catch (e) { }
    };
    if (dr) {
      new MutationObserver(() => {
        if (!dr.classList.contains("o") && location.hash.indexOf("#work/") === 0) {
          try { history.replaceState(null, "", "#projects"); } catch (e) { }
        }
      }).observe(dr, { attributes: true, attributeFilter: ["class"] });
    }
    const hs = () => {
      const m = location.hash.match(/^#work\/(.+)$/);
      if (m) {
        const i = SL.indexOf(m[1]);
        if (i > -1 && $("projects")) {
          $("projects").scrollIntoView();
          setTimeout(() => openP(i), 450);
        }
      }
    };
    setTimeout(hs, 1400);
    addEventListener("hashchange", hs);

    /* keyboard shortcuts */
    let gk = 0;
    if ($("kbb")) $("kbb").onclick = () => { if ($("kbh")) $("kbh").classList.add("o"); };
    if ($("kbx")) $("kbx").onclick = () => { if ($("kbh")) $("kbh").classList.remove("o"); };
    if ($("kbh")) {
      $("kbh").onclick = e => {
        if (e.target.id === "kbh") $("kbh").classList.remove("o");
      };
    }
    addEventListener("keydown", e => {
      const t = e.target;
      if ((t.matches && t.matches("input,textarea")) || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Escape") {
        if ($("kbh")) $("kbh").classList.remove("o");
        if ($("mm")) $("mm").classList.remove("o");
        if ($("acp")) $("acp").classList.remove("o");
        return;
      }
      if (($("cmd") && $("cmd").classList.contains("o")) || (dr && dr.classList.contains("o"))) return;
      if (e.key === "?") {
        if ($("kbh")) $("kbh").classList.toggle("o");
        return;
      }
      if (e.key === "t") { T(); return; }
      if (e.key === "g") { gk = Date.now(); return; }
      if (Date.now() - gk < 900) {
        const m = { a: "about", s: "skills", e: "journey", w: "projects", c: "contact" }[e.key];
        if (m && $(m)) { $(m).scrollIntoView({ behavior: "smooth" }); gk = 0; }
      }
    });

    /* career ribbon */
    const RB = [["2021", "Initial commit", "0000001"], ["Aug 2023", "Agilisium", "68c3b5e"], ["Sep 2023", "REUDE", "a90e6d4"], ["Jan 2025", "Kindle Scribe", "4fa2c18"], ["2025", "Research", "e5c1b07"], ["2025 → Mar 2026", "Alexa Calendar", "9d3a41c"], ["Now", "Open to roles", "HEAD"]];
    if ($("rib")) {
      $("rib").innerHTML = RB.map(r => `<button class="rn" data-s="${r[2]}"><i></i><span class="mono">${r[0]}</span><b>${r[1]}</b></button>`).join("");
      $("rib").onclick = e => {
        const b = e.target.closest(".rn");
        if (!b) return;
        const row = rows.find(r => {
          const sh = r.querySelector(".sh");
          return sh && sh.textContent === b.dataset.s;
        });
        if (!row) return;
        const btnAll = document.querySelector("#glf [data-f]");
        if (btnAll) btnAll.click();
        row.classList.add("on");
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        row.animate([{ background: "color-mix(in srgb,var(--accent) 20%,transparent)" }, { background: "transparent" }], { duration: 1500 });
      };
    }

    /* contact extras + giant footer wordmark */
    const avt = () => {
      if ($("avt")) $("avt").textContent = "Chennai · " + new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date()) + " IST";
    };
    avt();
    setInterval(avt, 30000);

    const gw = $("gw");
    if (gw) {
      addEventListener("scroll", () => {
        const r = gw.getBoundingClientRect();
        gw.style.setProperty("--p", Math.max(0, Math.min(100, (innerHeight - r.top) / (innerHeight * 0.55) * 100)) + "%");
      }, { passive: true });
    }
  }

  // Expose to window and run safely
  if (typeof window !== "undefined") {
    window.__initPortfolio = initPortfolio;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initPortfolio);
    } else {
      initPortfolio();
    }
  }
})();
