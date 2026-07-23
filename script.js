// script.js
const questions = [
  // SOZIAL
  {category:"Sozialverhalten", text:"Ich höre anderen zu."},
  {category:"Sozialverhalten", text:"Ich bleibe freundlich."},
  {category:"Sozialverhalten", text:"Ich kann mich entschuldigen."},
  {category:"Sozialverhalten", text:"Ich arbeite gut mit anderen zusammen."},
  {category:"Sozialverhalten", text:"Ich lasse andere ausreden."},
  {category:"Sozialverhalten", text:"Ich beleidige andere."},
  {category:"Sozialverhalten", text:"Ich helfe anderen."},
  {category:"Sozialverhalten", text:"Ich streite häufig."},
  {category:"Sozialverhalten", text:"Ich halte mich an Regeln."},
  {category:"Sozialverhalten", text:"Ich kann Streit ruhig lösen."},
  {category:"Sozialverhalten", text:"Ich respektiere andere Meinungen."},
  {category:"Sozialverhalten", text:"Ich störe andere absichtlich."},

  // ARBEIT
  {category:"Arbeitsverhalten", text:"Ich arbeite ruhig."},
  {category:"Arbeitsverhalten", text:"Ich mache Aufgaben fertig."},
  {category:"Arbeitsverhalten", text:"Ich beginne schnell mit der Arbeit."},
  {category:"Arbeitsverhalten", text:"Ich lasse mich leicht ablenken."},
  {category:"Arbeitsverhalten", text:"Ich arbeite sorgfältig."},
  {category:"Arbeitsverhalten", text:"Ich vergesse oft Materialien."},
  {category:"Arbeitsverhalten", text:"Ich kann mich konzentrieren."},
  {category:"Arbeitsverhalten", text:"Ich arbeite weiter, wenn etwas schwierig ist."},
  {category:"Arbeitsverhalten", text:"Ich halte mich an Arbeitszeiten."},
  {category:"Arbeitsverhalten", text:"Ich gebe schnell auf."},
  {category:"Arbeitsverhalten", text:"Ich arbeite selbstständig."},

  // GEFÜHLE
  {category:"Gefühle", text:"Ich bleibe ruhig bei Problemen."},
  {category:"Gefühle", text:"Ich werde schnell wütend."},
  {category:"Gefühle", text:"Ich kann mit Fehlern umgehen."},
  {category:"Gefühle", text:"Ich kann sagen, wenn ich Hilfe brauche."},
  {category:"Gefühle", text:"Ich bin schnell frustriert."},
  {category:"Gefühle", text:"Ich traue mir etwas zu."},
  {category:"Gefühle", text:"Ich kann Kritik annehmen."},
  {category:"Gefühle", text:"Ich fühle mich oft unfair behandelt."},
  {category:"Gefühle", text:"Ich bleibe ruhig bei Streit."},
  {category:"Gefühle", text:"Ich mache mir viele Sorgen."},
  {category:"Gefühle", text:"Ich kann mich beruhigen."},
  {category:"Gefühle", text:"Ich rede über Probleme."},

  // LERNEN
  {category:"Lernverhalten", text:"Ich frage nach, wenn ich etwas nicht verstehe."},
  {category:"Lernverhalten", text:"Ich probiere neue Aufgaben."},
  {category:"Lernverhalten", text:"Ich lerne aus Fehlern."},
  {category:"Lernverhalten", text:"Ich beteilige mich am Unterricht."},
  {category:"Lernverhalten", text:"Ich denke über mein Lernen nach."},
  {category:"Lernverhalten", text:"Ich versuche schwierige Aufgaben."},
  {category:"Lernverhalten", text:"Ich höre im Unterricht zu."},
  {category:"Lernverhalten", text:"Ich arbeite aktiv mit."},
  {category:"Lernverhalten", text:"Ich frage bei Problemen nach Hilfe."},
  {category:"Lernverhalten", text:"Ich kann gut zuhören."},
  {category:"Lernverhalten", text:"Ich interessiere mich für neue Themen."},
  {category:"Lernverhalten", text:"Ich lenke mich oft selbst ab."}
];

// Beispiele je Frage – erscheinen klein/grau unter der Frage, damit klar wird,
// welche Alltagssituation gemeint ist.
const examples = [
  "z. B. Wenn jemand etwas erklärt, unterbreche ich nicht.",
  "z. B. Auch wenn ich genervt bin, bleibe ich nett.",
  "z. B. Ich sage „Entschuldigung“, wenn ich jemanden verletzt habe.",
  "z. B. In der Gruppenarbeit teile ich Aufgaben fair auf.",
  "z. B. Ich warte, bis mein Sitznachbar fertig gesprochen hat.",
  "z. B. Ich benutze Kraftausdrücke wie Arschloch/Halt die Fresse/... oder mache mich über ihr Aussehen lustig",
  "z. B. Ich erkläre einer Mitschülerin/einem Mitschüler eine Aufgabe.",
  "z. B. Ich gerate oft mit anderen aneinander, z. B. in der Pause.",
  "z. B. Ich melde mich, statt einfach reinzurufen.",
  "z. B. Bei einem Konflikt rede ich, statt laut zu werden.",
  "z. B. Ich lasse andere Meinungen gelten, auch wenn ich anderer Meinung bin.",
  "z. B. Ich lenke andere in der Arbeitsphase mit Absicht ab.",
  "z. B. Ich rede während der Stillarbeit nicht mit meinem Nachbarn.",
  "z. B. Ich bearbeite ein Arbeitsblatt bis zum Ende.",
  "z. B. Nach der Erklärung fange ich sofort an zu arbeiten.",
  "z. B. Ich schaue oft zu anderen, statt weiterzuarbeiten.",
  "z. B. Ich schreibe ordentlich und kontrolliere meine Ergebnisse.",
  "z. B. Ich habe mein Heft oder meinen Stift nicht dabei.",
  "z. B. Ich bleibe bei der Aufgabe, auch wenn es laut ist.",
  "z. B. Bei einer schweren Aufgabe gebe ich nicht sofort auf.",
  "z. B. Ich bin fertig, wenn die Zeit vorbei ist.",
  "z. B. Bei einer schwierigen Aufgabe höre ich schnell auf.",
  "z. B. Ich frage erst nach, wenn ich es wirklich nicht allein schaffe.",
  "z. B. Wenn etwas schiefgeht, werde ich nicht sofort laut.",
  "z. B. Kleine Dinge bringen mich schnell auf 180.",
  "z. B. Wenn ich etwas falsch mache, ärgere ich mich nicht lange.",
  "z. B. Ich melde mich, wenn ich etwas nicht verstehe.",
  "z. B. Bei Misserfolg werde ich schnell sauer auf mich selbst.",
  "z. B. Ich melde mich auch bei schwierigen Fragen.",
  "z. B. Wenn eine Lehrkraft etwas verbessern möchte, nehme ich das ernst.",
  "z. B. Ich denke oft, andere werden bevorzugt.",
  "z. B. Bei einem Konflikt schreie ich nicht.",
  "z. B. Ich denke oft: „Das schaffe ich nicht.“",
  "z. B. Wenn ich wütend bin, finde ich einen Weg, ruhig zu werden.",
  "z. B. Wenn mich etwas beschäftigt, spreche ich mit jemandem darüber.",
  "z. B. Ich hebe die Hand, wenn mir etwas unklar ist.",
  "z. B. Ich versuche auch unbekannte Aufgabentypen.",
  "z. B. Bei einer korrigierten Arbeit schaue ich mir meine Fehler genau an.",
  "z. B. Ich melde mich im Unterrichtsgespräch.",
  "z. B. Ich überlege, wie ich am besten lerne.",
  "z. B. Ich fange auch bei einer schweren Aufgabe an.",
  "z. B. Ich schaue zur Lehrkraft, wenn sie etwas erklärt.",
  "z. B. Ich bringe eigene Ideen ins Unterrichtsgespräch ein.",
  "z. B. Ich frage nach, statt einfach nichts zu machen.",
  "z. B. Ich kann wiederholen, was jemand gesagt hat.",
  "z. B. Ich freue mich auf neue Unterrichtsthemen.",
  "z. B. Ich fange an, mit etwas anderem zu spielen, statt zu arbeiten."
];

const invertedQuestions = [5,7,11,15,17,21,24,28,31,33,46];

let currentQuestion = 0;
let answers = [];
let startTime = 0;

function startQuestionnaire(){
  const classGroup = document.getElementById("classGroup").value.trim();
  const studentNumber = document.getElementById("studentNumber").value.trim();

  if(!classGroup || !studentNumber){
    alert("Bitte fülle Kurs/Klasse und deine Nummer aus.");
    return;
  }

  startTime = Date.now();
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("questionScreen").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion(){
  const q = questions[currentQuestion];
  document.getElementById("questionText").innerText = q.text;
  document.getElementById("questionExample").innerText = examples[currentQuestion] || "";
  document.getElementById("questionCounter").innerText = `Frage ${currentQuestion + 1} von ${questions.length}`;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
}

function answerQuestion(value){
  if(invertedQuestions.includes(currentQuestion)){
    value = 5 - value;
  }

  answers.push({
    category: questions[currentQuestion].category,
    value
  });

  currentQuestion++;

  if(currentQuestion >= questions.length){
    showResults();
  }else{
    renderQuestion();
  }
}

function average(arr){
  return (arr.reduce((a,b)=>a+b,0) / arr.length).toFixed(1);
}

function createEmojiBar(avg){
  const filled = Math.round((avg / 4) * 5);
  let bar = "";
  for(let i = 0; i < 5; i++){
    if(i < filled) bar += "🟩";
    else bar += "⬜";
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

function showResults(){
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  const grouped = { Sozialverhalten: [], Arbeitsverhalten: [], Gefühle: [], Lernverhalten: [] };
  answers.forEach(answer => { grouped[answer.category].push(answer.value); });

  let html = "";
  let total = 0;
  let count = 0;

  for(let category in grouped){
    const avg = Number(average(grouped[category]));
    total += avg;
    count++;
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
  }

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
  if(duration < 60){
    html += `<div class="warning-box">⚠️ Hinweis: Die Bearbeitungszeit war mit ${duration} Sekunden sehr kurz.</div>`;
  }

  const sameAnswers = answers.every(a => a.value === answers[0].value);
  if(sameAnswers){
    html += `<div class="warning-box">⚠️ Hinweis: Es wurde bei jeder Frage die exakt gleiche Antwort gewählt.</div>`;
  }

  document.getElementById("resultContent").innerHTML = html;

  document.getElementById("btnPrint").onclick = function(){
    alert("Wichtig:\n\n1. Wähle beim Drucken „Als PDF speichern“ UND unter Weitere Einstellungen den Rand: Standard .\n2. Speichere die Datei so, dass du sie wiederfindest (z. B. „Selbsteinschätzung_Name.pdf“).\n3. Schicke die gespeicherte PDF-Datei anschließend als Anhang an deine Klassenleitung.");
    window.print();
  };

  const now = new Date();
  document.getElementById("timestamp").innerHTML = `
    <strong>Klasse/Kurs:</strong> ${document.getElementById("classGroup").value}<br>
    <strong>Schüler-Nr:</strong> ${document.getElementById("studentNumber").value}<br>
    <strong>Datum:</strong> ${now.toLocaleDateString("de-DE")} | ${now.toLocaleTimeString("de-DE", {hour: '2-digit', minute:'2-digit'})}
  `;
}
