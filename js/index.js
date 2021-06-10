var slider = document.getElementById('myRangeOne');
var output = document.getElementById('valueOne');

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}
slider.addEventListener('mousemove', function () {
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(89,36,235)' + x + '%, rgba(255,255,255, 0.5)' + x + '%)';
    slider.style.background = color;
});


var sliderTwo = document.getElementById('myRangeTwo');
var outputTwo = document.getElementById('valueTwo');

outputTwo.innerHTML = sliderTwo.value;

sliderTwo.oninput = function () {
    outputTwo.innerHTML = this.value;
}
sliderTwo.addEventListener('mousemove', function () {
    var y = sliderTwo.value;
    var colorTwo = 'linear-gradient(90deg, rgb(89,36,235)' + y + '%, rgba(255,255,255, 0.5)' + y + '%)';
    sliderTwo.style.background = colorTwo;
});





var cardTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.what__cards',
        start: 'start bottom',
    }
});
cardTl.to('.what__cardOne', { duration: .3, scaleY: 1, });
cardTl.fromTo('.innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardTl.to('.what__cardTwo', { duration: .3, scaleY: 1, });
cardTl.fromTo('.innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardTl.to('.what__cardTh', { duration: .3, scaleY: 1, });
cardTl.fromTo('.innerTh', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

var cardTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.have__cards',
        start: 'start bottom',
    }
});
cardTwoTl.to('.have__cardOne', { duration: .3, scaleY: 1, });
cardTwoTl.fromTo('.have__card-innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardTwoTl.to('.have__cardTwo', { duration: .3, scaleY: 1, });
cardTwoTl.fromTo('.have__card-innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

var cardThTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.fees__cards',
        start: 'start bottom',
    }
});
cardThTl.to('.fees__cardOne', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardThTl.to('.fees__cardTwo', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardThTl.to('.fees__cardTh', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerTh', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardThTl.to('.fees__cardFr', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerFr', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

var cardFrTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.completely__cards',
        start: 'start bottom',
    }
});
cardFrTl.to('.completely__cardOne', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardFrTl.to('.completely__cardTwo', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardFrTl.to('.completely__cardTh', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerTh', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardFrTl.to('.completely__cardFr', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerFr', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

AOS.init(
    {
        offset: 100,
        ease: 'ease',
        once: true,
    }
);