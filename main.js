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
        interval = setInterval(function(){
            $slideContainerb.animate{},
            animationspeed,
            function(){
                currentSlide++;
                if(currentSlide == $slides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            }
        }, pause)
    }

    //create a function to stop the slider
    function pauseSlider(){

    }
}