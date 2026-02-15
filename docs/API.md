# Learning Coach - Personal Learning Assistant

A comprehensive Personal Learning Assistant that adapts to different learning styles: visual, auditory, kinesthetic, and reading/writing.

## 🎯 Features

### 📊 Visual Learning
- **Mind Maps**: Create visual representations of concepts and their relationships
- **Diagrams**: Generate flowcharts, hierarchies, and comparison diagrams
- **Color-Coded Notes**: Organize notes with color coding for different categories

### 🎧 Auditory Learning
- **Text-to-Speech**: Convert text to speech-ready format with pauses and emphasis
- **Podcast-Style Summaries**: Generate engaging audio summaries in podcast format
- **Chapter Markers**: Create timestamped chapters for audio content
- **Study Playlists**: Organize learning content into audio playlists

### 🎮 Kinesthetic Learning
- **Interactive Quizzes**: Create quizzes with multiple question types
- **Gamified Exercises**: Turn learning into engaging challenges with XP and badges
- **Flashcard Drills**: Practice with interactive flashcards
- **Learning Games**: Play educational games (word match, sequencing, categorization)
- **Progress Tracking**: Track levels, scores, achievements, and streaks

### 📝 Reading/Writing Learning
- **Smart Notes**: Create structured notes in Cornell, Outline, Mapping, or Charting styles
- **Summaries**: Generate summaries in paragraph, bullet, abstract, or executive formats
- **Writing Prompts**: Get reflective, analytical, creative, or practical writing prompts
- **Study Guides**: Create comprehensive study guides with objectives and review questions
- **Note Templates**: Use pre-built templates for lectures, reading, and meetings
- **Export Options**: Export notes in Markdown, Text, or JSON formats

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/saiteja492/learning-coach.git

# Navigate to the directory
cd learning-coach

# Install dependencies (if any are added in the future)
npm install
```

## 🚀 Quick Start

### Basic Usage

```javascript
const LearningCoach = require('./src/index');

// Initialize the Learning Coach
const coach = new LearningCoach();

// Set your learning style
coach.setLearningStyle('visual');  // or 'auditory', 'kinesthetic', 'reading-writing', 'multimodal'

// Process learning content
const content = 'JavaScript is a versatile programming language...';
const processed = coach.processContent(content);

// Generate a study plan
const plan = coach.generateStudyPlan({
  topic: 'JavaScript Fundamentals',
  duration: '4 weeks',
  currentLevel: 'beginner'
});

// Check your progress
const progress = coach.getProgressReport();
```

### Running Examples

```bash
# Run the complete example
node examples/complete-example.js

# Run individual learning style examples
node examples/visual-example.js
node examples/auditory-example.js
node examples/kinesthetic-example.js
node examples/reading-writing-example.js
```

## 📚 Learning Modules

### Visual Learning Module

```javascript
const VisualLearning = require('./src/visual/visualLearning');
const visual = new VisualLearning();

// Create color-coded notes
const note = visual.createColorCodedNote('JavaScript is powerful', 'concept');

// Generate mind map
const mindMap = visual.generateMindMap({
  topic: 'Programming Basics',
  branches: [
    { name: 'Variables', subTopics: ['let', 'const', 'var'] },
    { name: 'Functions', subTopics: ['declaration', 'arrow', 'anonymous'] }
  ]
});

// Create diagram
const diagram = visual.createDiagram({
  type: 'flowchart',
  elements: ['Start', 'Process', 'Decision', 'End']
});
```

### Auditory Learning Module

```javascript
const AuditoryLearning = require('./src/auditory/auditoryLearning');
const auditory = new AuditoryLearning();

// Convert to speech
const speech = auditory.textToSpeech('Learning JavaScript is fun!', {
  rate: 'normal',
  emphasis: ['JavaScript']
});

// Create podcast summary
const podcast = auditory.createPodcastSummary({
  topic: 'JavaScript Basics',
  points: [{ title: 'Variables', explanation: '...', example: '...' }],
  conclusion: 'Keep learning!'
});
```

### Kinesthetic Learning Module

```javascript
const KinestheticLearning = require('./src/kinesthetic/kinestheticLearning');
const kinesthetic = new KinestheticLearning();

// Create quiz
const quiz = kinesthetic.createInteractiveQuiz({
  title: 'JavaScript Quiz',
  questions: [
    {
      question: 'What is a function?',
      type: 'multiple-choice',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 'B'
    }
  ]
});

// Check answer
const result = kinesthetic.checkAnswer({ response: 'B' }, quiz.questions[0]);

// Get stats
const stats = kinesthetic.getPlayerStats();
```

### Reading/Writing Learning Module

```javascript
const ReadingWritingLearning = require('./src/reading-writing/readingWritingLearning');
const readingWriting = new ReadingWritingLearning();

// Create smart notes
const note = readingWriting.createSmartNotes('Content here', {
  style: 'cornell',
  highlightKeywords: true
});

// Generate summary
const summary = readingWriting.generateSummary('Content', {
  type: 'bullet',
  length: 'medium'
});

// Get writing prompts
const prompts = readingWriting.generateWritingPrompts({
  subject: 'JavaScript',
  type: 'reflective'
});
```

## 🎨 Learning Styles

### Visual Learners
Best for those who learn through seeing and visualizing information.
- Use diagrams and mind maps
- Color-code your notes
- Create visual relationships between concepts

### Auditory Learners
Best for those who learn through listening and speaking.
- Listen to content summaries
- Use text-to-speech features
- Create audio playlists for studying

### Kinesthetic Learners
Best for those who learn through doing and hands-on practice.
- Take interactive quizzes
- Complete gamified exercises
- Practice with flashcards
- Earn achievements and level up

### Reading/Writing Learners
Best for those who learn through reading and writing.
- Take detailed notes
- Create summaries
- Respond to writing prompts
- Organize information in outlines

### Multimodal Learners
Combine multiple learning styles for comprehensive understanding.
- Access all features from all learning styles
- Mix and match techniques
- Find what works best for each topic

## 🎯 Learning Style Assessment

Not sure which learning style suits you? Take the built-in assessment:

```javascript
const assessment = coach.getLearningStyleAssessment();
console.log(assessment.questions);
// Answer the questions to discover your learning style
```

## 📖 API Reference

### LearningCoach Class

- `setLearningStyle(style)` - Set preferred learning style
- `getLearningStyleAssessment()` - Get assessment questions
- `processContent(content, options)` - Process content for learning styles
- `getModule(style)` - Get specific learning module
- `generateStudyPlan(goals)` - Create personalized study plan
- `getProgressReport()` - Get learning progress and statistics
- `displayWelcome()` - Display welcome message

### VisualLearning Class

- `createColorCodedNote(text, category)` - Create color-coded note
- `generateMindMap(data)` - Generate mind map
- `createDiagram(diagramData)` - Create diagram
- `organizeNotes(notes)` - Organize notes visually

### AuditoryLearning Class

- `textToSpeech(text, options)` - Convert text to speech format
- `createPodcastSummary(content)` - Create podcast-style summary
- `generateChapterMarkers(sections)` - Generate audio chapters
- `createStudyPlaylist(topics)` - Create audio playlist
- `generateAudioScript(text)` - Generate audio-friendly script

### KinestheticLearning Class

- `createInteractiveQuiz(quizData)` - Create interactive quiz
- `checkAnswer(answer, question)` - Check quiz answer
- `createGamifiedExercise(exerciseData)` - Create gamified exercise
- `completeTask(exercise, taskId)` - Complete exercise task
- `createFlashcardDrill(flashcards)` - Create flashcard drill
- `reviewFlashcard(card, correct)` - Review flashcard
- `createLearningGame(gameData)` - Create learning game
- `getPlayerStats()` - Get player statistics

### ReadingWritingLearning Class

- `createSmartNotes(content, options)` - Create smart notes
- `generateSummary(content, options)` - Generate summary
- `generateWritingPrompts(topic)` - Generate writing prompts
- `createStudyGuide(content)` - Create study guide
- `generateAnnotations(text)` - Generate annotations
- `getNoteTemplate(templateType)` - Get note template
- `exportNote(note, format)` - Export note
- `getAllNotes()` - Get all notes
- `searchNotes(query)` - Search notes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🎓 Tips for Effective Learning

1. **Identify Your Style**: Take the learning style assessment to understand how you learn best
2. **Mix and Match**: Don't limit yourself to one style - try multimodal learning
3. **Stay Consistent**: Use the progress tracking to maintain learning streaks
4. **Set Goals**: Create study plans with specific, achievable milestones
5. **Review Regularly**: Use spaced repetition with flashcards and quizzes
6. **Take Breaks**: Follow the Pomodoro technique (25 minutes study, 5 minutes break)
7. **Track Progress**: Monitor your achievements and level progression
8. **Practice Actively**: Engage with interactive exercises and quizzes
9. **Summarize Often**: Create summaries to reinforce understanding
10. **Stay Motivated**: Gamification features make learning fun and engaging

## 📞 Support

For questions, issues, or suggestions, please open an issue on GitHub.

---

Happy Learning! 🚀
