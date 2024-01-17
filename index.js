

$(document).ready(function () {

    //const cards = document.querySelectorAll(".services-card")
    const cards = $(".services-card")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const intersecting = entry.isIntersecting
            if(screen.width < 640 || screen.height < 480){
                $(entry.target).css("filter", intersecting ? "grayscale(0%)" : "grayscale(100%)");
            }
          })
    },{
        threshold:1
    })

    cards.each(function(i, card) {
        observer.observe(card)
    });

});
