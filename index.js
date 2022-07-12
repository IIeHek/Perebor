"use strict";
let arrOfSet = [];
let set = new Set();

field.addEventListener('keydown', inputInject);
btn.addEventListener('click', btnNewSet);

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
    set.forEach((item) => {
        strlist = strlist+`<p>${item}</p>`;
    });
    preInput.lastElementChild.innerHTML = strlist;
};

function btnNewSet() {
    const newElem = document.querySelector('#preInput');
    let newInputSaved = document.createElement('div');
    arrOfSet.push(set);
    setCreate();
    //Нужно получить последний элемент массива, для дальнейшего добавление в него значений, через set
    arrOfSet.at(-1);
    newInputSaved.className = 'input__saved';
    preInput.appendChild(newInputSaved);
    
    let strlist = '';
    set.forEach((item) => {
        strlist = strlist+`<p>${item}</p>`;
    });
    preInput.lastElementChild.innerHTML = strlist;
};

function setCreate() {
    let set = new Set();
    arrOfSet.push(set);
}