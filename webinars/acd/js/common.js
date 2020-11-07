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

    const currentTime = Date.now()
    const els = document.querySelectorAll('[data-start]')
    els.forEach(function(node) {
        const startTime = node.dataset.start
        const endTime = node.dataset.end
        const link = node.dataset.link
        if (!startTime || !endTime) {
            return
        }
        if (currentTime <= endTime && currentTime >= startTime) {
            const checkEl = node.querySelector('.accordion__check')
            checkEl.innerHTML = `<a href="${link ? link : '#'}" target="_blank"  class="onair"></a><a href="${link ? link : '#'}" target="_blank" class="live">LIVE</a>`
        }
    })
});