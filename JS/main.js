document.title = "DOM Project";
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Good Morning';
headerTitle.style.borderBottom = 'solid 2px black';

//Get element bt class name
// let items = document.getElementsByClassName('list-group-item');
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
//     items[i].style.backgroundColor = "green"
// }
 

//Get element bt tag name
let items = document.getElementsByTagName('li');
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = "bold";
    items[i].style.backgroundColor = "yellow"
}

