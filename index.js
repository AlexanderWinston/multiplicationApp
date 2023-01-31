const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionElement = document.getElementById("question")

questionElement.innerText = `${num1} x ${num2}`;

const correctAnswer = num1 * num2;


