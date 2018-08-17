document.addEventListener("DOMContentLoaded", function (event) {

    let numOne = document.querySelector('.numOne')
    let numTwo = document.querySelector('.numTwo')
    let numThree = document.querySelector('.numThree')

    //let button = document.querySelector('.clickButton')
    let numberElements = document.querySelectorAll('.num')

    var users = localStorage.getItem('users');

    var storedUsers = users ? JSON.parse(users): {};


    let count = document.querySelector('.counter')
    let theMessage = document.querySelector('.message')
   // let num = document.querySelector('.num')

   let counter = 0;

    function arbitraryNum(min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomArbitrary() {

        let min = 1;
        let max = 9;

        for (let i = 0; i < numberElements.length; i++) {
            console.log(numberElements)
            let numberElement = numberElements[i]
            numberElement.innerHTML = arbitraryNum(min, max)

        }
        if (numOne.innerHTML == numTwo.innerHTML) {
            numOne.classList.add('yellow')
            numTwo.classList.add('yellow')
            theMessage.innerHTML = 'row one and row two matched'
            counter ++
        }

        // if (numOne.innerHTML == numThree.innerHTML) {
        //     numOne.classList.add('yellow')
        //     numThree.classList.add('yellow')
        // }

        if (numTwo.innerHTML == numThree.innerHTML) {
            numTwo.classList.add('yellow')
            numThree.classList.add('yellow')
            theMessage.innerHTML = 'row two and row three matched'

            counter ++
        }

        

        count.innerHTML = counter
    }
    
    getRandomArbitrary()

    // button.addEventListener('click', function () {
    //     getRandomArbitrary()
    // });

});