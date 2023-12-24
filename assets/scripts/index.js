window.onload = async () => {
    const full_stars = `
        <div class="d-flex">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
        </div>  
    `

    const half_stars = `
        <div class="d-flex">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/full_star.svg" alt="star">
            <img class="rating_star" src="../../public/icons/half_star.svg" alt="star">
        </div>  
    `

    await fetch('/assets/scripts/data.json')
        .then(response => response.json())
        .then(items => {
            let htmlWrapper = document.querySelector('.reviews-ItemsWrapper')
            for (let i = 0; i < items.length; i++) {
                let item = items[i]
                htmlWrapper.innerHTML += `
                    <article class="reviews-item__card card-light">
                        <div class="reviews-item__container card-container">
                            <div class="reviews-item__head d-flex align-center">
                                <div class="reviews-item__name card-light-title">${item.name}</div>
                                <div class="reviews-item__date card-text">${item.date}</div>
                            </div>

                            <div class="reviews-item__stars d-flex">${item.rating === "half" ? half_stars : full_stars}</div>
                            <div class="reviews-item__text card-light-text">${item.text}</div>
                        </div>
                     </article>
                `
            }
        });
}