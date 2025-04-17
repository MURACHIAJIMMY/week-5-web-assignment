// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'The text has been changed dynamically!';
  });
  
  // Add or remove an element
  document.getElementById('add-element-btn').addEventListener('click', () => {
    const container = document.getElementById('element-container');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamically added element.';
    container.appendChild(newElement);
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('toggle-style-btn').addEventListener('click', () => {
    const styleText = document.getElementById('style-text');
    styleText.classList.toggle('highlight');
  });