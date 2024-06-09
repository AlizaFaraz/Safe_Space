document.addEventListener('DOMContentLoaded', (event) => {
// To-Do List Functionality 
  //WHYS THIS NOT WORKINGEJLWGYBRJEBJGRJB????!!!😭😭😭😭
  //nvm it works now <3
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task');
  const tasksList = document.getElementById('tasks');
  const questionElement = document.getElementById('question');
  const answerInput = document.getElementById('answer');
  const submitButton = document.getElementById('submit-answer');
  const resultElement = document.getElementById('result');
//an empty variable to store the value of the correct answer!
  let correctAnswer;

  addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
      taskInput.focus();
    }
  });

  function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasksList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    tasksList.appendChild(li);
  }

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    questionElement.textContent = `What is ${num1} x ${num2}?`;
  }

  function checkAnswer() {
    const userAnswer = parseInt(answerInput.value, 10);
    if (userAnswer === correctAnswer) {
      resultElement.textContent = 'Correct!';
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
      resultElement.style.color = 'red';
    }
    answerInput.value = '';
    generateQuestion();
  }

  submitButton.addEventListener('click', checkAnswer);

  generateQuestion();

  // Flashcards Functionality
  const flashcards = [
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' }
  ];

  let currentCardIndex = 0;
  const flashcardElement = document.getElementById('flashcard');
  const flashcardQuestionElement = flashcardElement.querySelector('.front');
  const answerElement = flashcardElement.querySelector('.back');
  const nextCardButton = document.getElementById('next-card');

  function showFlashcard(index) {
    flashcardQuestionElement.textContent = flashcards[index].question;
    answerElement.textContent = flashcards[index].answer;
  }

  flashcardElement.addEventListener('click', () => {
    flashcardElement.classList.toggle('flip');
  });

  nextCardButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    flashcardElement.classList.remove('flip');
    showFlashcard(currentCardIndex);
  });

  showFlashcard(currentCardIndex);
  
  });