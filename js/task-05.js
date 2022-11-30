const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (newInput) => {
    nameOutput.textContent = newInput.currentTarget.value;

    if (newInput.currentTarget.value === '') {
        nameOutput.textContent = 'Anonymus';
    };
});