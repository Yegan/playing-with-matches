document.addEventListener("DOMContentLoaded", function (event) {
    //let button = document.querySelector('.clickButton')
    let numberElements = document.querySelectorAll('.num')
   // let num = document.querySelector('.num')

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
           // numberElement.value = arbitraryNum(min, max)
            //numberElement.value = arbitraryNum(min, max)
            console.log(numberElement.value)

            if(numOne == numTwo){
                if(numTwo == numThree)
                classList.add('.yellow')

            }
        }

    }

    getRandomArbitrary()

    // button.addEventListener('click', function () {
    //     getRandomArbitrary()
    // });

});