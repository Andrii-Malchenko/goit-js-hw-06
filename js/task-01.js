const listEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${ listEl.length }`);

listEl.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelector('ul').childElementCount}`);
});