//your JS code here. If required.
// script.js

document.getElementById('btn').addEventListener('click', async function() {
  // Get user input
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  // Parse delay input to ensure it's a valid number
  const delay = parseInt(delayInput, 10);

  // Validate inputs
  if (!textInput || isNaN(delay) || delay <= 0) {
    alert('Please enter valid input for text and delay');
    return;
  }

  // Delay using async/await
  await new Promise(resolve => setTimeout(resolve, delay * 1000));

  // Display message
  const outputDiv = document.getElementById('output');
  outputDiv.innerText = textInput;
});
