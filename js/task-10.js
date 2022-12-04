function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

const createBoxes = amount => {
  const result = [...Array(amount).keys()]
    .reduce((previous, current) => {
      previous.push(
        `<div style="width: ${30 + current * 10}px; height: ${
          30 + current * 10
        }px; background-color: ${getRandomHexColor()};"></div>`
      );
      return previous;
    }, [])
    .join('');

  boxesRef.insertAdjacentHTML('afterbegin', result);
};

createBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('#controls input');
  console.dir(inputEl);
  createBoxes(inputEl.valueAsNumber);
});

const destroyBoxes = () => {
  destroyBtn.addEventListener('click', () => {
    boxesRef.innerHTML = '';
  });
};
destroyBoxes();