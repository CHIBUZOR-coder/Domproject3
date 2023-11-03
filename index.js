 const answers = document.getElementsByClassName('content');
 console.log(answers);


// const questions = document.querySelectorAll('.question');

// for (let i = 0; i < questions.length; i++) {
//   questions[i].addEventListener('click', function active() {
//     this.nextElementSibling.classList.toggle('active');
//   });
// }



function act() {
  this.classList.toggle('active');
}

for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener('click', act);
}


// function act() {
//     this.nextElementSibling.classList.toggle('active');
//   }


// for (let i = 0; i < questions.length; i++) {
// questions[i].addEventListener('click', act);
// }
