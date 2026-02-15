/**
 * Learning Coach Configuration
 * Customize your learning experience
 */

module.exports = {
  // Default learning style (visual, auditory, kinesthetic, reading-writing, multimodal)
  defaultLearningStyle: 'multimodal',

  // Visual Learning Settings
  visual: {
    colorScheme: {
      concept: 'cyan',
      definition: 'yellow',
      example: 'green',
      important: 'red',
      note: 'magenta'
    },
    mindMapSettings: {
      maxDepth: 3,
      showIcons: true
    },
    diagramSettings: {
      defaultType: 'flowchart',
      showLabels: true
    }
  },

  // Auditory Learning Settings
  auditory: {
    speechSettings: {
      defaultRate: 'normal', // slow, normal, fast
      addPauses: true,
      emphasizeKeywords: true
    },
    podcastSettings: {
      includeIntro: true,
      includeOutro: true,
      addTransitions: true
    },
    audioSettings: {
      defaultDuration: 60, // seconds per section
      createChapters: true
    }
  },

  // Kinesthetic Learning Settings
  kinesthetic: {
    gamificationSettings: {
      enableXP: true,
      enableLevels: true,
      enableAchievements: true,
      enableStreaks: true
    },
    quizSettings: {
      defaultDifficulty: 'medium', // easy, medium, hard
      timeLimit: 60, // seconds per question
      passingScore: 0.7 // 70%
    },
    pointsSystem: {
      multipleChoice: 10,
      trueFalse: 5,
      fillBlank: 15,
      dragDrop: 20,
      streakBonus: 0.5 // 50% bonus
    },
    levelingSystem: {
      xpPerLevel: 100,
      maxLevel: 50
    }
  },

  // Reading/Writing Learning Settings
  readingWriting: {
    noteSettings: {
      defaultStyle: 'cornell', // cornell, outline, mapping, charting
      autoExtractKeywords: true,
      maxKeywords: 5
    },
    summarySettings: {
      defaultType: 'paragraph', // paragraph, bullet, abstract, executive
      defaultLength: 'medium', // short, medium, long
      includeKeyPoints: true
    },
    promptSettings: {
      defaultType: 'reflective', // reflective, analytical, creative, practical
      suggestedWordCount: 250,
      estimatedTime: 15 // minutes
    },
    exportSettings: {
      defaultFormat: 'markdown', // markdown, text, json
      includeMetadata: true
    }
  },

  // Study Plan Settings
  studyPlan: {
    defaultDuration: '4 weeks',
    defaultLevel: 'beginner', // beginner, intermediate, advanced
    defaultSchedule: {
      dailyMinutes: 45,
      sessionsPerWeek: 4,
      breakInterval: 25 // Pomodoro: 25 minutes
    },
    reviewFrequency: 'weekly' // daily, weekly, biweekly
  },

  // Progress Tracking Settings
  progress: {
    trackNotes: true,
    trackQuizzes: true,
    trackExercises: true,
    trackStreaks: true,
    showRecommendations: true
  },

  // Assessment Settings
  assessment: {
    numberOfQuestions: 10,
    includeScoring: true,
    suggestMultimodal: true
  },

  // General Settings
  general: {
    showWelcome: true,
    enableColors: true,
    verboseOutput: false,
    autoSave: true
  }
};
