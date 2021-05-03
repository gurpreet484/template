const menuBox = document.getElementById('menuBox');
const menuBtn = document.getElementById('menuBtn');
const listItems = document.getElementById('listItems');

menuBox.onclick = function(){
    menuBtn.classList.toggle('close');
    listItems.classList.toggle('show');
}

listItems.onclick = function(){
    listItems.classList.remove('show');
    menuBtn.classList.remove('close');
}