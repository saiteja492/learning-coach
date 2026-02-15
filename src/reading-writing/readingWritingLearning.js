/**
 * Reading/Writing Learning Module
 * Supports smart notes, summaries, and writing prompts
 */

class ReadingWritingLearning {
  constructor() {
    this.notes = [];
    this.summaries = [];
    this.templates = this._loadTemplates();
  }

  /**
   * Create smart notes from content
   * @param {string} content - The content to create notes from
   * @param {object} options - Note-taking options
   * @returns {object} Smart notes
   */
  createSmartNotes(content, options = {}) {
    const { style = 'cornell', highlightKeywords = true } = options;
    
    const note = {
      id: this._generateId(),
      content: content,
      style: style,
      createdAt: new Date().toISOString(),
      keywords: highlightKeywords ? this._extractKeywords(content) : [],
      structure: this._structureNotes(content, style)
    };
    
    this.notes.push(note);
    return note;
  }

  /**
   * Structure notes based on style
   * @private
   */
  _structureNotes(content, style) {
    switch (style) {
      case 'cornell':
        return this._cornellNotes(content);
      case 'outline':
        return this._outlineNotes(content);
      case 'mapping':
        return this._mappingNotes(content);
      case 'charting':
        return this._chartingNotes(content);
      default:
        return { raw: content };
    }
  }

  /**
   * Cornell note-taking method
   * @private
   */
  _cornellNotes(content) {
    const lines = content.split('\n').filter(line => line.trim());
    
    return {
      cueColumn: [
        '• Key concepts',
        '• Important terms',
        '• Questions to review'
      ],
      noteColumn: lines,
      summary: this._generateQuickSummary(content)
    };
  }

  /**
   * Outline note-taking method
   * @private
   */
  _outlineNotes(content) {
    const lines = content.split('\n').filter(line => line.trim());
    
    return {
      mainTopics: lines.filter((_, i) => i % 3 === 0),
      subtopics: lines.filter((_, i) => i % 3 === 1),
      details: lines.filter((_, i) => i % 3 === 2)
    };
  }

  /**
   * Mapping note-taking method
   * @private
   */
  _mappingNotes(content) {
    const keywords = this._extractKeywords(content);
    
    return {
      centralIdea: keywords[0] || 'Main Topic',
      branches: keywords.slice(1, 5).map(kw => ({
        keyword: kw,
        connections: []
      }))
    };
  }

  /**
   * Charting note-taking method
   * @private
   */
  _chartingNotes(content) {
    return {
      categories: ['Topic', 'Key Points', 'Examples'],
      rows: [{
        topic: 'Main Concept',
        keyPoints: this._extractKeywords(content).slice(0, 3),
        examples: ['See content for examples']
      }]
    };
  }

  /**
   * Generate a summary of content
   * @param {string} content - Content to summarize
   * @param {object} options - Summary options
   * @returns {object} Summary
   */
  generateSummary(content, options = {}) {
    const { 
      type = 'paragraph', // paragraph, bullet, abstract, executive
      length = 'medium', // short, medium, long
      includeKeyPoints = true 
    } = options;
    
    const summary = {
      id: this._generateId(),
      type: type,
      length: length,
      createdAt: new Date().toISOString(),
      content: this._createSummary(content, type, length),
      keyPoints: includeKeyPoints ? this._extractKeyPoints(content) : [],
      wordCount: content.split(/\s+/).length
    };
    
    this.summaries.push(summary);
    return summary;
  }

  /**
   * Create summary based on type
   * @private
   */
  _createSummary(content, type, length) {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim());
    const maxSentences = length === 'short' ? 2 : length === 'long' ? 6 : 4;
    const summarySentences = sentences.slice(0, maxSentences);
    
    switch (type) {
      case 'bullet':
        return summarySentences.map(s => `• ${s.trim()}`).join('\n');
      
      case 'abstract':
        return `Abstract: ${summarySentences.join('. ')}.`;
      
      case 'executive':
        return `Executive Summary\n${'='.repeat(50)}\n${summarySentences.join('. ')}.`;
      
      default:
        return summarySentences.join('. ') + '.';
    }
  }

  /**
   * Generate writing prompts
   * @param {object} topic - Topic information
   * @returns {array} Writing prompts
   */
  generateWritingPrompts(topic) {
    const { subject, level = 'intermediate', type = 'reflective' } = topic;
    
    const promptTemplates = {
      reflective: [
        `Reflect on your understanding of ${subject}. What insights have you gained?`,
        `How does ${subject} relate to your previous knowledge or experience?`,
        `What questions do you still have about ${subject}?`
      ],
      analytical: [
        `Analyze the key components of ${subject}. What patterns do you notice?`,
        `Compare and contrast different aspects of ${subject}.`,
        `What are the implications of ${subject} in real-world applications?`
      ],
      creative: [
        `Imagine you're teaching ${subject} to someone. How would you explain it?`,
        `Create a story or analogy that illustrates the concept of ${subject}.`,
        `How could ${subject} be applied in an innovative way?`
      ],
      practical: [
        `List three ways you could apply ${subject} in your daily life.`,
        `Create a step-by-step guide for understanding ${subject}.`,
        `What resources would help you master ${subject}?`
      ]
    };
    
    return (promptTemplates[type] || promptTemplates.reflective).map((prompt, index) => ({
      id: index + 1,
      prompt: prompt,
      type: type,
      suggestedLength: '150-300 words',
      estimatedTime: '10-15 minutes'
    }));
  }

  /**
   * Create a study guide
   * @param {object} content - Content to create guide from
   * @returns {object} Study guide
   */
  createStudyGuide(content) {
    const { title, material, learningObjectives } = content;
    
    return {
      title: title || 'Study Guide',
      createdAt: new Date().toISOString(),
      sections: [
        {
          name: 'Overview',
          content: this._generateQuickSummary(material)
        },
        {
          name: 'Learning Objectives',
          content: learningObjectives || this._generateObjectives(material)
        },
        {
          name: 'Key Concepts',
          content: this._extractKeywords(material)
        },
        {
          name: 'Review Questions',
          content: this._generateReviewQuestions(material)
        },
        {
          name: 'Additional Resources',
          content: ['Further reading suggestions', 'Practice exercises', 'Related topics']
        }
      ]
    };
  }

  /**
   * Generate annotation suggestions
   * @param {string} text - Text to annotate
   * @returns {array} Annotation suggestions
   */
  generateAnnotations(text) {
    const keywords = this._extractKeywords(text);
    
    return keywords.map(keyword => ({
      term: keyword,
      suggestion: `Consider highlighting or defining: ${keyword}`,
      type: 'definition',
      importance: 'high'
    }));
  }

  /**
   * Create note template
   * @param {string} templateType - Type of template
   * @returns {object} Note template
   */
  getNoteTemplate(templateType) {
    return this.templates[templateType] || this.templates.basic;
  }

  /**
   * Load note templates
   * @private
   */
  _loadTemplates() {
    return {
      basic: {
        structure: ['Title', 'Date', 'Main Content', 'Key Takeaways'],
        format: 'simple'
      },
      lecture: {
        structure: ['Course', 'Lecture Title', 'Date', 'Main Points', 'Questions', 'Action Items'],
        format: 'detailed'
      },
      reading: {
        structure: ['Source', 'Author', 'Date Read', 'Summary', 'Important Quotes', 'Personal Thoughts'],
        format: 'comprehensive'
      },
      meeting: {
        structure: ['Meeting Title', 'Date', 'Attendees', 'Key Decisions', 'Action Items', 'Follow-up'],
        format: 'structured'
      }
    };
  }

  /**
   * Export notes in various formats
   * @param {object} note - Note to export
   * @param {string} format - Export format (markdown, text, json)
   * @returns {string} Exported note
   */
  exportNote(note, format = 'markdown') {
    switch (format) {
      case 'markdown':
        return this._exportAsMarkdown(note);
      case 'text':
        return this._exportAsText(note);
      case 'json':
        return JSON.stringify(note, null, 2);
      default:
        return this._exportAsText(note);
    }
  }

  /**
   * Export as markdown
   * @private
   */
  _exportAsMarkdown(note) {
    let md = `# Note\n\n`;
    md += `**Created:** ${note.createdAt}\n\n`;
    md += `## Content\n\n${note.content}\n\n`;
    
    if (note.keywords.length > 0) {
      md += `## Keywords\n\n${note.keywords.map(k => `- ${k}`).join('\n')}\n`;
    }
    
    return md;
  }

  /**
   * Export as text
   * @private
   */
  _exportAsText(note) {
    let text = `Note\n${'='.repeat(50)}\n\n`;
    text += `Created: ${note.createdAt}\n\n`;
    text += `Content:\n${note.content}\n\n`;
    
    if (note.keywords.length > 0) {
      text += `Keywords: ${note.keywords.join(', ')}\n`;
    }
    
    return text;
  }

  /**
   * Generate quick summary
   * @private
   */
  _generateQuickSummary(content) {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim());
    return sentences.slice(0, 2).join('. ') + '.';
  }

  /**
   * Extract keywords from content
   * @private
   */
  _extractKeywords(content) {
    // Simple keyword extraction (in a real app, use NLP)
    const words = content.toLowerCase().split(/\W+/);
    const commonWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'is', 'are', 'was', 'were', 'be', 'been', 'being']);
    
    const wordFreq = {};
    words.forEach(word => {
      if (word.length > 4 && !commonWords.has(word)) {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
      }
    });
    
    return Object.entries(wordFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word]) => word);
  }

  /**
   * Extract key points
   * @private
   */
  _extractKeyPoints(content) {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim());
    return sentences.slice(0, 3).map(s => s.trim());
  }

  /**
   * Generate learning objectives
   * @private
   */
  _generateObjectives(material) {
    return [
      'Understand the main concepts',
      'Apply knowledge to practical scenarios',
      'Analyze and evaluate the information'
    ];
  }

  /**
   * Generate review questions
   * @private
   */
  _generateReviewQuestions(material) {
    return [
      'What are the main concepts covered?',
      'How do these concepts relate to each other?',
      'What are the practical applications?',
      'What questions do you still have?'
    ];
  }

  /**
   * Generate unique ID
   * @private
   */
  _generateId() {
    return `note_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get all notes
   * @returns {array} All notes
   */
  getAllNotes() {
    return this.notes;
  }

  /**
   * Get all summaries
   * @returns {array} All summaries
   */
  getAllSummaries() {
    return this.summaries;
  }

  /**
   * Search notes
   * @param {string} query - Search query
   * @returns {array} Matching notes
   */
  searchNotes(query) {
    const lowerQuery = query.toLowerCase();
    return this.notes.filter(note => 
      note.content.toLowerCase().includes(lowerQuery) ||
      note.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))
    );
  }
}

module.exports = ReadingWritingLearning;
