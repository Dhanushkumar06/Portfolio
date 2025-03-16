//show menu
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
            nav=document.getElementById(navId)

    if(toggle&&nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle','nav_menu')

//avtive & remove action
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n=>n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))

// Array of text strings to type
const texts = ["Front-End Developer", "UI/UX designer", "Java Programmer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector('.typing-text').textContent = letter;

  let typingSpeed = 200;

  if (!isDeleting && letter.length === currentText.length) {
    typingSpeed = 2000; // Pause at end of sentence
    isDeleting = true;
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    typingSpeed = 500; // Pause before starting new sentence
  }

  setTimeout(type, typingSpeed);
})();