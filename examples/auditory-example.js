/**
 * Auditory Learning Example
 * Demonstrates text-to-speech and podcast-style summaries
 */

const AuditoryLearning = require('../src/auditory/auditoryLearning');

const auditory = new AuditoryLearning();

console.log('\n🎧 AUDITORY LEARNING EXAMPLES\n');
console.log('='.repeat(60));

// Example 1: Text to Speech
console.log('\n1. Text-to-Speech Conversion:');
const text = 'JavaScript is a versatile programming language. It runs in browsers and servers. Modern JavaScript includes many powerful features.';
const speech = auditory.textToSpeech(text, { 
  rate: 'normal', 
  emphasis: ['JavaScript', 'powerful'] 
});
console.log('Original text:', text);
console.log('\nSpeech-ready format:', speech.text);
console.log('Rate:', speech.rate);
console.log('Estimated duration:', speech.duration);

// Example 2: Podcast-Style Summary
console.log('\n2. Podcast-Style Summary:');
const podcastContent = {
  topic: 'Understanding JavaScript Functions',
  points: [
    {
      title: 'What are Functions?',
      explanation: 'Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.',
      example: 'think of a function like a recipe - you write it once and use it many times.'
    },
    {
      title: 'Function Declaration',
      explanation: 'You can declare functions using the function keyword, followed by a name and parameters.',
      example: 'function greet(name) { return "Hello " + name; } creates a greeting function.'
    },
    {
      title: 'Arrow Functions',
      explanation: 'Modern JavaScript introduced arrow functions, which provide a shorter syntax.',
      example: 'const greet = (name) => "Hello " + name; does the same thing more concisely.'
    }
  ],
  conclusion: 'functions are fundamental to JavaScript programming. Practice writing different types of functions to master this concept.'
};
console.log(auditory.createPodcastSummary(podcastContent));

// Example 3: Chapter Markers
console.log('\n3. Audio Chapter Markers:');
const sections = [
  { title: 'Introduction to Variables', duration: 90 },
  { title: 'Working with Arrays', duration: 120 },
  { title: 'Understanding Objects', duration: 150 },
  { title: 'Functions and Scope', duration: 180 },
  { title: 'Conclusion and Next Steps', duration: 60 }
];
const markers = auditory.generateChapterMarkers(sections);
console.log('Chapter Markers:');
markers.forEach(marker => {
  console.log(`  ${marker.startTime} - ${marker.title} (${marker.duration}s)`);
});

// Example 4: Listening Questions
console.log('\n4. Listening Comprehension Questions:');
const questions = auditory.createListeningQuestions('JavaScript Functions');
questions.forEach((q, index) => {
  console.log(`\nQuestion ${index + 1} (${q.type}):`);
  console.log(`  ${q.question}`);
  console.log(`  Hint: ${q.hint}`);
});

// Example 5: Study Playlist
console.log('\n5. Study Playlist:');
const topics = [
  { title: 'JavaScript Basics', duration: '8:30', type: 'tutorial' },
  { title: 'Functions Deep Dive', duration: '12:15', type: 'lecture' },
  { title: 'Arrays and Objects', duration: '10:45', type: 'workshop' },
  { title: 'ES6 Features', duration: '15:00', type: 'overview' },
  { title: 'Practice Exercises', duration: '20:00', type: 'practice' }
];
const playlist = auditory.createStudyPlaylist(topics);
console.log('\nPlaylist:', playlist.name);
console.log('Description:', playlist.description);
console.log('Total Duration:', playlist.totalDuration);
console.log('\nTracks:');
playlist.tracks.forEach(track => {
  console.log(`  ${track.trackNumber}. ${track.title} (${track.duration}) - ${track.type}`);
});

// Example 6: Audio Script
console.log('\n6. Audio-Friendly Script:');
const longText = 'In JavaScript, there are 7 primitive types: string, number, boolean, null, undefined, symbol, and bigint. Understanding these is crucial.';
const audioScript = auditory.generateAudioScript(longText);
console.log(audioScript);

console.log('\n' + '='.repeat(60));
console.log('✅ Auditory learning examples complete!\n');
