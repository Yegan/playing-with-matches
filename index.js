document.addEventListener("DOMContentLoaded", function (event) {
    let button = document.querySelector('.clickButton')
    let numberElements = document.querySelectorAll('.num')


    function arbitraryNum(min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomArbitrary() {

        let min = 1;
        let max = 9;

        for (let i = 0; i < numberElements.length; i++) {
            let numberElement = numberElements[i]
            numberElement.innerHTML = arbitraryNum(min, max)
        }
    }

    getRandomArbitrary()

    button.addEventListener('click', function () {
        getRandomArbitrary()
    });

});