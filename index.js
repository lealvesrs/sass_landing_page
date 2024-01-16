$(document).ready(function () {

    const cards = document.querySelectorAll(".services-card")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const intersecting = entry.isIntersecting
            if(screen.width < 640 || screen.height < 480){
                entry.target.style.filter = intersecting ? "grayscale(0%)" : "grayscale(100%)"
            }
          })
    },{
        threshold:1
    })


    cards.forEach(card =>{
        observer.observe(card)
    });

});
