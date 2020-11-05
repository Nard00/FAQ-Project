
var child2 = document.getElementsByClassName('child2');
var p_arrow = document.querySelectorAll('.arrow');
var p_main = document.querySelectorAll('.question')

function rem(ev){
   ev.currentTarget.classList.toggle("active_arrow");
   const p_bold = ev.currentTarget.previousElementSibling;
   const arrow_parent = ev.currentTarget.parentElement;
   p_bold.classList.toggle('bold');
   const grand = arrow_parent.parentElement;
   grand.lastElementChild.classList.toggle('active');

}

  
p_arrow.forEach(function(arrows){
    arrows.addEventListener('click', rem);
   });
    