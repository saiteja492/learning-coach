/**
 * Reading/Writing Learning Example
 * Demonstrates smart notes, summaries, and writing prompts
 */

const ReadingWritingLearning = require('../src/reading-writing/readingWritingLearning');

const readingWriting = new ReadingWritingLearning();

console.log('\n📝 READING/WRITING LEARNING EXAMPLES\n');
console.log('='.repeat(60));

// Example 1: Smart Notes
console.log('\n1. Smart Notes Creation:');
const content = `JavaScript is a high-level, interpreted programming language. It is characterized by 
dynamic typing, prototype-based object-orientation, and first-class functions. JavaScript is 
primarily used for creating interactive web pages and is an essential part of web development.`;

const note = readingWriting.createSmartNotes(content, { 
  style: 'cornell', 
  highlightKeywords: true 
});
console.log('Note ID:', note.id);
console.log('Style:', note.style);
console.log('Created:', note.createdAt);
console.log('\nKeywords:', note.keywords.join(', '));
console.log('\nStructure:');
console.log('Cue Column:', note.structure.cueColumn.join('\n             '));
console.log('\nNote Column:');
note.structure.noteColumn.slice(0, 3).forEach(line => console.log('  -', line));
console.log('\nSummary:', note.structure.summary);

// Example 2: Different Note Styles
console.log('\n\n2. Outline Notes:');
const outlineNote = readingWriting.createSmartNotes(content, { style: 'outline' });
console.log('Main Topics:', outlineNote.structure.mainTopics.slice(0, 2).join(' | '));
console.log('Subtopics:', outlineNote.structure.subtopics.slice(0, 2).join(' | '));

// Example 3: Summaries
console.log('\n\n3. Content Summaries:');

// Paragraph summary
const paragraphSummary = readingWriting.generateSummary(content, { 
  type: 'paragraph', 
  length: 'short' 
});
console.log('Paragraph Summary (Short):');
console.log(paragraphSummary.content);

// Bullet summary
const bulletSummary = readingWriting.generateSummary(content, { 
  type: 'bullet', 
  length: 'medium' 
});
console.log('\nBullet Summary (Medium):');
console.log(bulletSummary.content);

// Executive summary
const execSummary = readingWriting.generateSummary(content, { 
  type: 'executive', 
  length: 'long' 
});
console.log('\n' + execSummary.content);

// Example 4: Writing Prompts
console.log('\n\n4. Writing Prompts:');

// Reflective prompts
console.log('\nReflective Prompts:');
const reflectivePrompts = readingWriting.generateWritingPrompts({ 
  subject: 'JavaScript', 
  type: 'reflective' 
});
reflectivePrompts.forEach(prompt => {
  console.log(`\n  ${prompt.id}. ${prompt.prompt}`);
  console.log(`     Suggested length: ${prompt.suggestedLength}`);
  console.log(`     Time: ${prompt.estimatedTime}`);
});

// Analytical prompts
console.log('\n\nAnalytical Prompts:');
const analyticalPrompts = readingWriting.generateWritingPrompts({ 
  subject: 'JavaScript', 
  type: 'analytical' 
});
analyticalPrompts.slice(0, 2).forEach(prompt => {
  console.log(`\n  ${prompt.id}. ${prompt.prompt}`);
});

// Creative prompts
console.log('\n\nCreative Prompts:');
const creativePrompts = readingWriting.generateWritingPrompts({ 
  subject: 'JavaScript', 
  type: 'creative' 
});
creativePrompts.slice(0, 2).forEach(prompt => {
  console.log(`\n  ${prompt.id}. ${prompt.prompt}`);
});

// Example 5: Study Guide
console.log('\n\n5. Study Guide:');
const studyGuideContent = {
  title: 'JavaScript Fundamentals Study Guide',
  material: content,
  learningObjectives: [
    'Understand what JavaScript is',
    'Learn key JavaScript characteristics',
    'Identify JavaScript use cases'
  ]
};

const studyGuide = readingWriting.createStudyGuide(studyGuideContent);
console.log('Title:', studyGuide.title);
console.log('Created:', studyGuide.createdAt);
console.log('\nSections:');
studyGuide.sections.forEach(section => {
  console.log(`\n  ${section.name}:`);
  if (Array.isArray(section.content)) {
    section.content.forEach(item => console.log(`    - ${item}`));
  } else {
    console.log(`    ${section.content}`);
  }
});

// Example 6: Annotations
console.log('\n\n6. Annotation Suggestions:');
const annotations = readingWriting.generateAnnotations(content);
console.log('Suggested Annotations:');
annotations.slice(0, 3).forEach(annotation => {
  console.log(`  • ${annotation.term} (${annotation.importance})`);
  console.log(`    ${annotation.suggestion}`);
});

// Example 7: Note Templates
console.log('\n\n7. Note Templates:');

// Lecture template
const lectureTemplate = readingWriting.getNoteTemplate('lecture');
console.log('\nLecture Note Template:');
console.log('Structure:', lectureTemplate.structure.join(' → '));
console.log('Format:', lectureTemplate.format);

// Reading template
const readingTemplate = readingWriting.getNoteTemplate('reading');
console.log('\nReading Note Template:');
console.log('Structure:', readingTemplate.structure.join(' → '));
console.log('Format:', readingTemplate.format);

// Meeting template
const meetingTemplate = readingWriting.getNoteTemplate('meeting');
console.log('\nMeeting Note Template:');
console.log('Structure:', meetingTemplate.structure.join(' → '));
console.log('Format:', meetingTemplate.format);

// Example 8: Export Notes
console.log('\n\n8. Export Notes:');

// Export as markdown
const markdownExport = readingWriting.exportNote(note, 'markdown');
console.log('Markdown Export (first 150 chars):');
console.log(markdownExport.substring(0, 150) + '...');

// Export as text
const textExport = readingWriting.exportNote(note, 'text');
console.log('\nText Export (first 150 chars):');
console.log(textExport.substring(0, 150) + '...');

// Example 9: Search Notes
console.log('\n\n9. Search Notes:');
readingWriting.createSmartNotes('Functions are reusable blocks of code', { style: 'basic' });
readingWriting.createSmartNotes('Arrays store multiple values in a single variable', { style: 'basic' });

const searchResults = readingWriting.searchNotes('JavaScript');
console.log(`Found ${searchResults.length} note(s) matching "JavaScript"`);
searchResults.forEach(result => {
  console.log(`  - Note ID: ${result.id}`);
  console.log(`    Content preview: ${result.content.substring(0, 60)}...`);
});

// Example 10: Get All Notes and Summaries
console.log('\n\n10. All Notes and Summaries:');
const allNotes = readingWriting.getAllNotes();
const allSummaries = readingWriting.getAllSummaries();
console.log('Total Notes Created:', allNotes.length);
console.log('Total Summaries Created:', allSummaries.length);

console.log('\n' + '='.repeat(60));
console.log('✅ Reading/Writing learning examples complete!\n');
