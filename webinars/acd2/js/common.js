document.addEventListener("DOMContentLoaded", function(event) {
    $('.menu__btn').click(function (e) {
        const isCollapsed = !document.querySelector('.sidemenu').classList.contains('active')

        if (isCollapsed) {
            $('.sidemenu').addClass('active')
        } else {
            $('.sidemenu').removeClass('active')
        }
    })
});
