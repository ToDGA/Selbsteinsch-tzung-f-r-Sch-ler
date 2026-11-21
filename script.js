// script.js — Version 2.0
// Eine einzige Datenstruktur pro Frage: Kategorie, Text, Beispiel, Invertierung, Gesprächsthema.

const questionBank = [

  // ---------------- SOZIALVERHALTEN ----------------
  { category: "Sozialverhalten", text: "Ich höre anderen zu.",
    example: "z. B. Wenn jemand etwas erklärt, unterbreche ich nicht.",
    inverted: false, topic: "Aktives Zuhören trainieren" },
  { category: "Sozialverhalten", text: "Ich bleibe freundlich.",
    example: "z. B. Auch wenn ich genervt bin, bleibe ich nett.",
    inverted: false, topic: "Freundlichen Umgangston auch in schwierigen Momenten wahren" },
  { category: "Sozialverhalten", text: "Ich kann mich entschuldigen.",
    example: "z. B. Ich sage „Entschuldigung“, wenn ich jemanden verletzt habe.",
    inverted: false, topic: "Entschuldigungen ernst meinen und aussprechen" },
  { category: "Sozialverhalten", text: "Ich arbeite gut mit anderen zusammen.",
    example: "z. B. In der Gruppenarbeit teile ich Aufgaben fair auf.",
    inverted: false, topic: "Zusammenarbeit in Gruppen stärken" },
  { category: "Sozialverhalten", text: "Ich respektiere andere Meinungen.",
    example: "z. B. Ich lasse andere Meinungen gelten, auch wenn ich anderer Meinung bin.",
    inverted: false, topic: "Andere Meinungen respektieren" },
  { category: "Sozialverhalten", text: "Ich beleidige andere.",
    example: "z. B. Ich mache mich lustig über das Aussehen anderer oder ich benutze Kraftausdrücke.",
    inverted: true, topic: "Wortwahl im Streit überdenken" },
  { category: "Sozialverhalten", text: "Ich helfe anderen.",
    example: "z. B. Ich erkläre einer Mitschülerin/einem Mitschüler eine Aufgabe.",
    inverted: false, topic: "Hilfsbereitschaft zeigen" },
  { category: "Sozialverhalten", text: "Ich halte mich an Regeln.",
    example: "z. B. Ich melde mich, statt einfach reinzurufen.",
    inverted: false, topic: "Klassenregeln einhalten" },
  { category: "Sozialverhalten", text: "Ich kann Streit ruhig lösen.",
    example: "z. B. Bei einem Konflikt rede ich, statt laut zu werden.",
    inverted: false, topic: "Konfliktlösestrategien einüben" },

  // ---------------- ARBEITSVERHALTEN ----------------
  { category: "Arbeitsverhalten", text: "Ich arbeite ruhig.",
    example: "z. B. Ich rede während der Stillarbeit nicht mit meinem Nachbarn.",
    inverted: false, topic: "Ruhiges Arbeiten in der Stillarbeit" },
  { category: "Arbeitsverhalten", text: "Ich mache Aufgaben fertig.",
    example: "z. B. Ich bearbeite ein Arbeitsblatt bis zum Ende.",
    inverted: false, topic: "Aufgaben konsequent zu Ende bringen" },
  { category: "Arbeitsverhalten", text: "Ich beginne schnell mit der Arbeit.",
    example: "z. B. Nach der Erklärung fange ich sofort an zu arbeiten.",
    inverted: false, topic: "Schneller in die Arbeit starten" },
  { category: "Arbeitsverhalten", text: "Ich arbeite sorgfältig.",
    example: "z. B. Ich schreibe ordentlich und kontrolliere meine Ergebnisse.",
    inverted: false, topic: "Sorgfältiger und genauer arbeiten" },
  { category: "Arbeitsverhalten", text: "Ich vergesse oft Materialien.",
    example: "z. B. Ich habe mein Heft oder meinen Stift nicht dabei.",
    inverted: true, topic: "Material zuverlässig mitbringen" },
  { category: "Arbeitsverhalten", text: "Ich kann mich konzentrieren.",
    example: "z. B. Ich bleibe bei der Aufgabe, auch wenn es laut ist.",
    inverted: false, topic: "Konzentrationsfähigkeit stärken" },
  { category: "Arbeitsverhalten", text: "Ich arbeite weiter, wenn etwas schwierig ist.",
    example: "z. B. Bei einer schweren Aufgabe gebe ich nicht sofort auf.",
    inverted: false, topic: "Durchhaltevermögen bei schwierigen Aufgaben" },
  { category: "Arbeitsverhalten", text: "Ich arbeite selbstständig.",
    example: "z. B. Ich frage erst nach, wenn ich es wirklich nicht allein schaffe.",
    inverted: false, topic: "Selbstständigkeit fördern" },
  { category: "Arbeitsverhalten", text: "Ich arbeite verpassten Unterrichtsstoff nach.",
    example: "z. B. Nach einem Fehltag hole ich den Stoff selbstständig nach.",
    inverted: false, topic: "Verpassten Stoff regelmäßig nacharbeiten" },

  // ---------------- GEFÜHLE ----------------
  { category: "Gefühle", text: "Ich bleibe ruhig bei Problemen.",
    example: "z. B. Wenn etwas schiefgeht, werde ich nicht sofort laut.",
    inverted: false, topic: "Ruhe bei Problemen bewahren" },
  { category: "Gefühle", text: "Ich werde schnell wütend.",
    example: "z. B. Kleine Dinge bringen mich schnell auf 180.",
    inverted: true, topic: "Umgang mit Wut trainieren" },
  { category: "Gefühle", text: "Ich kann mit Fehlern umgehen.",
    example: "z. B. Wenn ich etwas falsch mache, ärgere ich mich nicht lange.",
    inverted: false, topic: "Gelassener Umgang mit eigenen Fehlern" },
  { category: "Gefühle", text: "Ich kann sagen, wenn ich Hilfe brauche.",
    example: "z. B. Ich melde mich, wenn ich etwas nicht verstehe.",
    inverted: false, topic: "Hilfe aktiv einfordern" },
  { category: "Gefühle", text: "Ich traue mir etwas zu.",
    example: "z. B. Ich melde mich auch bei schwierigen Fragen.",
    inverted: false, topic: "Selbstvertrauen stärken" },
  { category: "Gefühle", text: "Ich kann Kritik annehmen.",
    example: "z. B. Wenn eine Lehrkraft etwas verbessern möchte, nehme ich das ernst.",
    inverted: false, topic: "Konstruktiv mit Kritik umgehen" },
  { category: "Gefühle", text: "Ich kann mich beruhigen.",
    example: "z. B. Wenn ich wütend bin, finde ich einen Weg, ruhig zu werden.",
    inverted: false, topic: "Strategien zur Selbstberuhigung" },
  { category: "Gefühle", text: "Ich rede über Probleme.",
    example: "z. B. Wenn mich etwas beschäftigt, spreche ich mit jemandem darüber.",
    inverted: false, topic: "Offener über Probleme sprechen" },
  { category: "Gefühle", text: "Ich mache mir viele Sorgen.",
    example: "z. B. Ich denke oft: „Das schaffe ich nicht.“",
    inverted: true, topic: "Umgang mit Sorgen und Ängsten" },

  // ---------------- LERNVERHALTEN ----------------
  { category: "Lernverhalten", text: "Ich frage nach, wenn ich etwas nicht verstehe.",
    example: "z. B. Ich hebe die Hand, wenn mir etwas unklar ist.",
    inverted: false, topic: "Aktives Nachfragen im Unterricht" },
  { category: "Lernverhalten", text: "Ich probiere neue Aufgaben.",
    example: "z. B. Ich versuche auch unbekannte Aufgabentypen.",
    inverted: false, topic: "Offenheit für neue Aufgabentypen" },
  { category: "Lernverhalten", text: "Ich lerne aus Fehlern.",
    example: "z. B. Bei einer korrigierten Arbeit schaue ich mir meine Fehler genau an.",
    inverted: false, topic: "Fehler als Lernchance nutzen" },
  { category: "Lernverhalten", text: "Ich beteilige mich am Unterricht.",
    example: "z. B. Ich melde mich im Unterrichtsgespräch.",
    inverted: false, topic: "Aktive Mitarbeit im Unterricht" },
  { category: "Lernverhalten", text: "Ich versuche schwierige Aufgaben.",
    example: "z. B. Ich fange auch bei einer schweren Aufgabe an.",
    inverted: false, topic: "Mut zu schwierigen Aufgaben" },
  { category: "Lernverhalten", text: "Ich arbeite aktiv mit.",
    example: "z. B. Ich bringe eigene Ideen ins Unterrichtsgespräch ein.",
    inverted: false, topic: "Aktive Beteiligung fördern" },
  { category: "Lernverhalten", text: "Ich kann gut zuhören.",
    example: "z. B. Ich kann wiederholen, was jemand gesagt hat.",
    inverted: false, topic: "Zuhörfähigkeit im Unterricht stärken" },
  { category: "Lernverhalten", text: "Ich interessiere mich für neue Themen.",
    example: "z. B. Ich freue mich auf neue Unterrichtsthemen.",
    inverted: false, topic: "Interesse an neuen Themen wecken" },
  { category: "Lernverhalten", text: "Ich fehle manchmal absichtlich im Unterricht.",
    example: "z. B. Ich bleibe der Schule fern, obwohl ich nicht krank bin.",
    inverted: true, topic: "Regelmäßiger Schulbesuch" }
];

const CATEGORY_ORDER = ["Sozialverhalten", "Arbeitsverhalten", "Gefühle", "Lernverhalten"];

const ANSWER_LABELS = {
  4: "😀 fast immer",
  3: "🙂 oft",
  2: "😐 manchmal",
  1: "☹️ selten"
};

let currentQuestion = 0;
let answers = []; // { category, text, rawValue, score, topic } — Länge entspricht immer currentQuestion
let rawValues = {}; // merkt sich gewählte Antwort je Frage, auch nach "Zurück", für die Hervorhebung
let startTime = 0;
let timerInterval = null;
let questionnaireRunning = false;
let answerLocked = false;

// Schutz vor HTML in Eingabefeldern
function esc(str){
  return String(str).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
}

// Warnung, wenn die Seite mitten im Fragebogen geschlossen wird
window.addEventListener("beforeunload", e => {
  if(questionnaireRunning){ e.preventDefault(); e.returnValue = ""; }
});

// Tastatur: 1–4 bzw. Pfeil links = zurück
document.addEventListener("keydown", e => {
  if(document.getElementById("questionScreen").classList.contains("hidden")) return;
  const map = { "1":4, "2":3, "3":2, "4":1 };
  if(map[e.key]) answerQuestion(map[e.key]);
  if(e.key === "ArrowLeft" || e.key === "Backspace") goBack();
});

// Enter im Startbildschirm startet
document.addEventListener("DOMContentLoaded", () => {
  ["classGroup", "studentNumber"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => { if(e.key === "Enter") startQuestionnaire(); });
  });
});

function startQuestionnaire(){
  const classGroup = document.getElementById("classGroup").value.trim();
  const studentNumber = document.getElementById("studentNumber").value.trim();

  const errorBox = document.getElementById("startError");
  const num = Number(studentNumber);
  let error = "";
  if(!classGroup || !studentNumber) error = "Bitte fülle Klasse/Kurs und deine Nummer aus.";
  else if(!Number.isInteger(num) || num < 1 || num > 999) error = "Bitte gib die Nummer von deinem Zettel ein.";

  if(error){
    errorBox.innerText = error;
    errorBox.classList.remove("hidden");
    return;
  }
  errorBox.classList.add("hidden");

  questionnaireRunning = true;
  startTime = Date.now();
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("questionScreen").classList.remove("hidden");
  renderQuestion();

  timerInterval = setInterval(() => {
    const seconds = Math.round((Date.now() - startTime) / 1000);
    document.getElementById("timerDisplay").innerText = `⏱ ${seconds} Sekunden`;
  }, 1000);
}

function renderQuestion(){
  const q = questionBank[currentQuestion];
  document.getElementById("questionText").innerText = q.text;
  document.getElementById("questionExample").innerText = q.example || "";
  document.getElementById("questionCounter").innerText = `Frage ${currentQuestion + 1} von ${questionBank.length}`;
  const progress = ((currentQuestion + 1) / questionBank.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";

  // Zurück-Button nur ab der zweiten Frage aktiv
  const backBtn = document.getElementById("btnBack");
  backBtn.classList.toggle("invisible", currentQuestion === 0);

  // Falls diese Frage schon einmal beantwortet wurde (nach "Zurück"), Auswahl markieren
  document.querySelectorAll(".answers button").forEach(btn => {
    btn.classList.toggle("selected", Number(btn.dataset.value) === rawValues[currentQuestion]);
  });
}

function answerQuestion(rawValue){
  // Kurze Sperre: verhindert, dass ein Doppeltipp die nächste Frage gleich mitbeantwortet
  if(answerLocked) return;
  answerLocked = true;

  const q = questionBank[currentQuestion];
  const score = q.inverted ? (5 - rawValue) : rawValue;

  rawValues[currentQuestion] = rawValue;

  answers.push({
    category: q.category,
    text: q.text,
    rawValue,
    score,
    topic: q.topic
  });

  // Gewählte Antwort kurz sichtbar markieren
  const answersBox = document.querySelector(".answers");
  answersBox.classList.add("locked");
  document.querySelectorAll(".answers button").forEach(btn => {
    btn.classList.toggle("selected", Number(btn.dataset.value) === rawValue);
  });

  setTimeout(() => {
    currentQuestion++;
    answerLocked = false;
    answersBox.classList.remove("locked");
    if(currentQuestion >= questionBank.length){
      showResults();
    }else{
      renderQuestion();
    }
  }, 250);
}

function goBack(){
  if(answerLocked || currentQuestion === 0) return;
  currentQuestion--;
  answers.pop(); // die Antwort dieser Frage wird verworfen, bis sie neu beantwortet wird
  renderQuestion();
}

function average(arr){
  return (arr.reduce((a,b)=>a+b,0) / arr.length).toFixed(1);
}

function createEmojiBar(avg){
  const filled = Math.round((avg / 4) * 5);
  let bar = "";
  for(let i = 0; i < 5; i++){
    bar += (i < filled) ? "🟩" : "⬜";
  }
  return bar;
}

function getLevel(avg){
  avg = Number(avg);
  if(avg >= 3.5) return { color:"green", text:"🟢 Stärke" };
  if(avg >= 2.5) return { color:"yellow", text:"🟡 Meistens gut" };
  if(avg >= 1.8) return { color:"orange", text:"🟠 Noch schwierig" };
  return { color:"red", text:"🔴 Unterstützung sinnvoll" };
}

function groupByCategory(){
  const grouped = {};
  CATEGORY_ORDER.forEach(cat => grouped[cat] = []);
  answers.forEach(a => grouped[a.category].push(a));
  return grouped;
}

function showResults(){
  clearInterval(timerInterval);
  questionnaireRunning = false;
  window.scrollTo(0, 0);

  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  const grouped = groupByCategory();

  // ---------- SEITE 1: Kompetenzbereiche ----------
  let html = "";
  let total = 0, count = 0;

  CATEGORY_ORDER.forEach(category => {
    const scores = grouped[category].map(a => a.score);
    const avg = Number(average(scores));
    total += avg; count++;
    const level = getLevel(avg);

    html += `
      <div class="resultBox ${level.color}">
        <strong>${category}</strong>
        <div class="emojiBar">${createEmojiBar(avg)}</div>
        <div class="result-meta">
          <span class="result-status">${level.text}</span>
          <span class="result-score">${avg} / 4.0</span>
        </div>
      </div>
    `;
  });

  const totalAverage = (total / count).toFixed(1);
  const totalLevel = getLevel(totalAverage);

  html += `
    <div class="resultBox total-score-box">
      <div>
        <strong>Gesamteinschätzung</strong>
        <div class="emojiBar">${createEmojiBar(totalAverage)}</div>
      </div>
      <div class="result-meta" style="text-align: right; flex-direction: column; align-items: flex-end;">
        <span class="result-status">${totalLevel.text}</span>
        <span class="result-score" style="background:#e2e8f0;">${totalAverage} / 4.0</span>
      </div>
    </div>
  `;

  const duration = Math.round((Date.now() - startTime) / 1000);
  html += `<div class="duration-info">⏱ Bearbeitungszeit: ${duration} Sekunden</div>`;
  if(duration < 60){
    html += `<div class="warning-box">⚠️ Hinweis: Die Bearbeitungszeit war mit ${duration} Sekunden sehr kurz.</div>`;
  }
  const sameAnswers = answers.every(a => a.rawValue === answers[0].rawValue);
  if(sameAnswers){
    html += `<div class="warning-box">⚠️ Hinweis: Es wurde bei jeder Frage die exakt gleiche Antwort gewählt.</div>`;
  }

  document.getElementById("resultContent").innerHTML = html;

  const now = new Date();
  const classGroup = document.getElementById("classGroup").value.trim();
  const studentNumber = document.getElementById("studentNumber").value.trim();
  const dateStr = `${now.toLocaleDateString("de-DE")} | ${now.toLocaleTimeString("de-DE", {hour: '2-digit', minute:'2-digit'})}`;
  document.getElementById("timestamp").innerHTML = `
    <strong>Klasse/Kurs:</strong> ${esc(classGroup)}<br>
    <strong>Nummer:</strong> ${esc(studentNumber)}<br>
    <strong>Datum:</strong> ${dateStr}
  `;

  // ---------- SEITE 2: Detailauswertung ----------
  renderDetailTable(grouped);
  renderDevelopmentFields(grouped);
  renderDiscussionTopics(grouped);

  const subject = encodeURIComponent(`Selbsteinschätzung Beratungstag – ${classGroup} Nr. ${studentNumber}`);
  document.getElementById("mailLink").href = `mailto:tobias.domagala@get-duisburg.de?subject=${subject}`;

  // ---------- Drucken / Als PDF speichern ----------
  document.getElementById("btnPrint").onclick = () => window.print();

  document.getElementById("btnReload").onclick = () =>
    document.getElementById("reloadConfirm").classList.remove("hidden");
}

function renderDetailTable(grouped){
  let rows = "";
  CATEGORY_ORDER.forEach(category => {
    grouped[category].forEach((a, idx) => {
      rows += `
        <tr>
          ${idx === 0 ? `<td class="catCell" rowspan="${grouped[category].length}">${category}</td>` : ""}
          <td>${a.text}</td>
          <td class="answerCell">${ANSWER_LABELS[a.rawValue]}</td>
        </tr>
      `;
    });
  });

  document.getElementById("detailTableBody").innerHTML = rows;
}

function renderDevelopmentFields(grouped){
  let html = "";
  CATEGORY_ORDER.forEach(category => {
    const items = [...grouped[category]].sort((a,b) => a.score - b.score).slice(0, 3);
    html += `
      <div class="devBox">
        <strong>${category}</strong>
        <div class="devLabel">⚠️ Entwicklungsfelder</div>
        <ul>
          ${items.map(i => `<li>${i.text}</li>`).join("")}
        </ul>
      </div>
    `;
  });
  document.getElementById("developmentFields").innerHTML = html;
}

function renderDiscussionTopics(grouped){
  const weakestPerCategory = CATEGORY_ORDER.map(category => {
    const sorted = [...grouped[category]].sort((a,b) => a.score - b.score);
    return sorted[0];
  });

  const html = weakestPerCategory.map(a => `<li>${a.topic}</li>`).join("");
  document.getElementById("discussionTopics").innerHTML = html;
}

// Automatische Höhenanpassung der Reflexions-Textfelder beim Tippen
document.addEventListener("input", function(e){
  if(e.target.classList.contains("line")){
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
});
