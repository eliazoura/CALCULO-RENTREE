// ###################################################################################
// #############################    les variables     ################################
// ###################################################################################
let LCD = document.getElementById("idtxtecran");

let classLCD = LCD.className;
console.log("classLCD", classLCD);

let myTik = document.getElementById("tik");

/**
 * objet contenant l'affichage écran
 */
let ecranTxt = {
  color: "white",
  txt: [],
  txtGrab: [],
  date: new Date().now,
  //	hour: date.getHours()
};

// ////////////////////////////////////////////////////////////////

let allReset = document.getElementById("reset");
allReset.addEventListener("click", resetAll);

// /////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////

let solu = document.getElementById("egal");
solu.addEventListener("click", solution);
//solu.addEventListener("click", ticket);

// /////////////////////////////////////////////////////////////////

// A DEV PLU STARD POUR SIMPLIFIER LE CODE
//let mezEcoutes =[... document.querySelectorAll(".num")] ;
//console.log("🚀 ~ file: script.js:27 ~ mezEcoutes:", mezEcoutes)
//

let ecouteNum = document.getElementsByClassName("num");

for (let i = 0; i < ecouteNum.length; i++) {
  ecouteNum[i].addEventListener("click", insertDigit);
}

let ecouteOp = document.getElementsByClassName("op");

for (let i = 0; i < ecouteOp.length; i++) {
  ecouteOp[i].addEventListener("click", insertOp);
  //ecouteOp[i].addEventListener("click",changeClass);
}

function insertDigit() {
  let oneDigit = this.innerText;
  console.log("🚀 ~ file: script.js:73 ~ insertDigit ~ oneDigit:", oneDigit);

  let inLCD = LCD.innerText;
  console.log("🚀 ~ file: script.js:76 ~ insertDigit ~ inLCD:", inLCD);

  if (inLCD == "00") {
    LCD.innerText = "";
  }

  LCD.innerText += oneDigit;

  let digitPush = ecranTxt.txt.push(oneDigit);
  console.log("🚀 ~ file: script.js:96 ~ insertDigit ~ ecranTxt:", ecranTxt);
  console.log("🚀 ~ file: script.js:96 ~ insertDigit ~ digitPush:", digitPush);
  let digitPushLong = digitPush.length;

  console.log("leDigit", oneDigit);

  console.log("digitPush", digitPush);

  console.log("digitPushLong", digitPushLong);
}

function insertOp() {
  console.log("Hello Op");
  let oneOp = this.textContent;
  console.log("🚀 ~ file: script.js:73 ~ insertDigit ~ oneDigit:", oneOp);

  LCD.innerText += oneOp;
}

function solution() {
  console.log("SOLUTION EN COURS");
  let chaineOp = document.getElementById("idtxtecran");
  let operations = chaineOp.innerHTML;
  //console.log("🚀 ~ file: script.js:92 ~ solution ~ operations:", operations);
  let resultat = eval(operations);
  //  console.log("🚀 ~ file: script.js:120 ~ solution ~ resultat:", resultat);
  //
  //  console.log(
  //    "🚀 ~ file: script.js:120 ~ solution ~ resultat TYPEOF:",
  //    typeof resultat
  //  );

  chaineOp.textContent = resultat;

  ticket(operations);
}

function ticket(operations) {
  let line = document.createElement("li");
  myTik.appendChild(line);

  line.textContent += operations;
}

function resetAll() {
  console.log("EXE DE RESET ALL");
  LCD.innerText = "00";
  myTik.textContent = "ready";
}

// A DEV PLUS TARD POUR AJOUTER LES FONCTIONS CLAVIER

//function clavier(event) {
//  event.preventDefault();
//  console.log("Hello CLAVIER");
//  console.log("Code clavier ", event.key);
//  monType = typeof event.key;
//  monTest = event.key;
//}

//function clavier(event) {
//    event.preventDefault();
//        console.log("Hello CLAVIER")
//        console.log("Code clavier ",event.key)
//        monType=typeof event.key;
//        monTest=event.key;
//
//
//
//}

//console.log("myLCDintant.classList",myLCDintant.classList);
//LCDintant.classList.replace("txtecranV", "txtecran");

//
//let testOpMoins = document.getElementById("moins");
//let testOpPlus = document.getElementById("plus");
//
//let testOpDiviz = document.getElementById("diviz");
//let testOpMulti = document.getElementById("multi");
//
/*
        testOpMoins.classList.remove("symbolsClick");
        testOpMoins.classList.add("symbolsClick");
    */
//
//testOpMoins.classList.replace("symbolsClick", "symbols");
//testOpDiviz.classList.replace("symbolsClick", "symbols");
//testOpMulti.classList.replace("symbolsClick", "symbols");
//testOpPlus.classList.replace("symbolsClick", "symbols");
//
//ecranTxt = objetNeutre;
//
//opSymbol = objetNeutre;
//
//console.log("ecranTxt",   ecranTxt   );
//
//console.log("opSymbol",   opSymbol   );
//

//function changeClass() {
//  console.log("- - - - E X E C U T ION changeClass - - - - ");
//  console.log("T h i s ID", this.getAttribute("id"));
//  console.log("T h i s ID CLASS", this.getAttribute("class"));
//
//  let LCDintant = document.getElementById("idtxtecran");

//ci dessous changement de classe des boutons opérateurs désactivés pour l'instant

//if (LCDintant.classList == "txtecranV") {
//
//    LCDintant.classList.replace("txtecranV", "txtecran")
//}
//
//let classMoins = document.getElementById("moins");
//let classPlus = document.getElementById("plus");
//
//let classDiviz = document.getElementById("diviz");
//let classMulti = document.getElementById("multi");
//
//
//
//if (classMoins.classList == "symbolsClick") {
//    classMoins.classList.replace("symbolsClick", "symbols")
//}
//
//if (classPlus.classList  == "symbolsClick") {
//    classPlus.classList.replace("symbolsClick", "symbols")
//}
//
//
//
//if (classDiviz.classList  == "symbolsClick") {
//    classDiviz.classList.replace("symbolsClick", "symbols")
//}
//
//if (classMulti.classList  == "symbolsClick") {
//    classMulti.classList.replace("symbolsClick", "symbols")
//}
//
//
//this.classList.replace("symbols", "symbolsClick");
//
//
//console.log("T h i s ID AFTER", this.getAttribute('class'));
//
//
//console.log("TEST DE CONTENU", this.classList.contains('symbolsClick')); // ?

// ////////////////////////////////////////////////////////////////////////////////
