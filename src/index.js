document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".ratings span");
    let ratingsStorage = [];
    let idValue = 1;
    
    stars.forEach((star) => {
        star.addEventListener("click", () => {
            const ratingValue = star.dataset.rating;

            stars.forEach((s) => {
                if (s.dataset.rating <= ratingValue) {
                    s.setAttribute("data-clicked", "true");
                } else {
                    s.removeAttribute("data-clicked");
                }
            });
            ratingsStorage.push({ [`ratingId_${idValue}`]: ratingValue });
            idValue += 1; 
        });
    });


    //Tip logic
});
