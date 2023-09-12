// ###################################################################################
// #############################    les variables     ################################
// ###################################################################################
let LCD=document.getElementById("idtxtecran");


let classLCD = LCD.className;
console.log("classLCD",classLCD);

let ecranTxt = {
                color: "white",
                txt: [],
                txtGrab: [],
                date: new Date().now,
            //	hour: date.getHours()
                };
  
// ////////////////////////////////////////////////////////////////

let allReset = document.getElementById("reset");
allReset.addEventListener("click",resetAll);


// /////////////////////////////////////////////////////////////////

let mezEcoutes =[... document.querySelectorAll(".num")] ;




let ecouteNum = document.getElementsByClassName("num");for (let i = 0; i < ecouteNum.length; i++) {
    ecouteNum[i].addEventListener("click",insertDigit)    
}

let ecouteOp = document.getElementsByClassName("op");
for (let i = 0; i <  ecouteOp.length; i++) {
                                            ecouteOp[i].addEventListener("click",insertOp)    ;
                                            ecouteOp[i].addEventListener("click",changeClass);

                                            }
                                            
// ////////////////////////////////////////////////////////////////////////////////

//
//let ecouteOp = document.querySelectorAll("op");
// console.log("🚀 ~ file: script.js:13 ~ ecouteOp:", ecouteOp)
// let longOp=ecouteOp.length;
//


// attente du premier nombre


// attente operateur I


// attente du deuxieme nombre

// attente operateur II


// attente du troisième nombre


// attente operateur III

// /////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////   LES FONCTIONS   ///////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////


function insertDigit() {


    let oneDigit=this.innerText;
    console.log("🚀 ~ file: script.js:73 ~ insertDigit ~ oneDigit:", oneDigit)

    let inLCD = LCD.innerText;
    console.log("🚀 ~ file: script.js:76 ~ insertDigit ~ inDIGIT:", inLCD)

    if (inLCD=="00") {LCD.innerText="";}


    LCD.innerText += oneDigit;


    let digitPush = ecranTxt.txt.push(oneDigit);

    console.log("🚀 ~ file: script.js:96 ~ insertDigit ~ ecranTxt:", ecranTxt)

    console.log("🚀 ~ file: script.js:96 ~ insertDigit ~ digitPush:", digitPush)

    let digitPushLong = digitPush.length;

console.log("leDigit",oneDigit)

console.log("digitPush",digitPush);

console.log("digitPushLong",digitPushLong);

                                        }

function insertOp() {

    console.log("Hello Op")
    let oneOp=this.textContent;
    console.log("🚀 ~ file: script.js:73 ~ insertDigit ~ oneDigit:", oneOp);







}




function resetAll() {

    console.log("EXE DE RESETALL");
    
    
    
    let LCDintant = document.getElementById("idtxtecran");
    LCDintant.innerText = "000";
    
    console.log("myLCDintant.classList",myLCDintant.classList);
    LCDintant.classList.replace("txtecranV", "txtecran");
    
    
    let testOpMoins = document.getElementById("moins");
    let testOpPlus = document.getElementById("plus");
    
    let testOpDiviz = document.getElementById("diviz");
    let testOpMulti = document.getElementById("multi");
    
    /*
        testOpMoins.classList.remove("symbolsClick");
        testOpMoins.classList.add("symbolsClick");
    */
    
    testOpMoins.classList.replace("symbolsClick", "symbols");
    testOpDiviz.classList.replace("symbolsClick", "symbols");
    testOpMulti.classList.replace("symbolsClick", "symbols");
    testOpPlus.classList.replace("symbolsClick", "symbols");
    
    ecranTxt = objetNeutre;
    
    opSymbol = objetNeutre;
    
    console.log("ecranTxt",   ecranTxt   );
    
    console.log("opSymbol",   opSymbol   );
    
                                                    }

function changeClass() {

    console.log("- - - - E X E C U T ION changeClass - - - - ");
    console.log("T h i s ID", this.getAttribute('id'));
    console.log("T h i s ID CLASS", this.getAttribute('class'));
    
    let LCDintant = document.getElementById("idtxtecran");
    
    if (LCDintant.classList == "txtecranV") {
    
        LCDintant.classList.replace("txtecranV", "txtecran")
    }
    
    let classMoins = document.getElementById("moins");
    let classPlus = document.getElementById("plus");
    
    let classDiviz = document.getElementById("diviz");
    let classMulti = document.getElementById("multi");
    
    
    
    if (classMoins.classList == "symbolsClick") {
        classMoins.classList.replace("symbolsClick", "symbols")
    }
    
    if (classPlus.classList  == "symbolsClick") {
        classPlus.classList.replace("symbolsClick", "symbols")
    }
        
        
        
    if (classDiviz.classList  == "symbolsClick") {
        classDiviz.classList.replace("symbolsClick", "symbols")
    }
    
    if (classMulti.classList  == "symbolsClick") {
        classMulti.classList.replace("symbolsClick", "symbols")
    }
    
    
    this.classList.replace("symbols", "symbolsClick");
    
    
    console.log("T h i s ID AFTER", this.getAttribute('class'));
    
    
    console.log("TEST DE CONTENU", this.classList.contains('symbolsClick')); // ?
    
    
    }
    

// ////////////////////////////////////////////////////////////////////////////////
