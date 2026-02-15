# Learning Coach - Quick Reference

## 🚀 Quick Commands

```bash
# Start the main application
npm start
# or: node src/index.js

# Run the starter template (recommended for beginners)
npm run starter
# or: node starter.js

# Run examples
npm run example:complete         # Full demonstration
npm run example:visual           # Visual learning examples
npm run example:auditory         # Auditory learning examples
npm run example:kinesthetic      # Kinesthetic learning examples
npm run example:reading-writing  # Reading/writing examples
```

## 📚 Module Quick Reference

### Visual Learning
```javascript
const visual = coach.getModule('visual');
visual.createColorCodedNote(text, category);
visual.generateMindMap(data);
visual.createDiagram(diagramData);
```

### Auditory Learning
```javascript
const auditory = coach.getModule('auditory');
auditory.textToSpeech(text, options);
auditory.createPodcastSummary(content);
auditory.createStudyPlaylist(topics);
```

### Kinesthetic Learning
```javascript
const kinesthetic = coach.getModule('kinesthetic');
kinesthetic.createInteractiveQuiz(quizData);
kinesthetic.createGamifiedExercise(exerciseData);
kinesthetic.createFlashcardDrill(flashcards);
kinesthetic.getPlayerStats();
```

### Reading/Writing Learning
```javascript
const readingWriting = coach.getModule('reading-writing');
readingWriting.createSmartNotes(content, options);
readingWriting.generateSummary(content, options);
readingWriting.generateWritingPrompts(topic);
readingWriting.exportNote(note, format);
```

## 🎯 Common Tasks

### Set Learning Style
```javascript
coach.setLearningStyle('visual');        // Visual learner
coach.setLearningStyle('auditory');      // Auditory learner
coach.setLearningStyle('kinesthetic');   // Kinesthetic learner
coach.setLearningStyle('reading-writing'); // Reading/writing learner
coach.setLearningStyle('multimodal');    // All styles (default)
```

### Create Study Plan
```javascript
const plan = coach.generateStudyPlan({
  topic: 'Your Topic',
  duration: '4 weeks',
  currentLevel: 'beginner' // or 'intermediate', 'advanced'
});
```

### Process Content
```javascript
const content = 'Your learning content here...';
const processed = coach.processContent(content);
```

### Check Progress
```javascript
const progress = coach.getProgressReport();
console.log(progress.kinestheticStats);
console.log(progress.recommendations);
```

## 🎨 Learning Style Categories

### Visual (📊)
- Mind Maps
- Diagrams (flowchart, hierarchy, comparison)
- Color-coded Notes (concept, definition, example, important, note)

### Auditory (🎧)
- Text-to-Speech
- Podcast Summaries
- Audio Scripts
- Study Playlists
- Chapter Markers

### Kinesthetic (🎮)
- Interactive Quizzes (multiple-choice, true-false, fill-blank, drag-drop)
- Gamified Exercises (challenges, missions, practice, tournaments)
- Flashcard Drills
- Learning Games (word-match, sequence, categorize, puzzle)
- Progress Tracking (levels, XP, achievements, streaks)

### Reading/Writing (📝)
- Smart Notes (cornell, outline, mapping, charting)
- Summaries (paragraph, bullet, abstract, executive)
- Writing Prompts (reflective, analytical, creative, practical)
- Study Guides
- Note Templates (basic, lecture, reading, meeting)
- Export Formats (markdown, text, json)

## 📁 Project Structure

```
learning-coach/
├── src/                          # Source code
│   ├── index.js                 # Main application
│   ├── visual/                  # Visual learning module
│   ├── auditory/                # Auditory learning module
│   ├── kinesthetic/             # Kinesthetic learning module
│   └── reading-writing/         # Reading/writing module
├── examples/                     # Usage examples
│   ├── complete-example.js      # Full demonstration
│   ├── visual-example.js        # Visual examples
│   ├── auditory-example.js      # Auditory examples
│   ├── kinesthetic-example.js   # Kinesthetic examples
│   └── reading-writing-example.js # Reading/writing examples
├── docs/                         # Documentation
│   ├── API.md                   # Complete API reference
│   └── USAGE.md                 # Detailed usage guide
├── config/                       # Configuration
│   └── default.js               # Default settings
├── starter.js                    # Starter template
├── package.json                  # Package configuration
└── README.md                     # Project overview
```

## 💡 Tips

1. **New Users**: Start with `npm run starter`
2. **Visual Learners**: Use mind maps and color-coding
3. **Auditory Learners**: Create podcast summaries
4. **Kinesthetic Learners**: Take quizzes and earn XP
5. **Reading/Writing**: Take notes and create summaries
6. **Multimodal**: Use all learning styles for best results

## 📖 Learn More

- [Complete API Documentation](docs/API.md)
- [Detailed Usage Guide](docs/USAGE.md)
- [Configuration Options](config/default.js)

## 🤝 Support

- Open an issue on GitHub
- Check documentation in `docs/` folder
- Run examples to see features in action

---

Happy Learning! 🎓
