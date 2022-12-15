// variables
var accordionBtn = document.querySelectorAll('.accordionTitle');
var allTexts = document.querySelectorAll('.text');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click',
    function toggleAccordion(el) {
      var targetText = el.currentTarget.nextElementSibling.classList;
      var targetAccIcon = el.currentTarget.children[0];
      var target = el.currentTarget;
      



         accordionBtn.forEach(function (el) {
            el.classList.remove('accordionTitleActive');
            
            allTexts.forEach(function (el) {
               el.classList.remove('show');
            })
            
            accIcon.forEach(function (el) {
             el.classList.remove('anime');
            }) 
            
         })
         
            targetText.add('show');
            targetAccIcon.classList.add('anime');
            target.classList.add('accordionTitleActive');


   })
});