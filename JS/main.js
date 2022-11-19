document.title = "DOM Project";
let headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 2px black';
//Query selector
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = "green";

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = "hidden";


//Query selector All
// let items = document.querySelectorAll('li');
// for(let i=0;i<items.length;i++){
//     items[1].style.backgroundColor = 'green';   
// }
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'lightgrey';
    even[i].style.backgroundColor = 'grey';

}
