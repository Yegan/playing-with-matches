document.addEventListener("DOMContentLoaded", function (event) {
    let displayRandom = document.querySelector('.random')
    let button = document.querySelector('.clickButton')



    function getRandom() {
        let randomNum = Math.random();
        displayRandom.innerHTML = randomNum
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }

    getRandom()
getRandomInt()
    button.addEventListener('click', function () {
        getRandom()
    });



});