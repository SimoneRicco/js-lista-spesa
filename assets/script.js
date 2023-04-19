const arrList = [
    "patate",
    "fagioli",
    "latte",
    "uova",
    "salame",
    "spinaci",
    "mele",
    "insalata",
    "birra"
];
const list = document.querySelector("#list");
let i = 0;
while (i < arrList.length) {
    console.log(arrList[i]);
    list.innerHTML += '<li>' + arrList[i] + '</li>'
    i++;
}