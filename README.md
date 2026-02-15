# Learning Coach 🎓

Personal Learning Assistant that adapts to different learning styles!

## 🌟 Overview

Learning Coach is a comprehensive educational tool designed to support multiple learning styles:

- 📊 **Visual Learning**: Mind maps, diagrams, and color-coded notes
- 🎧 **Auditory Learning**: Text-to-speech and podcast-style summaries
- 🎮 **Kinesthetic Learning**: Interactive quizzes and gamified exercises
- 📝 **Reading/Writing Learning**: Smart notes, summaries, and writing prompts

## 🚀 Quick Start

```bash
# Run the main application
node src/index.js

# Try the complete example
node examples/complete-example.js

# Explore individual learning styles
node examples/visual-example.js
node examples/auditory-example.js
node examples/kinesthetic-example.js
node examples/reading-writing-example.js
```

## 📚 Documentation

- [Complete API Documentation](docs/API.md)
- [Configuration Guide](config/default.js)

## 💡 Features

- **Adaptive Learning**: Automatically adapts content to your preferred learning style
- **Progress Tracking**: Track your learning progress, achievements, and streaks
- **Gamification**: Earn XP, unlock badges, and level up as you learn
- **Study Plans**: Generate personalized study plans based on your goals
- **Multiple Formats**: Export notes and summaries in various formats

## 🎯 Getting Started

```javascript
const LearningCoach = require('./src/index');
const coach = new LearningCoach();

// Set your learning style
coach.setLearningStyle('visual');

// Generate a study plan
const plan = coach.generateStudyPlan({
  topic: 'JavaScript',
  duration: '4 weeks'
});
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

MIT License

---

Happy Learning! 🚀 
