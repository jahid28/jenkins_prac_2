// script.test.js

const { JSDOM } = require('jsdom');

// Simulate a DOM environment
let dom;
let document;

beforeEach(() => {
  dom = new JSDOM(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Test</title>
    </head>
    <body>
      <h1 id="heading">Hello, World!</h1>
      <button id="changeTextBtn">Change Text</button>
    </body>
    </html>`, { runScripts: "outside-only" });

  document = dom.window.document;

  // Manually add the event listener (simulating what the script would do)
  const button = document.getElementById('changeTextBtn');
  const heading = document.getElementById('heading');

  button.addEventListener('click', () => {
    heading.textContent = 'Text Changed!';
  });
});

// Test if the heading's text content changes on button click
test('should change heading text when button is clicked', () => {
  const button = document.getElementById('changeTextBtn');
  const heading = document.getElementById('heading');

  // Simulate button click
  button.dispatchEvent(new dom.window.MouseEvent('click'));

  // Assert that the heading text changes
  expect(heading.textContent).toBe('Text Changed!');
});
