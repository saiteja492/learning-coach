# Learning Coach Usage Guide

## Table of Contents
- [Getting Started](#getting-started)
- [Learning Styles](#learning-styles)
- [Visual Learning](#visual-learning)
- [Auditory Learning](#auditory-learning)
- [Kinesthetic Learning](#kinesthetic-learning)
- [Reading/Writing Learning](#readingwriting-learning)
- [Advanced Features](#advanced-features)
- [Tips and Best Practices](#tips-and-best-practices)

## Getting Started

### Quick Start

```bash
# Run the starter template
node starter.js

# Run the complete example
node examples/complete-example.js

# Run individual learning style examples
node examples/visual-example.js
node examples/auditory-example.js
node examples/kinesthetic-example.js
node examples/reading-writing-example.js
```

### Basic Setup

```javascript
const LearningCoach = require('./src/index');
const coach = new LearningCoach();

// Take the learning style assessment
const assessment = coach.getLearningStyleAssessment();

// Set your learning style
coach.setLearningStyle('visual'); // or auditory, kinesthetic, reading-writing, multimodal

// Generate a study plan
const plan = coach.generateStudyPlan({
  topic: 'Your Topic Here',
  duration: '4 weeks',
  currentLevel: 'beginner'
});
```

## Learning Styles

### Discovering Your Learning Style

Take the built-in assessment to discover which learning style suits you best:

```javascript
const assessment = coach.getLearningStyleAssessment();
console.log(assessment.questions);

// Answer the questions and use the scoring guide
console.log(assessment.scoring);
```

### Setting Your Learning Style

```javascript
// For visual learners
coach.setLearningStyle('visual');

// For auditory learners
coach.setLearningStyle('auditory');

// For kinesthetic learners
coach.setLearningStyle('kinesthetic');

// For reading/writing learners
coach.setLearningStyle('reading-writing');

// For multimodal learners (combines all styles)
coach.setLearningStyle('multimodal');
```

## Visual Learning

Visual learning is perfect for those who learn best through seeing and visualizing information.

### Creating Color-Coded Notes

```javascript
const visual = coach.getModule('visual');

// Create notes with different categories
const concept = visual.createColorCodedNote('Variables store data', 'concept');
const definition = visual.createColorCodedNote('let declares a variable', 'definition');
const example = visual.createColorCodedNote('let x = 5;', 'example');
const important = visual.createColorCodedNote('Always use const for constants', 'important');
```

### Generating Mind Maps

```javascript
const mindMap = visual.generateMindMap({
  topic: 'Web Development',
  branches: [
    {
      name: 'Frontend',
      subTopics: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      name: 'Backend',
      subTopics: ['Node.js', 'Databases', 'APIs']
    },
    {
      name: 'DevOps',
      subTopics: ['Git', 'CI/CD', 'Docker']
    }
  ]
});

console.log(mindMap);
```

### Creating Diagrams

```javascript
// Flowchart
const flowchart = visual.createDiagram({
  type: 'flowchart',
  elements: ['Start', 'Input Data', 'Process', 'Output', 'End']
});

// Comparison
const comparison = visual.createDiagram({
  type: 'comparison',
  elements: [
    { name: 'React', description: 'Component-based library' },
    { name: 'Vue', description: 'Progressive framework' },
    { name: 'Angular', description: 'Full-featured framework' }
  ]
});
```

## Auditory Learning

Auditory learning is ideal for those who learn best through listening and speaking.

### Text-to-Speech Conversion

```javascript
const auditory = coach.getModule('auditory');

const speech = auditory.textToSpeech('JavaScript is powerful', {
  rate: 'normal', // slow, normal, or fast
  emphasis: ['JavaScript', 'powerful']
});

console.log(speech.text);
console.log(`Duration: ${speech.duration}`);
```

### Creating Podcast Summaries

```javascript
const podcast = auditory.createPodcastSummary({
  topic: 'Introduction to React',
  points: [
    {
      title: 'What is React?',
      explanation: 'React is a JavaScript library for building user interfaces.',
      example: 'it powers Facebook, Instagram, and many other popular apps.'
    },
    {
      title: 'Components',
      explanation: 'React uses components to build UIs.',
      example: 'think of components like LEGO blocks you can combine.'
    }
  ],
  conclusion: 'React makes building interactive UIs straightforward and efficient.'
});

console.log(podcast);
```

### Creating Study Playlists

```javascript
const playlist = auditory.createStudyPlaylist([
  { title: 'Introduction', duration: '5:00', type: 'overview' },
  { title: 'Core Concepts', duration: '15:00', type: 'lecture' },
  { title: 'Practice', duration: '10:00', type: 'exercise' }
]);

console.log(playlist);
```

## Kinesthetic Learning

Kinesthetic learning is perfect for those who learn best through hands-on practice and interaction.

### Creating Interactive Quizzes

```javascript
const kinesthetic = coach.getModule('kinesthetic');

const quiz = kinesthetic.createInteractiveQuiz({
  title: 'React Basics Quiz',
  difficulty: 'medium',
  questions: [
    {
      question: 'What is JSX?',
      type: 'multiple-choice',
      options: ['A JavaScript extension', 'A CSS framework', 'A database', 'A server'],
      correctAnswer: 'A JavaScript extension',
      explanation: 'JSX is a syntax extension for JavaScript used in React.'
    },
    {
      question: 'React is a framework.',
      type: 'true-false',
      correctAnswer: false,
      explanation: 'React is a library, not a framework.'
    }
  ]
});

// Check answers
const result = kinesthetic.checkAnswer(
  { response: 'A JavaScript extension' },
  quiz.questions[0]
);

console.log(result.feedback);
console.log(`Score: ${result.totalScore}`);
```

### Creating Gamified Exercises

```javascript
const exercise = kinesthetic.createGamifiedExercise({
  title: 'Build Your First Component',
  type: 'challenge',
  difficulty: 'medium',
  tasks: [
    { description: 'Create a functional component', action: 'code', xp: 20 },
    { description: 'Add props to your component', action: 'code', xp: 25 },
    { description: 'Use the component in an app', action: 'code', xp: 30 }
  ],
  rewards: {
    xp: 100,
    badge: '🏆 Component Master',
    unlocks: 'Advanced Components Module'
  }
});

// Complete tasks
const completion = kinesthetic.completeTask(exercise, 1);
console.log(completion.message);
```

### Creating Flashcard Drills

```javascript
const flashcards = [
  { front: 'What is a component?', back: 'A reusable piece of UI' },
  { front: 'What are props?', back: 'Data passed to components' },
  { front: 'What is state?', back: 'Data that changes over time' }
];

const drill = kinesthetic.createFlashcardDrill(flashcards);

// Review a card
const review = kinesthetic.reviewFlashcard(drill.cards[0], true);
console.log(review.message);
```

### Tracking Progress

```javascript
const stats = kinesthetic.getPlayerStats();
console.log(`Level: ${stats.level}`);
console.log(`Score: ${stats.score}`);
console.log(`Rank: ${stats.rank}`);
console.log(`Achievements: ${stats.achievements.length}`);
```

## Reading/Writing Learning

Reading/Writing learning is ideal for those who learn best through reading and writing.

### Creating Smart Notes

```javascript
const readingWriting = coach.getModule('reading-writing');

// Cornell style notes
const note = readingWriting.createSmartNotes('React uses a virtual DOM for efficiency', {
  style: 'cornell',
  highlightKeywords: true
});

console.log(note.structure);
console.log(`Keywords: ${note.keywords.join(', ')}`);

// Other styles: 'outline', 'mapping', 'charting'
```

### Generating Summaries

```javascript
// Paragraph summary
const summary = readingWriting.generateSummary('Long content here...', {
  type: 'paragraph',
  length: 'short'
});

// Bullet summary
const bullets = readingWriting.generateSummary('Long content here...', {
  type: 'bullet',
  length: 'medium'
});

// Executive summary
const executive = readingWriting.generateSummary('Long content here...', {
  type: 'executive',
  length: 'long'
});
```

### Getting Writing Prompts

```javascript
// Reflective prompts
const reflective = readingWriting.generateWritingPrompts({
  subject: 'React Hooks',
  type: 'reflective'
});

// Analytical prompts
const analytical = readingWriting.generateWritingPrompts({
  subject: 'React Hooks',
  type: 'analytical'
});

// Creative prompts
const creative = readingWriting.generateWritingPrompts({
  subject: 'React Hooks',
  type: 'creative'
});

// Practical prompts
const practical = readingWriting.generateWritingPrompts({
  subject: 'React Hooks',
  type: 'practical'
});
```

### Creating Study Guides

```javascript
const studyGuide = readingWriting.createStudyGuide({
  title: 'React Hooks Study Guide',
  material: 'Your learning material here...',
  learningObjectives: [
    'Understand useState',
    'Master useEffect',
    'Apply custom hooks'
  ]
});

console.log(studyGuide);
```

### Exporting Notes

```javascript
// Export as Markdown
const markdown = readingWriting.exportNote(note, 'markdown');

// Export as text
const text = readingWriting.exportNote(note, 'text');

// Export as JSON
const json = readingWriting.exportNote(note, 'json');
```

## Advanced Features

### Processing Content for All Learning Styles

```javascript
const content = 'Your learning content here...';
const processed = coach.processContent(content);

// Access all formats
console.log(processed.visual);
console.log(processed.auditory);
console.log(processed.kinesthetic);
console.log(processed.readingWriting);
```

### Creating Study Plans

```javascript
const plan = coach.generateStudyPlan({
  topic: 'Full Stack Development',
  duration: '12 weeks',
  currentLevel: 'intermediate'
});

console.log(plan.schedule);
console.log(plan.activities);
console.log(plan.milestones);
```

### Getting Progress Reports

```javascript
const progress = coach.getProgressReport();

console.log(progress.kinestheticStats);
console.log(`Notes: ${progress.notes}`);
console.log(`Summaries: ${progress.summaries}`);
console.log(progress.achievements);
console.log(progress.recommendations);
```

## Tips and Best Practices

### For Visual Learners
1. Use mind maps to connect related concepts
2. Color-code your notes by category
3. Create diagrams for complex processes
4. Use visual markers to organize information

### For Auditory Learners
1. Listen to content summaries during commute
2. Record yourself explaining concepts
3. Use chapter markers to organize long content
4. Create study playlists for different topics

### For Kinesthetic Learners
1. Take quizzes regularly to reinforce learning
2. Complete gamified exercises for engagement
3. Use flashcards for active recall
4. Track your progress and maintain streaks

### For Reading/Writing Learners
1. Take detailed notes using different styles
2. Create summaries in your own words
3. Respond to writing prompts regularly
4. Export and organize your notes

### General Tips
1. **Be Consistent**: Study regularly, even if for short periods
2. **Mix Styles**: Try multimodal learning for comprehensive understanding
3. **Take Breaks**: Use the Pomodoro technique (25 min work, 5 min break)
4. **Track Progress**: Monitor your achievements and stats
5. **Review Regularly**: Revisit notes and summaries periodically
6. **Set Goals**: Create study plans with specific milestones
7. **Stay Engaged**: Use gamification features to stay motivated
8. **Experiment**: Try different approaches to find what works best

---

For more information, see the [API Documentation](API.md) or explore the example files in the `examples/` directory.
