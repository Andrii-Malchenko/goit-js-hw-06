const refs = {
    inputFontSize: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
refs.text.style.fontSize = refs.inputFontSize.value + 'px';

refs.inputFontSize.addEventListener('input', () => {
    refs.text.style.fontSize = `${refs.inputFontSize.value}px`;
});