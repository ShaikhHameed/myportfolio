const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor);



(function() {

  var word = ['Web Developer', 'Web Designer', 'Artist'];
  var element = document.getElementsByClassName('flipper')[0];
  var wordIndex = 1;

  var resetAnimation = function() {
    element.classList.remove('flip');
  }

  setInterval(function(){
      switch (wordIndex) {
        case 0:
          element.classList.add('flip');
          element.textContent = word[wordIndex];
          wordIndex = 1;
          setTimeout(resetAnimation, 1000);
        break;

        case 1:
          element.classList.add('flip');
          element.textContent = word[wordIndex];
          wordIndex = 2;
          setTimeout(resetAnimation, 1000);
        break;

        case 2:
          element.classList.add('flip');
          element.textContent = word[wordIndex];
          wordIndex = 3;
          setTimeout(resetAnimation, 1000);
        break;
      }
  },2000)
}());



