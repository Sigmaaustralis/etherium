const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const originalInput = textInput.value;

    if (originalInput.trim() === '') {
        alert('Please input a value.');
        return;
    }

    resultDiv.textContent = ''; 

    const cleanedInput = originalInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    
    let message = `${originalInput} `;

    if (cleanedInput === reversedInput) {
        message += 'is a palindrome.';
    } else {
        message += 'is not a palindrome.';
    }

    resultDiv.textContent = message;
});
