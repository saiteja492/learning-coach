/**
 * Auditory Learning Module
 * Supports text-to-speech conversion and podcast-style summaries
 */

class AuditoryLearning {
  constructor() {
    this.speechRate = 'normal'; // slow, normal, fast
    this.summaryStyle = 'conversational'; // formal, conversational, storytelling
  }

  /**
   * Convert text to speech-ready format
   * @param {string} text - The text to convert
   * @param {object} options - Options for speech conversion
   * @returns {object} Speech-ready content
   */
  textToSpeech(text, options = {}) {
    const { rate = this.speechRate, emphasis = [] } = options;
    
    // Add pauses and emphasis markers
    let processedText = text;
    
    // Add pauses after punctuation
    processedText = processedText.replace(/\./g, '. [PAUSE]');
    processedText = processedText.replace(/,/g, ', [SHORT_PAUSE]');
    processedText = processedText.replace(/\?/g, '? [PAUSE]');
    processedText = processedText.replace(/!/g, '! [PAUSE]');
    
    // Add emphasis to specified words
    emphasis.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      processedText = processedText.replace(regex, `[EMPHASIZE]${word}[/EMPHASIZE]`);
    });
    
    return {
      text: processedText,
      rate: rate,
      timestamp: new Date().toISOString(),
      duration: this._estimateDuration(text, rate)
    };
  }

  /**
   * Create a podcast-style summary
   * @param {object} content - Content to summarize
   * @returns {string} Podcast-style summary
   */
  createPodcastSummary(content) {
    const { topic, points, conclusion } = content;
    
    let script = `🎙️ PODCAST SUMMARY\n`;
    script += `${'='.repeat(50)}\n\n`;
    
    // Introduction
    script += `[INTRO MUSIC]\n\n`;
    script += `Host: Welcome back to Learning Coach, your personal learning companion! `;
    script += `Today, we're diving into "${topic}". Let's break this down into digestible chunks.\n\n`;
    
    // Main points
    script += `[TRANSITION]\n\n`;
    points.forEach((point, index) => {
      script += `Host: Point number ${index + 1}: ${point.title}.\n`;
      script += `${point.explanation}\n`;
      if (point.example) {
        script += `For example, ${point.example}\n`;
      }
      script += `\n[PAUSE]\n\n`;
    });
    
    // Conclusion
    script += `[TRANSITION]\n\n`;
    script += `Host: To wrap things up, ${conclusion}\n\n`;
    script += `Thanks for tuning in to Learning Coach. Keep learning, keep growing!\n\n`;
    script += `[OUTRO MUSIC]\n`;
    
    return script;
  }

  /**
   * Generate audio chapter markers
   * @param {array} sections - Array of section objects
   * @returns {array} Chapter markers with timestamps
   */
  generateChapterMarkers(sections) {
    let currentTime = 0;
    const markers = sections.map(section => {
      const marker = {
        title: section.title,
        startTime: this._formatTime(currentTime),
        duration: section.duration || 60
      };
      currentTime += marker.duration;
      return marker;
    });
    
    return markers;
  }

  /**
   * Create listening comprehension questions
   * @param {string} content - The audio content
   * @returns {array} Comprehension questions
   */
  createListeningQuestions(content) {
    return [
      {
        type: 'recall',
        question: 'What was the main topic discussed?',
        hint: 'Think about the introduction'
      },
      {
        type: 'understanding',
        question: 'Can you explain the key concept in your own words?',
        hint: 'Focus on the main points'
      },
      {
        type: 'application',
        question: 'How would you apply this in a real-world scenario?',
        hint: 'Consider practical examples'
      }
    ];
  }

  /**
   * Generate audio-friendly reading script
   * @param {string} text - The text to convert
   * @returns {string} Audio-friendly script
   */
  generateAudioScript(text) {
    let script = text;
    
    // Convert numbers to words for better audio
    script = script.replace(/\b(\d+)\b/g, (match) => {
      return `[NUMBER: ${match}]`;
    });
    
    // Add pronunciation guides for complex terms
    script = script.replace(/\b([A-Z][a-z]+[A-Z][a-z]+)\b/g, (match) => {
      return `${match} [SPELL_OUT]`;
    });
    
    // Format lists for audio
    script = script.replace(/(\d+\.)/g, '\n[PAUSE] Item $1');
    
    return script;
  }

  /**
   * Estimate speech duration
   * @private
   */
  _estimateDuration(text, rate) {
    const wordsPerMinute = rate === 'slow' ? 120 : rate === 'fast' ? 180 : 150;
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }

  /**
   * Format time for chapter markers
   * @private
   */
  _formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  /**
   * Create study playlist
   * @param {array} topics - Array of topics
   * @returns {object} Study playlist
   */
  createStudyPlaylist(topics) {
    return {
      name: 'Learning Coach Playlist',
      description: 'Your personalized audio learning playlist',
      tracks: topics.map((topic, index) => ({
        trackNumber: index + 1,
        title: topic.title,
        duration: topic.duration || '5:00',
        type: topic.type || 'summary'
      })),
      totalDuration: this._calculateTotalDuration(topics)
    };
  }

  /**
   * Calculate total playlist duration
   * @private
   */
  _calculateTotalDuration(topics) {
    const totalMinutes = topics.reduce((sum, topic) => {
      const [mins] = (topic.duration || '5:00').split(':').map(Number);
      return sum + mins;
    }, 0);
    return `${totalMinutes} minutes`;
  }
}

module.exports = AuditoryLearning;
