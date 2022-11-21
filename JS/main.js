//Traversing the DOM
let itemList = document.querySelector('#items');
//Parent Element
/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';
console.log(itemList.parentElement.parentElement.parentElement); */

//last Element child
/*console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = "yellow";*/

//last child
// console.log(itemList.lastChild);

//first Element child
/*console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = "teal";*/

//first child
// console.log(itemList.firstChild);

//next sibling
//console.log(itemList.nextSibling);

//next element sibling 
//console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.style.backgroundColor = "pink";

//previous Sibling
//console.log(itemList.previousSibling);

//previous Element Sibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.backgroundColor = "red";

//Create Element
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = "hello1";

//Set Attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
let newDivText = document.createTextNode('Hello World');

//append Child
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);


// var container1 = document.querySelector('ul .container1');
// var li = document.querySelector('ul li');

// container1.insertBefore(newDiv,li);