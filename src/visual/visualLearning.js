/**
 * Visual Learning Module
 * Supports mind maps, diagrams, and color-coded notes
 */

class VisualLearning {
  constructor() {
    this.colors = {
      concept: '\x1b[36m',      // Cyan
      definition: '\x1b[33m',   // Yellow
      example: '\x1b[32m',      // Green
      important: '\x1b[31m',    // Red
      note: '\x1b[35m',         // Magenta
      reset: '\x1b[0m'          // Reset
    };
  }

  /**
   * Create a color-coded note
   * @param {string} text - The note text
   * @param {string} category - The category (concept, definition, example, important, note)
   * @returns {string} Color-coded note
   */
  createColorCodedNote(text, category = 'note') {
    const color = this.colors[category] || this.colors.note;
    return `${color}[${category.toUpperCase()}] ${text}${this.colors.reset}`;
  }

  /**
   * Generate a simple mind map structure
   * @param {object} data - Mind map data with central topic and branches
   * @returns {string} Text-based mind map
   */
  generateMindMap(data) {
    const { topic, branches } = data;
    let mindMap = `\n${this.colors.important}=== MIND MAP ===${this.colors.reset}\n`;
    mindMap += `${this.colors.concept}📍 ${topic}${this.colors.reset}\n`;
    
    branches.forEach((branch, index) => {
      mindMap += `  ├─ ${this.colors.definition}${branch.name}${this.colors.reset}\n`;
      if (branch.subTopics) {
        branch.subTopics.forEach((subTopic, subIndex) => {
          const prefix = subIndex === branch.subTopics.length - 1 ? '└─' : '├─';
          mindMap += `  │  ${prefix} ${this.colors.note}${subTopic}${this.colors.reset}\n`;
        });
      }
    });
    
    return mindMap;
  }

  /**
   * Create a diagram representation
   * @param {object} diagramData - Diagram data with type and elements
   * @returns {string} Text-based diagram
   */
  createDiagram(diagramData) {
    const { type, elements } = diagramData;
    let diagram = `\n${this.colors.important}=== ${type.toUpperCase()} DIAGRAM ===${this.colors.reset}\n`;
    
    switch (type) {
      case 'flowchart':
        elements.forEach((element, index) => {
          const arrow = index < elements.length - 1 ? ' ↓' : '';
          diagram += `[${this.colors.concept}${element}${this.colors.reset}]${arrow}\n`;
        });
        break;
      
      case 'hierarchy':
        this._renderHierarchy(elements, diagram, 0);
        break;
      
      case 'comparison':
        diagram += this._renderComparison(elements);
        break;
      
      default:
        diagram += elements.join('\n');
    }
    
    return diagram;
  }

  /**
   * Render hierarchy diagram
   * @private
   */
  _renderHierarchy(items, diagram, level) {
    const indent = '  '.repeat(level);
    items.forEach(item => {
      diagram += `${indent}└─ ${this.colors.definition}${item.name}${this.colors.reset}\n`;
      if (item.children) {
        this._renderHierarchy(item.children, diagram, level + 1);
      }
    });
  }

  /**
   * Render comparison diagram
   * @private
   */
  _renderComparison(items) {
    let result = '';
    const maxLength = Math.max(...items.map(i => i.name.length));
    
    items.forEach(item => {
      const padding = ' '.repeat(maxLength - item.name.length);
      result += `${this.colors.concept}${item.name}${padding}${this.colors.reset} | ${this.colors.note}${item.description}${this.colors.reset}\n`;
    });
    
    return result;
  }

  /**
   * Organize notes with visual markers
   * @param {array} notes - Array of note objects
   * @returns {string} Organized visual notes
   */
  organizeNotes(notes) {
    let organized = `\n${this.colors.important}=== VISUAL NOTES ===${this.colors.reset}\n\n`;
    
    notes.forEach((note, index) => {
      organized += `${index + 1}. ${this.createColorCodedNote(note.text, note.category)}\n`;
    });
    
    return organized;
  }
}

module.exports = VisualLearning;
