/**
 * Learning Coach Starter Template
 * Use this file to get started with your personalized learning journey
 */

const LearningCoach = require('./src/index');

// Initialize your Learning Coach
const coach = new LearningCoach();

console.log('\n🎓 WELCOME TO YOUR LEARNING JOURNEY!\n');

// Step 1: Take the Learning Style Assessment
console.log('STEP 1: Discover Your Learning Style');
console.log('=====================================\n');

const assessment = coach.getLearningStyleAssessment();
console.log(`${assessment.title}\n${assessment.instructions}\n`);

// Display one sample question
console.log('Sample Question:');
console.log(`${assessment.questions[0].question}\n`);
Object.entries(assessment.questions[0].options).forEach(([key, value]) => {
  console.log(`  ${key}) ${value}`);
});

console.log('\n💡 Tip: Answer all questions honestly to get the best results!\n');

// Step 2: Set Your Learning Style
console.log('\nSTEP 2: Set Your Learning Style');
console.log('================================\n');

// Uncomment and choose your preferred learning style:
// coach.setLearningStyle('visual');         // For visual learners
// coach.setLearningStyle('auditory');       // For auditory learners
// coach.setLearningStyle('kinesthetic');    // For kinesthetic learners
// coach.setLearningStyle('reading-writing'); // For reading/writing learners
coach.setLearningStyle('multimodal');        // For multimodal learners (default)

// Step 3: Create Your Study Plan
console.log('\n\nSTEP 3: Create Your Study Plan');
console.log('================================\n');

const myStudyPlan = coach.generateStudyPlan({
  topic: 'JavaScript Fundamentals',  // Change this to your topic
  duration: '4 weeks',               // Adjust your timeline
  currentLevel: 'beginner'           // beginner, intermediate, or advanced
});

console.log(`Topic: ${myStudyPlan.topic}`);
console.log(`Duration: ${myStudyPlan.duration}`);
console.log(`Level: ${myStudyPlan.level}\n`);

console.log('Your Schedule:');
console.log(`  • ${myStudyPlan.schedule.daily}`);
console.log(`  • ${myStudyPlan.schedule.weekly}`);
console.log(`  • Breaks: ${myStudyPlan.schedule.breaks}`);
console.log(`  • Review: ${myStudyPlan.schedule.review}\n`);

console.log('Milestones:');
myStudyPlan.milestones.forEach(milestone => {
  console.log(`  ✓ Week ${milestone.week}: ${milestone.goal}`);
});

// Step 4: Start Learning!
console.log('\n\nSTEP 4: Start Learning!');
console.log('========================\n');

// Example: Process some learning content
const learningContent = `
Functions are one of the fundamental building blocks in JavaScript. 
A function is a reusable block of code designed to perform a particular task.
Functions can take inputs (parameters) and return outputs (return values).
`;

console.log('Sample Learning Content:');
console.log(learningContent);

console.log('\nProcessed Content:\n');
const processed = coach.processContent(learningContent.trim());

// Show what's available for your learning style
if (processed.visual) {
  console.log('📊 Visual Resources Available:');
  console.log(`  ${processed.visual.available.join(', ')}\n`);
}

if (processed.auditory) {
  console.log('🎧 Auditory Resources Available:');
  console.log(`  ${processed.auditory.available.join(', ')}\n`);
}

if (processed.kinesthetic) {
  console.log('🎮 Kinesthetic Resources Available:');
  console.log(`  ${processed.kinesthetic.available.join(', ')}\n`);
}

if (processed.readingWriting) {
  console.log('📝 Reading/Writing Resources Available:');
  console.log(`  ${processed.readingWriting.available.join(', ')}`);
  console.log(`\n  Quick Summary:\n  ${processed.readingWriting.summary}\n`);
}

// Step 5: Explore Learning Modules
console.log('\nSTEP 5: Explore Individual Modules');
console.log('====================================\n');

console.log('Access specific learning modules:');
console.log('  • Visual Module: coach.getModule("visual")');
console.log('  • Auditory Module: coach.getModule("auditory")');
console.log('  • Kinesthetic Module: coach.getModule("kinesthetic")');
console.log('  • Reading/Writing Module: coach.getModule("reading-writing")');

console.log('\nExample: Using the Kinesthetic Module');
const kinesthetic = coach.getModule('kinesthetic');
const quickQuiz = kinesthetic.createInteractiveQuiz({
  title: 'Quick Knowledge Check',
  questions: [
    {
      question: 'What is a JavaScript function?',
      type: 'multiple-choice',
      options: [
        'A data type',
        'A reusable block of code',
        'A variable',
        'A loop'
      ],
      correctAnswer: 'A reusable block of code',
      explanation: 'Functions are reusable blocks of code that perform specific tasks.'
    }
  ]
});

console.log(`\n  ${quickQuiz.title}`);
console.log(`  Question: ${quickQuiz.questions[0].question}`);
console.log(`  Options: ${quickQuiz.questions[0].options.join(', ')}`);

// Step 6: Track Your Progress
console.log('\n\nSTEP 6: Track Your Progress');
console.log('============================\n');

const progress = coach.getProgressReport();
console.log(`Level: ${progress.kinestheticStats.level}`);
console.log(`Total XP: ${progress.kinestheticStats.score}`);
console.log(`Rank: ${progress.kinestheticStats.rank}`);

if (progress.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');
  progress.recommendations.forEach(rec => {
    console.log(`  • ${rec}`);
  });
}

// Next Steps
console.log('\n\n🎯 NEXT STEPS');
console.log('=============\n');

console.log('1. Explore the examples/ directory for detailed usage:');
console.log('   • node examples/visual-example.js');
console.log('   • node examples/auditory-example.js');
console.log('   • node examples/kinesthetic-example.js');
console.log('   • node examples/reading-writing-example.js');
console.log('   • node examples/complete-example.js\n');

console.log('2. Customize this starter file for your needs\n');

console.log('3. Read the documentation:');
console.log('   • docs/API.md - Full API reference');
console.log('   • config/default.js - Configuration options\n');

console.log('4. Start your learning journey! 🚀\n');

console.log('='.repeat(60));
console.log('Happy Learning! Remember: The best learning style is the');
console.log('one that works for YOU. Experiment and find your path!');
console.log('='.repeat(60) + '\n');
