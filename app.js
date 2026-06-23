(function () {
  const d = window.STUDY_DATA || {};
  const el = (id) => document.getElementById(id);
  const stMap = { active: ["进行中", "badge-active"], locked: ["未解锁", "badge-lock"], done: ["已完成", "badge-done"] };
  const barColor = (m) => (m >= 85 ? "#1ec28b" : m >= 60 ? "#3b82f6" : m >= 30 ? "#FF8a1a" : "#f5704a");

  // header
  el("examName").textContent = d.meta.examName;
  el("examSub").textContent = d.meta.examNameEn + " · 考试窗口 " + d.meta.examWindow + " · 及格线 " + d.meta.passLine;
  el("updated").textContent = "最后更新：" + d.meta.lastUpdated + " · 由 AI 导师维护，学员仅查看";

  // countdown + avg mastery
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const exam = new Date(d.meta.examDate);
  const daysLeft = Math.max(0, Math.round((exam - today) / 86400000));
  const avg = Math.round(d.knowledge.reduce((s, k) => s + k.mastery, 0) / d.knowledge.length);

  // dashboard cards
  const card = (icon, label, value, sub, bar) =>
    `<div class="card"><div class="card-icon">${icon}</div>` +
    `<div class="card-label">${label}</div><div class="card-value">${value}</div>` +
    `<div class="card-sub">${sub}</div>` +
    (bar != null ? `<div class="mini-bar"><span style="width:${bar}%"></span></div>` : "") + `</div>`;
  el("cards").innerHTML = [
    card("⏳", "距考试", daysLeft + ' <span class="unit">天</span>', "目标 " + d.meta.examDate),
    card("📈", "总掌握度", avg + '<span class="unit">%</span>', "8 大板块均值", avg),
    card("📝", "入学摸底", d.placement.score + '<span class="unit">/' + d.placement.total + "</span>", "概念强 · 产品弱"),
    card("❌", "错题本", d.errors.length + ' <span class="unit">条</span>', "每周复习一次")
  ].join("");

  // roadmap
  el("roadmap").innerHTML = d.phases.map((p) => {
    const [txt, cls] = stMap[p.status] || stMap.locked;
    return `<div class="phase ${p.status}"><div class="phase-top"><span class="phase-name">${p.name}</span>` +
      `<span class="badge ${cls}">${txt}</span></div><div class="phase-dates">📅 ${p.dates}</div>` +
      `<div class="phase-topics">${p.topics}</div></div>`;
  }).join("");

  // knowledge mastery
  el("knowledge").innerHTML = d.knowledge.map((k) =>
    `<div class="krow"><div class="khead"><span class="kname">${k.board}</span>` +
    `<span class="kpct">${k.mastery}%</span></div>` +
    `<div class="kbar"><span style="width:${k.mastery}%;background:${barColor(k.mastery)}"></span></div>` +
    `<div class="knote">${k.note}</div></div>`
  ).join("");

  // product flashcards
  el("products").innerHTML = d.products.map((p) =>
    `<div class="pcard"><div class="pabbr">${p.abbr}</div><div class="pdesc">${p.desc}</div>` +
    `<div class="pfull">${p.full}</div><div class="panalogy">≈ ${p.analogy}</div></div>`
  ).join("");

  // error log
  el("errors").innerHTML = d.errors.map((e) =>
    `<div class="ecard"><div class="etop"><span class="etopic">${e.topic}</span>` +
    `<span class="esrc">${e.src} · ${e.date}</span></div>` +
    `<div class="erow"><span class="elabel wrong">✗ 误区</span><span>${e.wrong}</span></div>` +
    `<div class="erow"><span class="elabel right">✓ 正解</span><span>${e.correct}</span></div></div>`
  ).join("");

  // quizzes
  el("quizzes").innerHTML = d.quizzes.map((q) => {
    const pct = Math.round((q.score / q.total) * 100);
    return `<div class="qrow"><div class="qname">${q.name}<span class="qdate">${q.date}</span></div>` +
      `<div class="qbar"><span style="width:${pct}%;background:${barColor(pct)}"></span></div>` +
      `<div class="qscore">${q.score}/${q.total}</div></div>`;
  }).join("");

  // daily log
  el("days").innerHTML = d.days.map((day) => {
    const [txt, cls] = stMap[day.status] || stMap.locked;
    return `<div class="dcard"><div class="dtop"><span class="dday">Day ${day.day}</span>` +
      `<span class="ddate">${day.date}</span><span class="badge ${cls}">${txt}</span></div>` +
      `<div class="dtitle">${day.title}</div>` +
      `<div class="dgoals">${day.goals.map((g) => `<span class="chip">${g}</span>`).join("")}</div></div>`;
  }).join("");
})();
