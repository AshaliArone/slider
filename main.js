`use strict`

$functiojn(){

    //setings for the slider;
    let width = 720;
    let animationspeed = 1000;
    let pause = animationspeed + 500 //1500
    let currentSlide = 1;
    //cache DOM elements
    let $slideContainer = $(`.slider`);
    let $slides = $(`.slide`);

    //create a function that will start the slider
    function startSlider(){
        interval = setInterval(
            $slideContainer.animate(),
            animationspeed,
            function(){}
        )
    }

    //create a function to stop the slider
    function pauseSlider(){

    }
}