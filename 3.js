var input = document.querySelector('input');
var note =document.querySelector('.note');
var sound=document.querySelector('.sound');
var contants=document.querySelector('.contants');

sound.addEventListener('click', function() {
    sound.style.color="blue";
    setTimeout(function() {
        sound.style.color="rgb(0,0,0,0.35)";
    },1000);
})
async function getEnglish(input){
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    const result= await fetch(url);
    const eng = await result.json();
    vocabulary(eng);
    console.log(eng);
}
function vocabulary(english){ 
   if(english.title){
       note.innerHTML="Khong tim thay";
   }
   else{

   
    contants.classList.add('active'); 
    note.classList.add('hide'); 
    const text=document.querySelector('.text');
    text.innerText =english[0].word;
    var spelling=document.querySelector('.spelling');
    spelling.innerText =english[0].phonetics[1].text;
    var example=document.querySelector('.example_text');
    example.innerText =english[0].meanings[0].definitions[0].example;
    var meaning=document.querySelector('.meaning_text');
    meaning.innerText =english[0].meanings[0].definitions[0].definition;
}
  
}
input.addEventListener('keydown', function(e) {
if(e.keyCode==13){
   if(input.value!=""){
       getEnglish(input.value);
       note.innerText="searching...";
      
   }
  
}
})
const close=document.querySelector('.close_icon');
close.addEventListener('click', function(){
    input.value="";
    note.classList.remove('hide');
    note.innerText="type any exsting word and press enter to get meaning, example,synoyms, etc.";
    contants.classList.remove('active');
})