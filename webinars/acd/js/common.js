document.addEventListener("DOMContentLoaded", function(event) {
    const accordions = document.querySelectorAll('.accordion')
    accordions.forEach(function(accordion) {
        const info = accordion.querySelector('.accordion__info')
        info.addEventListener('click', function(e) {
            const isOpened = accordion.classList.contains('accordion__open')
            if (isOpened) {
                accordion.classList.remove('accordion__open')
            } else {
                accordion.classList.add('accordion__open')
            }
        })
    })
    const body = document.querySelector('body')
    const tooltip = document.querySelector('.tooltip__text')
    body.addEventListener('scroll', function() {
        tooltip.classList.add('hide')
    })
    body.addEventListener('click', function() {
        tooltip.classList.add('hide')
    })
});