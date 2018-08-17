document.addEventListener("DOMContentLoaded", function (event) {
    let button = document.querySelector('.clickButton')
    let one = document.querySelector('.numOne')

    let two = document.querySelector('.numTwo')
    let three = document.querySelector('.numThree')
    //let numberOne = one.value;
    //let numberTwo = two.value;

    // function getRandom() {
    //     let randomNum = Math.floor(Math.random());
    //     displayRandom.innerHTML = randomNum

    //     one.innerHTML = randomNum

    //     two.innerHTML = randomNum

    // }


    function arbitraryNumOne(min, max) {

        //return Math.floor(Math.random()) * Math.floor((max - min) + min)
        return Math.floor( Math.random() * (max - min) + min);
      }

      function arbitraryNumTwo(min, max) {

        //return Math.floor(Math.random()) * Math.floor((max - min) + min)
        return Math.floor( Math.random() * (max - min) + min);
      }

      function arbitraryNumThree(min, max) {

        //return Math.floor(Math.random()) * Math.floor((max - min) + min)
        return Math.floor( Math.random() * (max - min) + min);
      }

    function getRandomArbitrary() {

    let min = 1;
    let max = 9;
            
                //let randomNum = Math.random() * (max - min) + min;
                //let randomNum = arbitraryNum(min, max)
        //console.log(randomNum)

        one.innerHTML = arbitraryNumOne(min, max)

        two.innerHTML = arbitraryNumTwo(min, max)

        three.innerHTML = arbitraryNumThree(min, max)

        //return Math.floor(Math.random() * (max - min) + min);
      }

    // function getRandomInt(one, two) {
    //     let oneValue = one.value;
    //     let twoValue = two.value;
    //     min = math.Random(oneValue);
    //     max = math.Random(twoValue);

    //     one.innerHTML = min;            
    //     two.innerHTML = max;
    //     //return Math.floor(Math.random() * (max - min)) + min; 
    //   }

   // getRandom()
    getRandomArbitrary()
    button.addEventListener('click', function () {
        getRandomArbitrary()
       // getRandom()
    });



});