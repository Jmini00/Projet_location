////////////// affichage des vignettes du main au clic sur les fleches ///////////////////

// fct appelée dans loadDatas (a la fin)
const arrowsHandler = (cars, articles) => {    
    // on boucle sur tous les articles
    for (let article of articles) {
        // on recupere l'id de chaque article
        const id = article.dataset.id;
        const arrowLeft = article.querySelector('img[src *= left]');
        const arrowRight = article.querySelector('img[src *= right]');
        // init de l'index du tableau thumbnails de cars
        let thumbnailsIndex = 0;
        
        arrowLeft.addEventListener('click', (e) => {
            // on recupere l'img thumbnail
            const thumbnailElement = e.target.nextElementSibling;
            console.log(thumbnailElement);
            // on recherche dans le JSON cars l'objet qui correspond a l'id de l'article
            for (let car of cars) {
                if (car.id == id) {
                    // longueur de chaque tableau thumnails de cars
                    const thumbnailsLength = car.thumbnails.length;                    
                    thumbnailsIndex--;
                    if (thumbnailsIndex < 0) {
                        thumbnailsIndex = 0;
                    }
                    // affichage des img du tableau thumnails de cars au clic
                    thumbnailElement.src = `images/${car.thumbnails[thumbnailsIndex]}`;
                    // des qu'on a trouvé le bon objet on arrete la boucle
                    break;
                }
            }

        })

        arrowRight.addEventListener('click', (e) => {
            const thumbnailElement = e.target.previousElementSibling;
            console.log(thumbnailElement);
            for (let car of cars) {
                if (car.id == id) {                   
                    const thumbnailsLength = car.thumbnails.length;                   
                    thumbnailsIndex++;
                    if (thumbnailsIndex > thumbnailsLength - 1) {
                        thumbnailsIndex = 0;
                    }                    
                    thumbnailElement.src = `images/${car.thumbnails[thumbnailsIndex]}`;
                    break;
                }
            }

        })

    }

}

export {arrowsHandler};