"use strict";
let arrOfSet = [];
//let arrTransSet = [];
let set = new Set();

field.addEventListener('keydown', inputInject);
btn.addEventListener('click', btnNewSet);
//btnResult.addEventListener('click', resultShow);

function inputInject(e) {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        let inputText = document.querySelector('input');
        const value = inputText.value.trim();
        if (value != '') {
            set.add(value);
        };
        field.value = '';
        inputShow();
    };
};

function inputShow() {
    const preInput = document.querySelector('#preInput');
    let strlist = '';
    const div = document.createElement('div');
    set.forEach((item, index) => {
        strlist = strlist+`<p>${item}</p>`;
    });
    preInput.lastElementChild.innerHTML = strlist;
};

function btnNewSet() {
    if (set.size != 0) {
        const newElem = document.querySelector('#preInput');
        let newInputSaved = document.createElement('div');
        const arrTransSet = [...set];
        arrOfSet.push(arrTransSet);
//    arrOfSet.at(-1);
        newInputSaved.className = 'input__saved';
        preInput.appendChild(newInputSaved);
        set.clear();
//        process();
        if (arrOfSet.length > 1) {
            const resultElem = document.querySelector('#resultElem');
            let strlist = '';
            arrOfSet.forEach.item((item, index) => {
//                item.forEach((item, index) {
                //            strlist = 0 элемент 0 массива + 0 элемент 1 массива;
          strlist = strlist + `<p>${arrTransSet[0]}`+`${arrTransSet[1]}</p>`;
//                });
            });
            resultElem.innerHTML = strlist;
            console.log(arrOfSet);
        };
    };
};

/*function process() {
//    for (i = 0; i < a.length; i++) {};
    const resultElem = document.querySelector('#resultElem');
    let strlist = '';
    arrOfSet.forEach((item, index) => {
        console.log(arrTransSet);
        //            strlist = 0 элемент 0 массива + 0 элемент 1 массива;
        strlist = strlist + `<p>${arrOfSet[0]}`+`${arr}</p>`;
    });
    resultElem.innerHTML = strlist;
};*/

function resultShow() {
    const resultElem = document.querySelector('#resultBlock');
};