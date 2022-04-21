let num = 0;
const form = document.querySelector('.form');
const input = form.querySelector('input');
const startNums = document.querySelectorAll(".start");
const mFeed = document.querySelector(".mFeed");
const fMeter = document.querySelector(".fMeter");
const lGallon = document.querySelector(".lGallon");
const gLiter = document.querySelector(".gLiter");
const kPound = document.querySelector(".kPound");
const pKilogram = document.querySelector(".pKilogram");


form.addEventListener('submit', e => {
    e.preventDefault();
    num = input.value
    
    startNums.forEach((startNum) => {
        startNum.textContent = num;
    });

    mFeed.textContent = (num * 3.28084).toFixed(3);
    fMeter.textContent = (num / 3.28084).toFixed(3);
    lGallon.textContent = (num * 0.2641720524).toFixed(3);
    gLiter.textContent = (num / 0.2641720524).toFixed(3);
    kPound.textContent = (num * 2.20462).toFixed(3);
    pKilogram.textContent = (num / 2.20462).toFixed(3);

    input.value = ''
})