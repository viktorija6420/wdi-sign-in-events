document.addEventListener('DOMContentLoaded', function(){

  var signin = document.querySelector('.signin');
  var modal = document.querySelector('.modal');

// 1. When the user presses the .signin button, fade in the modal window
//NO IDEA HOW TO FADE IN
// signin.addEventListener('click', function(){
//
// });


//2. When the user presses the .close button, fade out the modal window
  var close = document.querySelector('.close');
  close.addEventListener('click', function(){
     close.style.display = 'none';
  });

//3. When the user presses the .submit button, add an .error class to both input elements

  var submit = document.querySelector('.submit');
    submit.addEventListener('click', function(){
    this.classList.add('error');
  });

//4. When the user puts their cursor in one of the input fields, remove the .error class
  var input = document.querySelector('input');
  input.addEventListener('mouseover', function(){
    submit.classList.remove('error');
  })

});
