const textAreaEl = document.getElementById("text-area");
const fontRange = document.getElementById("font-increment");
const fontBoldIcon = document.getElementById("font-bold");
const fontItalicIcon = document.getElementById("font-italic");
const fontUnderlineIcon = document.getElementById("font-underline");
const fontCapitalizeIcon = document.getElementById("font-capitalize");
const fontResetIcon = document.getElementById("reset-styles");
const fontColorInput = document.getElementById("choose-color");


//================================== INCREASE FONT SIZE ======================================
function fontIncrease(){
    let inputVal = fontRange.value;
    textAreaEl.style.fontSize = inputVal + "px";
}
fontRange.addEventListener('input', fontIncrease);


//============================ CHANGE FONT TO BOLD ========================================
let isBold = false;
function fontBold(){
    if(!isBold){
        textAreaEl.style.fontWeight = "bold";
        isBold =  true;
        fontBoldIcon.classList.add("active")
    }else {
        textAreaEl.style.fontWeight = "normal";
        isBold = false;
        fontBoldIcon.classList.remove("active")
    }

}


fontBoldIcon.addEventListener('click', fontBold);

// =====================================ITALISE  TEXT ====================================================
let isItalic = false;
function fontItalic(){
    if(!isItalic){
        textAreaEl.style.fontStyle = "italic";
        isItalic =  true;
        fontItalicIcon.classList.add("active")
    }else {
        textAreaEl.style.fontStyle = "normal";
        isItalic = false;
        fontItalicIcon.classList.remove("active")
    }

}

fontItalicIcon.addEventListener('click', fontItalic)

// =====================================UNDERLINE  TEXT ====================================================
let isUnderline = false;
function fontUnderline(){
    if(!isUnderline){
        textAreaEl.style.textDecoration = "underline";
        isUnderline =  true;
        fontUnderlineIcon.classList.add("active");
    }else {
        textAreaEl.style.textDecoration = "none";
        isUnderline = false;
        fontUnderlineIcon.classList.remove("active");
    }

}

fontUnderlineIcon.addEventListener('click', fontUnderline)

// =====================================CAPITALIZE  TEXT ====================================================
let isCapitalize = false;
function fontCapitalize(){
    if(!isCapitalize){
        textAreaEl.style.textTransform = "uppercase";
        isCapitalize =  true;
        fontCapitalizeIcon.classList.add("active");
    }else {
        textAreaEl.style.textTransform = "";
        isCapitalize = false;
        fontCapitalizeIcon.classList.remove("active");
    }

}

fontCapitalizeIcon.addEventListener('click', fontCapitalize)


//================================RESET DEFAULT =============================
function fontReset(){
    fontBoldIcon.classList.remove("active");
    fontItalicIcon.classList.remove("active");
    fontUnderlineIcon.classList.remove("active");
    fontCapitalizeIcon.classList.remove("active");
    textAreaEl.style.fontSize = "16px";
    fontRange.value = 16;
    textAreaEl.style.textTransform = "lowercase";
    textAreaEl.style.textDecoration = "none";
    textAreaEl.style.fontStyle = "normal";
    textAreaEl.style.fontWeight = "normal";
    textAreaEl.style.textAlign = 'left';
    textAreaEl.value = "";
}
fontResetIcon.addEventListener('click', fontReset)


//================================== CHOOSE COLOR INPUT ELEMENT ==================================
function chooseColor(){
    let colorInput = fontColorInput.value;
    textAreaEl.style.color = colorInput
}
fontColorInput.addEventListener('change', chooseColor)

// =====================================ALIGN TEXT ====================================================
const divElement = document.querySelector('.text-align');
const spanElements = divElement.querySelectorAll('span');

spanElements.forEach((span) => {
    span.addEventListener('click', () => {
        const iconName = span.firstChild.className;

        if (iconName.includes('fa-align-left')) {
            textAreaEl.style.textAlign = 'left';
        } else if (iconName.includes('fa-align-center')) {
            textAreaEl.style.textAlign = 'center';
        } else if (iconName.includes('fa-align-right')) {
            textAreaEl.style.textAlign = 'right';
        }
    
    });
  });
  