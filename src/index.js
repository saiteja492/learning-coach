/**
 * Learning Coach - Personal Learning Assistant
 * Main entry point that adapts to different learning styles
 */

const VisualLearning = require('./visual/visualLearning');
const AuditoryLearning = require('./auditory/auditoryLearning');
const KinestheticLearning = require('./kinesthetic/kinestheticLearning');
const ReadingWritingLearning = require('./reading-writing/readingWritingLearning');

class LearningCoach {
  constructor() {
    this.visual = new VisualLearning();
    this.auditory = new AuditoryLearning();
    this.kinesthetic = new KinestheticLearning();
    this.readingWriting = new ReadingWritingLearning();
    this.preferredStyle = null;
    this.multimodalEnabled = true;
  }

  /**
   * Set user's preferred learning style
   * @param {string} style - Learning style (visual, auditory, kinesthetic, reading-writing, multimodal)
   */
  setLearningStyle(style) {
    const validStyles = ['visual', 'auditory', 'kinesthetic', 'reading-writing', 'multimodal'];
    
    if (validStyles.includes(style)) {
      this.preferredStyle = style;
      this.multimodalEnabled = (style === 'multimodal');
      console.log(`✅ Learning style set to: ${style}`);
    } else {
      console.log(`❌ Invalid learning style. Choose from: ${validStyles.join(', ')}`);
    }
  }

  /**
   * Get learning style assessment
   * @returns {object} Assessment questions and scoring
   */
  getLearningStyleAssessment() {
    return {
      title: 'Learning Style Assessment',
      instructions: 'Answer these questions to discover your learning style',
      questions: [
        {
          id: 1,
          question: 'When learning something new, I prefer to:',
          options: {
            A: 'See diagrams, charts, or visual representations',
            B: 'Listen to explanations or discussions',
            C: 'Do hands-on activities or experiments',
            D: 'Read about it and take notes'
          }
        },
        {
          id: 2,
          question: 'I remember information best when:',
          options: {
            A: 'I can visualize it with colors and images',
            B: 'I hear it repeated or explained',
            C: 'I practice or apply it',
            D: 'I write it down or summarize it'
          }
        },
        {
          id: 3,
          question: 'In a study session, I would:',
          options: {
            A: 'Create mind maps or highlight with different colors',
            B: 'Record lectures or discuss with others',
            C: 'Take practice tests or solve problems',
            D: 'Make detailed notes and outlines'
          }
        }
      ],
      scoring: {
        'Mostly A': 'Visual Learner',
        'Mostly B': 'Auditory Learner',
        'Mostly C': 'Kinesthetic Learner',
        'Mostly D': 'Reading/Writing Learner',
        'Mixed': 'Multimodal Learner'
      }
    };
  }

  /**
   * Process learning content based on preferred style
   * @param {string} content - Learning content
   * @param {object} options - Processing options
   * @returns {object} Processed content for the learning style
   */
  processContent(content, options = {}) {
    const results = {};
    
    if (this.multimodalEnabled || !this.preferredStyle) {
      // Provide content in all formats
      results.visual = this._processVisual(content, options);
      results.auditory = this._processAuditory(content, options);
      results.kinesthetic = this._processKinesthetic(content, options);
      results.readingWriting = this._processReadingWriting(content, options);
    } else {
      // Provide content in preferred format only
      switch (this.preferredStyle) {
        case 'visual':
          results.visual = this._processVisual(content, options);
          break;
        case 'auditory':
          results.auditory = this._processAuditory(content, options);
          break;
        case 'kinesthetic':
          results.kinesthetic = this._processKinesthetic(content, options);
          break;
        case 'reading-writing':
          results.readingWriting = this._processReadingWriting(content, options);
          break;
      }
    }
    
    return results;
  }

  /**
   * Process content for visual learners
   * @private
   */
  _processVisual(content, options) {
    return {
      colorCodedNotes: this.visual.createColorCodedNote(content, 'concept'),
      available: ['Mind Maps', 'Diagrams', 'Color-coded Notes']
    };
  }

  /**
   * Process content for auditory learners
   * @private
   */
  _processAuditory(content, options) {
    return {
      audioScript: this.auditory.generateAudioScript(content),
      available: ['Text-to-Speech', 'Podcast Summaries', 'Audio Notes']
    };
  }

  /**
   * Process content for kinesthetic learners
   * @private
   */
  _processKinesthetic(content, options) {
    return {
      interactiveElements: 'Quizzes and exercises available',
      available: ['Interactive Quizzes', 'Gamified Exercises', 'Flashcards']
    };
  }

  /**
   * Process content for reading/writing learners
   * @private
   */
  _processReadingWriting(content, options) {
    const summary = this.readingWriting.generateSummary(content);
    return {
      summary: summary.content,
      available: ['Smart Notes', 'Summaries', 'Writing Prompts']
    };
  }

  /**
   * Get module by learning style
   * @param {string} style - Learning style
   * @returns {object} Learning module
   */
  getModule(style) {
    const modules = {
      visual: this.visual,
      auditory: this.auditory,
      kinesthetic: this.kinesthetic,
      'reading-writing': this.readingWriting
    };
    
    return modules[style];
  }

  /**
   * Generate study plan
   * @param {object} goals - Learning goals
   * @returns {object} Personalized study plan
   */
  generateStudyPlan(goals) {
    const { topic, duration, currentLevel } = goals;
    
    const plan = {
      topic: topic,
      duration: duration || '4 weeks',
      level: currentLevel || 'beginner',
      schedule: this._createSchedule(duration),
      activities: this._selectActivities(),
      milestones: this._createMilestones(topic)
    };
    
    return plan;
  }

  /**
   * Create study schedule
   * @private
   */
  _createSchedule(duration) {
    return {
      daily: '30-60 minutes',
      weekly: '3-5 sessions',
      breaks: 'Every 25 minutes (Pomodoro technique)',
      review: 'End of each week'
    };
  }

  /**
   * Select activities based on learning style
   * @private
   */
  _selectActivities() {
    const activities = [];
    
    if (this.preferredStyle === 'visual' || this.multimodalEnabled) {
      activities.push('Create mind maps', 'Draw diagrams', 'Use color coding');
    }
    if (this.preferredStyle === 'auditory' || this.multimodalEnabled) {
      activities.push('Listen to summaries', 'Discuss topics', 'Record notes');
    }
    if (this.preferredStyle === 'kinesthetic' || this.multimodalEnabled) {
      activities.push('Complete quizzes', 'Practice exercises', 'Interactive games');
    }
    if (this.preferredStyle === 'reading-writing' || this.multimodalEnabled) {
      activities.push('Take notes', 'Write summaries', 'Create outlines');
    }
    
    return activities;
  }

  /**
   * Create learning milestones
   * @private
   */
  _createMilestones(topic) {
    return [
      { week: 1, goal: `Understand basics of ${topic}` },
      { week: 2, goal: `Apply ${topic} concepts` },
      { week: 3, goal: `Practice and reinforce ${topic}` },
      { week: 4, goal: `Master ${topic} and assess knowledge` }
    ];
  }

  /**
   * Get progress report
   * @returns {object} Learning progress report
   */
  getProgressReport() {
    return {
      kinestheticStats: this.kinesthetic.getPlayerStats(),
      notes: this.readingWriting.getAllNotes().length,
      summaries: this.readingWriting.getAllSummaries().length,
      achievements: this.kinesthetic.achievements,
      recommendations: this._getRecommendations()
    };
  }

  /**
   * Get personalized recommendations
   * @private
   */
  _getRecommendations() {
    const recommendations = [];
    
    if (this.kinesthetic.streak < 3) {
      recommendations.push('Try maintaining a learning streak for better retention');
    }
    
    if (this.readingWriting.getAllNotes().length < 5) {
      recommendations.push('Consider taking more notes to reinforce learning');
    }
    
    if (this.preferredStyle === null) {
      recommendations.push('Take the learning style assessment to personalize your experience');
    }
    
    return recommendations;
  }

  /**
   * Display welcome message
   */
  displayWelcome() {
    console.log('\n' + '='.repeat(60));
    console.log('🎓 Welcome to Learning Coach!');
    console.log('Your Personal Learning Assistant');
    console.log('='.repeat(60));
    console.log('\nAdapting to your learning style:');
    console.log('📊 Visual: Mind maps, diagrams, color-coded notes');
    console.log('🎧 Auditory: Text-to-speech, podcast-style summaries');
    console.log('🎮 Kinesthetic: Interactive quizzes, gamified exercises');
    console.log('📝 Reading/Writing: Smart notes, summaries, prompts');
    console.log('\n' + '='.repeat(60) + '\n');
  }
}

// Export for use as module
module.exports = LearningCoach;

// Run demo if executed directly
if (require.main === module) {
  const coach = new LearningCoach();
  coach.displayWelcome();
  
  console.log('🔍 Take the learning style assessment to get started!');
  console.log('\nExample usage:');
  console.log('  const LearningCoach = require("./src/index");');
  console.log('  const coach = new LearningCoach();');
  console.log('  coach.setLearningStyle("visual");');
  console.log('\nCheck the examples/ directory for more detailed usage.\n');
}
