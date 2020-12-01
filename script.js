//Variable Select Card Class
var cards = document.querySelectorAll(".card");

//For Loop Iterate over Card array
for (i = 0; i < cards.length; i++) {
    effect(cards[i])
};

//Effect function with mousemove/mouseleave event listener 
//Mousemove reference https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event triggered when mouse pointer is over/on element.
//Mouseleave reference https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event triggered when mouse leaves element.

function effect(card) {
    card.addEventListener('mousemove', function (e) {
        
        var winhi = window.innerHeight / 2,
            offsetX = this.offsetLeft,
            offsetY = this.offsetWidth / 2;
        this.style.setProperty('--mouseX', (e.clientX - offsetX - offsetY) / 20);
        this.style.setProperty('--mouseY', (e.clientY - winhi) / 20);
    });

    card.addEventListener('mouseleave', function (e) {

        this.style.setProperty('--mouseX', 0);
        this.style.setProperty('--mouseY', 0);
    });
}