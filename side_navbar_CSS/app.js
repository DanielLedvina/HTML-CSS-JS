let myList = document.querySelector("ul");
let listItems = myList.children;

for (let i = 0; i < listItems.length; i++) {

    listItems[i].style.marginLeft = i * 5 + "px";
}