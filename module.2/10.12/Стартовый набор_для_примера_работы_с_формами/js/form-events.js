let form = document.forms.lesson;
console.log(form);

let login = form.elements.login;
console.log(login.value);

login.value = "asghmnk";

let colorRadio = form.elements.color;
console.log(colorRadio);

let checkedValue = colorRadio.value;
console.log(checkedValue);

function changeBackground() {
    let dom = form.elements.checkbox_fieldset;
    dom.style.backgroundColor = colorRadio.value;
}

for (let i = 0; i < colorRadio.lenght; i++) {
    colorRadio[i].addEventListener('click', changeBackground);
}

let checkboxArr = form.elements["lang[]"];
console.log(checkboxArr);

let res = [];
for (let i = 0; i < checkboxArr.length; i++) {
    if (checkboxArr[i].checked) {
        res.push(checkboxArr[i].value);
    }
}
console.log(res);

let select = form.elements.countries;
console.dir(select);
let selectA = form.elements.countries;
console.dir(selectA);

let res2 = [];
for (let i = 0; i < selectA.length; i++) {
    if (selectA[i].selected) {
        res2.push(selectA[i].value);
    }
}
console.log(res2);

form.addEventListener('submit', myFunc);

function myFunc(e) {
    e.preventDefault();
    console.log(this);
    let fromData = new FormData(this);
    console.log(fromData);
    console.log(fromData.get('login'));
    console.log(fromData.getAll('lag[]'));
}

login.addEventListener("focus", funcFocus);

function funcFocus() {
    console.log("Элемент получил фокус");
}

login.addEventListener("blur", funcBlur);

function funcBlur() {
    console.log("Элемент потерял фокус");
}