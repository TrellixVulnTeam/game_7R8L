const controls=document.querySelectorAll('.control');
const section=document.querySelectorAll('.section');
controls.forEach(function(item,index) {
    item.addEventListener('click', function(e) {
        deleteColor();
        item.classList.add('active_btn');
        let active=item.dataset.id;
        document.getElementById(active).classList.add('active');
    })
})
function deleteColor(){
controls.forEach((index) =>{
    index.classList.remove('active_btn');
})
section.forEach(index =>{
    index.classList.remove('active');
})
}
const themebtn=document.querySelector('.theme_btn');
themebtn.addEventListener('click', function(){
    document.documentElement.classList.toggle('light-mode');
   
})