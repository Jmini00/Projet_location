import { arrowsHandler } from "./arrowHandler.js";
const nbrePageMax = 2;
let pageNumber = 1;
const itemsPerPage = 4;

// chargement des données JSON cars 
const loadDatas = (pageNumber, itemsPerPage, cars) => {
    const carsResults = document.getElementById('container-results');
    // Afichage nbre e resultats
    const resultsElement = document.getElementById("nbre-results");
    const nbreResults = cars.length;
    resultsElement.innerHTML = `${nbreResults} résultats`;
    // bornes des index pour affichage des items 
    const numSup = (pageNumber * itemsPerPage) - 1;
    const numInf = numSup - itemsPerPage + 1;  
   

    if (pageNumber <= nbrePageMax) {
        for (let i = numInf; i <= numSup; i++) {
            // remarquer ici le data-id dans article
            // il sera utilisé dans la fonction arrowHandler    
            const article = `
            <article class="flex-row" data-id="${cars[i].id}">
                    <figure>
                        <img src="images/arrow-left.gif" alt="fleche gauche">                    
                        <img src="images/${cars[i].thumbnails[0]}" alt="${cars[i].model}">
                        <img src="images/arrow-right.gif" alt="fleche droite">
                    </figure>
                    <div>
                        <h3>${cars[i].model}</h3>
                        <p>${cars[i].description} </p>
                        <p>${cars[i].price}€ - Agence de <span>${cars[i].agence}</span></p>
                        <button>Reserver et payer</button>
                    </div>
                </article>
                <hr>
            `;           
            
            carsResults.insertAdjacentHTML('beforeend', article);
            
        }
    }
    // ici on recupere tous les articles  
    const articles = carsResults.querySelectorAll('article');
   
    // Fct qui gère les sliders des vignettes   
    arrowsHandler(cars, articles);

}

// chargement des données quand les scroll arrive en bas de page
const infiniteScroll = (cars) => {    
    window.addEventListener('scroll', () => {
        const {
            scrollTop, // nbre de pixel scrollé = window.scrollY
            scrollHeight, // hauteur total du document
            clientHeight // hauteur de la partie visible du document
        } = document.documentElement;
    
        if (scrollTop + clientHeight >= scrollHeight) {
            console.log("-------------------");
            pageNumber++;
            loadDatas(pageNumber, itemsPerPage, cars);
        }
    })
}

export {loadDatas, infiniteScroll, pageNumber, itemsPerPage};