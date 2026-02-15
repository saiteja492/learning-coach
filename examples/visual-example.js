/**
 * Visual Learning Example
 * Demonstrates mind maps, diagrams, and color-coded notes
 */

const VisualLearning = require('../src/visual/visualLearning');

const visual = new VisualLearning();

console.log('\n📊 VISUAL LEARNING EXAMPLES\n');
console.log('='.repeat(60));

// Example 1: Color-coded notes
console.log('\n1. Color-Coded Notes:');
console.log(visual.createColorCodedNote('JavaScript is a programming language', 'concept'));
console.log(visual.createColorCodedNote('Variables store data values', 'definition'));
console.log(visual.createColorCodedNote('let x = 5; // Example of a variable', 'example'));
console.log(visual.createColorCodedNote('Always use const for constants!', 'important'));
console.log(visual.createColorCodedNote('Remember to use semicolons', 'note'));

// Example 2: Mind Map
console.log('\n2. Mind Map:');
const mindMapData = {
  topic: 'JavaScript Fundamentals',
  branches: [
    {
      name: 'Data Types',
      subTopics: ['String', 'Number', 'Boolean', 'Object', 'Array']
    },
    {
      name: 'Control Flow',
      subTopics: ['if/else', 'switch', 'loops']
    },
    {
      name: 'Functions',
      subTopics: ['Declaration', 'Arrow Functions', 'Parameters']
    },
    {
      name: 'DOM Manipulation',
      subTopics: ['querySelector', 'addEventListener', 'createElement']
    }
  ]
};
console.log(visual.generateMindMap(mindMapData));

// Example 3: Flowchart Diagram
console.log('\n3. Flowchart Diagram:');
const flowchartData = {
  type: 'flowchart',
  elements: [
    'Start: Open Editor',
    'Write Code',
    'Save File',
    'Run Program',
    'Check Output',
    'End: Success!'
  ]
};
console.log(visual.createDiagram(flowchartData));

// Example 4: Comparison Diagram
console.log('\n4. Comparison Diagram:');
const comparisonData = {
  type: 'comparison',
  elements: [
    { name: 'let', description: 'Block-scoped, can be reassigned' },
    { name: 'const', description: 'Block-scoped, cannot be reassigned' },
    { name: 'var', description: 'Function-scoped, can be reassigned (legacy)' }
  ]
};
console.log(visual.createDiagram(comparisonData));

// Example 5: Organized Notes
console.log('\n5. Organized Visual Notes:');
const notes = [
  { text: 'Arrays are ordered collections', category: 'concept' },
  { text: 'Use array.push() to add elements', category: 'definition' },
  { text: 'const fruits = ["apple", "banana"];', category: 'example' },
  { text: 'Arrays start at index 0', category: 'important' }
];
console.log(visual.organizeNotes(notes));

console.log('\n' + '='.repeat(60));
console.log('✅ Visual learning examples complete!\n');
