/**
 * Kinesthetic Learning Example
 * Demonstrates interactive quizzes and gamified exercises
 */

const KinestheticLearning = require('../src/kinesthetic/kinestheticLearning');

const kinesthetic = new KinestheticLearning();

console.log('\n🎮 KINESTHETIC LEARNING EXAMPLES\n');
console.log('='.repeat(60));

// Example 1: Interactive Quiz
console.log('\n1. Interactive Quiz Creation:');
const quizData = {
  title: 'JavaScript Fundamentals Quiz',
  difficulty: 'medium',
  questions: [
    {
      question: 'What keyword is used to declare a constant in JavaScript?',
      type: 'multiple-choice',
      options: ['var', 'let', 'const', 'constant'],
      correctAnswer: 'const',
      explanation: 'const is used to declare constants that cannot be reassigned.'
    },
    {
      question: 'JavaScript is a compiled language.',
      type: 'true-false',
      correctAnswer: false,
      explanation: 'JavaScript is an interpreted language, not compiled.'
    },
    {
      question: 'What does DOM stand for?',
      type: 'fill-blank',
      correctAnswer: 'Document Object Model',
      hint: 'Think about the structure of web pages',
      explanation: 'DOM stands for Document Object Model, representing the HTML structure.'
    }
  ]
};

const quiz = kinesthetic.createInteractiveQuiz(quizData);
console.log('Quiz Title:', quiz.title);
console.log('Difficulty:', quiz.difficulty);
console.log('Total Questions:', quiz.totalQuestions);
console.log('Time Limit:', quiz.timeLimit, 'seconds');
console.log('Passing Score:', quiz.passingScore, 'points');
console.log('\nQuestions:');
quiz.questions.forEach(q => {
  console.log(`\n  Q${q.id}: ${q.question}`);
  console.log(`  Type: ${q.type}`);
  console.log(`  Points: ${q.points}`);
  if (q.options.length > 0) {
    console.log(`  Options: ${q.options.join(', ')}`);
  }
});

// Example 2: Answer Checking
console.log('\n\n2. Checking Quiz Answers:');
const answer1 = { response: 'const' };
const result1 = kinesthetic.checkAnswer(answer1, quiz.questions[0]);
console.log('Answer:', answer1.response);
console.log('Result:', result1.feedback);
console.log('Points Earned:', result1.points);
console.log('Total Score:', result1.totalScore);
console.log('Streak:', result1.streak);

const answer2 = { response: false };
const result2 = kinesthetic.checkAnswer(answer2, quiz.questions[1]);
console.log('\nAnswer:', answer2.response);
console.log('Result:', result2.feedback);
console.log('Points Earned:', result2.points);
console.log('Total Score:', result2.totalScore);
console.log('Streak:', result2.streak);

// Example 3: Gamified Exercise
console.log('\n\n3. Gamified Exercise:');
const exerciseData = {
  title: 'JavaScript Coding Challenge',
  type: 'challenge',
  difficulty: 'hard',
  tasks: [
    { description: 'Write a function that reverses a string', action: 'code', xp: 20 },
    { description: 'Create an array of 5 numbers', action: 'code', xp: 10 },
    { description: 'Use a loop to iterate through the array', action: 'code', xp: 15 },
    { description: 'Apply array methods (map, filter, reduce)', action: 'code', xp: 25 }
  ],
  rewards: {
    xp: 150,
    badge: '🏆 Code Master',
    unlocks: 'Advanced JavaScript Module'
  }
};

const exercise = kinesthetic.createGamifiedExercise(exerciseData);
console.log('Exercise:', exercise.title);
console.log('Type:', exercise.type, exercise.icon);
console.log('Difficulty:', exercise.difficulty);
console.log('\nTasks:');
exercise.tasks.forEach(task => {
  console.log(`  ${task.id}. ${task.description} (+${task.xp} XP)`);
});
console.log('\nRewards:');
console.log(`  Total XP: ${exercise.rewards.xp}`);
console.log(`  Badge: ${exercise.rewards.badge}`);
console.log(`  Unlocks: ${exercise.rewards.unlocks}`);

// Example 4: Complete Tasks
console.log('\n\n4. Completing Exercise Tasks:');
const completion1 = kinesthetic.completeTask(exercise, 1);
console.log('Task 1:', completion1.message);
console.log('XP Earned:', completion1.xpEarned);
console.log('Total XP:', completion1.totalXP);

const completion2 = kinesthetic.completeTask(exercise, 2);
console.log('\nTask 2:', completion2.message);

const completion3 = kinesthetic.completeTask(exercise, 3);
console.log('Task 3:', completion3.message);

const completion4 = kinesthetic.completeTask(exercise, 4);
console.log('Task 4:', completion4.message);
console.log('Exercise Complete:', completion4.exerciseComplete);

// Example 5: Flashcard Drill
console.log('\n\n5. Flashcard Drill:');
const flashcards = [
  { front: 'What is a closure?', back: 'A function that has access to variables in its outer scope' },
  { front: 'What is hoisting?', back: 'JavaScript behavior of moving declarations to the top' },
  { front: 'What is the spread operator?', back: '... operator used to expand arrays or objects' },
  { front: 'What is destructuring?', back: 'Syntax for extracting values from arrays or objects' }
];

const drill = kinesthetic.createFlashcardDrill(flashcards);
console.log('Flashcard Drill:', drill.type, drill.icon);
console.log('Total Cards:', drill.cards.length);
console.log('\nCards:');
drill.cards.slice(0, 2).forEach(card => {
  console.log(`\n  Card ${card.id}:`);
  console.log(`    Front: ${card.front}`);
  console.log(`    Back: ${card.back}`);
});

// Review a flashcard
const reviewResult = kinesthetic.reviewFlashcard(drill.cards[0], true);
console.log('\nReview Result:', reviewResult.message);
console.log('XP Earned:', reviewResult.xp);

// Example 6: Player Stats
console.log('\n\n6. Player Progress and Stats:');
const stats = kinesthetic.getPlayerStats();
console.log('Level:', stats.level);
console.log('Total Score:', stats.score);
console.log('Current Streak:', stats.streak);
console.log('Rank:', stats.rank);
console.log('Next Level XP:', stats.nextLevelXP);
console.log('\nAchievements:');
stats.achievements.forEach(achievement => {
  console.log(`  ${achievement.title} - ${achievement.description}`);
});

// Example 7: Learning Game
console.log('\n\n7. Learning Games:');
const wordMatchGame = kinesthetic.createLearningGame({
  name: 'JavaScript Term Match',
  type: 'word-match',
  content: {
    pairs: [
      { term: 'const', definition: 'Declares a constant' },
      { term: 'let', definition: 'Declares a variable' },
      { term: 'function', definition: 'Declares a function' }
    ]
  }
});
console.log('Game:', wordMatchGame.name, wordMatchGame.icon);
console.log('Type:', wordMatchGame.type);
console.log('Time Limit:', wordMatchGame.timeLimit, 'seconds');
console.log('Points:', wordMatchGame.points);

console.log('\n' + '='.repeat(60));
console.log('✅ Kinesthetic learning examples complete!\n');
