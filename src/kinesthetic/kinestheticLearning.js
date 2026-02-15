/**
 * Kinesthetic Learning Module
 * Supports interactive quizzes and gamified exercises
 */

class KinestheticLearning {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.achievements = [];
    this.streak = 0;
  }

  /**
   * Create an interactive quiz
   * @param {object} quizData - Quiz data with questions and answers
   * @returns {object} Interactive quiz object
   */
  createInteractiveQuiz(quizData) {
    const { title, questions, difficulty } = quizData;
    
    return {
      title,
      difficulty: difficulty || 'medium',
      totalQuestions: questions.length,
      questions: questions.map((q, index) => ({
        id: index + 1,
        question: q.question,
        type: q.type || 'multiple-choice', // multiple-choice, true-false, fill-blank, drag-drop
        options: q.options || [],
        correctAnswer: q.correctAnswer,
        points: this._calculatePoints(q.type, difficulty),
        hint: q.hint || null,
        explanation: q.explanation || null
      })),
      timeLimit: questions.length * 60, // 60 seconds per question
      passingScore: Math.ceil(questions.length * 0.7)
    };
  }

  /**
   * Check quiz answer and provide feedback
   * @param {object} answer - User's answer
   * @param {object} question - Question object
   * @returns {object} Feedback with score and explanation
   */
  checkAnswer(answer, question) {
    const isCorrect = this._validateAnswer(answer.response, question.correctAnswer, question.type);
    
    if (isCorrect) {
      this.score += question.points;
      this.streak++;
      
      // Check for streak bonus
      if (this.streak % 5 === 0) {
        const bonus = question.points * 0.5;
        this.score += bonus;
        this._addAchievement('🔥 Hot Streak!', `${this.streak} correct answers in a row!`);
      }
    } else {
      this.streak = 0;
    }
    
    return {
      correct: isCorrect,
      points: isCorrect ? question.points : 0,
      totalScore: this.score,
      streak: this.streak,
      feedback: isCorrect ? '✅ Correct! Great job!' : '❌ Not quite right.',
      explanation: question.explanation,
      correctAnswer: question.correctAnswer
    };
  }

  /**
   * Create a gamified exercise
   * @param {object} exerciseData - Exercise data
   * @returns {object} Gamified exercise
   */
  createGamifiedExercise(exerciseData) {
    const { title, type, tasks, rewards } = exerciseData;
    
    return {
      title,
      type: type || 'challenge', // challenge, mission, practice, tournament
      icon: this._getExerciseIcon(type),
      tasks: tasks.map((task, index) => ({
        id: index + 1,
        description: task.description,
        action: task.action,
        xp: task.xp || 10,
        completed: false
      })),
      rewards: {
        xp: rewards?.xp || 100,
        badge: rewards?.badge || null,
        unlocks: rewards?.unlocks || null
      },
      difficulty: exerciseData.difficulty || 'medium'
    };
  }

  /**
   * Complete an exercise task
   * @param {object} exercise - Exercise object
   * @param {number} taskId - Task ID to complete
   * @returns {object} Updated exercise status
   */
  completeTask(exercise, taskId) {
    const task = exercise.tasks.find(t => t.id === taskId);
    
    if (task && !task.completed) {
      task.completed = true;
      this.score += task.xp;
      
      // Check if all tasks are completed
      const allCompleted = exercise.tasks.every(t => t.completed);
      
      if (allCompleted) {
        this.score += exercise.rewards.xp;
        if (exercise.rewards.badge) {
          this._addAchievement(exercise.rewards.badge, `Completed ${exercise.title}`);
        }
        this._checkLevelUp();
      }
      
      return {
        taskCompleted: true,
        xpEarned: task.xp,
        totalXP: this.score,
        exerciseComplete: allCompleted,
        message: allCompleted ? '🎉 Exercise completed!' : '👍 Task completed!'
      };
    }
    
    return {
      taskCompleted: false,
      message: 'Task already completed or not found'
    };
  }

  /**
   * Create flashcard drill exercise
   * @param {array} flashcards - Array of flashcard objects
   * @returns {object} Flashcard drill
   */
  createFlashcardDrill(flashcards) {
    return {
      type: 'flashcard-drill',
      icon: '🎴',
      cards: flashcards.map((card, index) => ({
        id: index + 1,
        front: card.front,
        back: card.back,
        mastered: false,
        attempts: 0,
        lastReview: null
      })),
      sessionStats: {
        cardsReviewed: 0,
        correctFirstTry: 0,
        needsReview: []
      }
    };
  }

  /**
   * Review flashcard
   * @param {object} card - Flashcard object
   * @param {boolean} correct - Whether answer was correct
   * @returns {object} Review result
   */
  reviewFlashcard(card, correct) {
    card.attempts++;
    card.lastReview = new Date().toISOString();
    
    if (correct) {
      if (card.attempts === 1) {
        card.mastered = true;
        this.score += 5;
      }
      return {
        result: 'correct',
        xp: 5,
        message: '✅ Correct! Card mastered!'
      };
    } else {
      return {
        result: 'incorrect',
        xp: 0,
        message: '🔄 Review this card again',
        needsReview: true
      };
    }
  }

  /**
   * Create a learning game
   * @param {object} gameData - Game configuration
   * @returns {object} Learning game
   */
  createLearningGame(gameData) {
    const { name, type, content } = gameData;
    
    const games = {
      'word-match': this._createWordMatchGame(content),
      'sequence': this._createSequenceGame(content),
      'categorize': this._createCategorizeGame(content),
      'puzzle': this._createPuzzleGame(content)
    };
    
    return games[type] || games['word-match'];
  }

  /**
   * Get player progress and stats
   * @returns {object} Player stats
   */
  getPlayerStats() {
    return {
      level: this.level,
      score: this.score,
      streak: this.streak,
      achievements: this.achievements,
      rank: this._calculateRank(),
      nextLevelXP: this._getNextLevelXP()
    };
  }

  /**
   * Calculate points based on question type and difficulty
   * @private
   */
  _calculatePoints(type, difficulty) {
    const basePoints = {
      'multiple-choice': 10,
      'true-false': 5,
      'fill-blank': 15,
      'drag-drop': 20
    };
    
    const multiplier = difficulty === 'easy' ? 0.8 : difficulty === 'hard' ? 1.5 : 1;
    return Math.round((basePoints[type] || 10) * multiplier);
  }

  /**
   * Validate answer based on question type
   * @private
   */
  _validateAnswer(response, correct, type) {
    if (type === 'multiple-choice' || type === 'true-false') {
      return response === correct;
    } else if (type === 'fill-blank') {
      return response.toLowerCase().trim() === correct.toLowerCase().trim();
    }
    return false;
  }

  /**
   * Add achievement
   * @private
   */
  _addAchievement(title, description) {
    this.achievements.push({
      title,
      description,
      earnedAt: new Date().toISOString()
    });
  }

  /**
   * Check if player leveled up
   * @private
   */
  _checkLevelUp() {
    const xpForNextLevel = this.level * 100;
    if (this.score >= xpForNextLevel) {
      this.level++;
      this._addAchievement('⭐ Level Up!', `Reached level ${this.level}`);
    }
  }

  /**
   * Calculate player rank
   * @private
   */
  _calculateRank() {
    if (this.level < 5) return 'Novice';
    if (this.level < 10) return 'Apprentice';
    if (this.level < 20) return 'Expert';
    return 'Master';
  }

  /**
   * Get XP needed for next level
   * @private
   */
  _getNextLevelXP() {
    return this.level * 100;
  }

  /**
   * Get exercise icon
   * @private
   */
  _getExerciseIcon(type) {
    const icons = {
      challenge: '⚔️',
      mission: '🎯',
      practice: '📝',
      tournament: '🏆'
    };
    return icons[type] || '📚';
  }

  /**
   * Create word match game
   * @private
   */
  _createWordMatchGame(content) {
    return {
      name: 'Word Match',
      icon: '🎯',
      type: 'word-match',
      pairs: content.pairs || [],
      timeLimit: 120,
      points: 50
    };
  }

  /**
   * Create sequence game
   * @private
   */
  _createSequenceGame(content) {
    return {
      name: 'Sequence Master',
      icon: '🔢',
      type: 'sequence',
      items: content.items || [],
      correctOrder: content.correctOrder || [],
      points: 75
    };
  }

  /**
   * Create categorize game
   * @private
   */
  _createCategorizeGame(content) {
    return {
      name: 'Category Sort',
      icon: '📊',
      type: 'categorize',
      items: content.items || [],
      categories: content.categories || [],
      points: 60
    };
  }

  /**
   * Create puzzle game
   * @private
   */
  _createPuzzleGame(content) {
    return {
      name: 'Learning Puzzle',
      icon: '🧩',
      type: 'puzzle',
      pieces: content.pieces || [],
      solution: content.solution || '',
      points: 100
    };
  }
}

module.exports = KinestheticLearning;
