//alert('Hola mundo!');
//Declaración de variable de una variable ES5
//var toggleBtn = document.getElementById('mode-toggle-btn');
//Declaración de variable de una variable ES6
//let toggleBtn = document.querySelector('#mode-toggle-btn');

let toggleBtn = document.querySelector('#mode-toggle-btn');
let icon = toggleBtn.querySelector('i');

function toggleTheme(){

toggleBtn.addEventListener('click', function() {
   document.body.classList.toggle('dark-mode');

   if (document.body.classList.contains('dark-mode')){
    localStorage.setItem('theme','dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
   } else {
    localStorage.setItem('theme','light');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
   }
 }

toggleBtn.addEventListener('click',function() {
    toggleTheme();

});

if(localStorage.getItem('theme')){
    toggleTheme();
}