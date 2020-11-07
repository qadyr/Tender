document.addEventListener("DOMContentLoaded", function(event) {
    // accordions logic
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

    // tooltip
    const body = document.querySelector('body')
    const tooltip = document.querySelector('.tooltip__text')
    body.addEventListener('scroll', function() {
        tooltip.classList.add('hide')
    })
    body.addEventListener('click', function() {
        tooltip.classList.add('hide')
    })

    // live events
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

    // intersection observer
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }
    let target = document.querySelector('#btn_block')
    let subTarget = document.querySelector('.buttons')
    // функция обратного вызова
    let callback = function(entries, observer){
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                const target = entry.target
                // выводим информацию в консоль - проверка работоспособности наблюдателя
                console.log(target)
                // меняем фон контейнера
                subTarget.classList.remove('ac')
            } else {
                // меняем фон контейнера
                subTarget.classList.add('ac')
            }
        })
    }
    
    // наблюдатель
    let observer = new IntersectionObserver(callback, options)
    observer.observe(target)
});