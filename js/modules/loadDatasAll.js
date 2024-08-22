const loadDatasAll = (cars)=> {
    const carsResults = document.getElementById('container-results');
    for(let car of cars) {
        const article = `
            <article class="flex-row" data-id="${car.id}">
                    <figure>
                        <img src="images/arrow-left.gif" alt="fleche gauche">                    
                        <img src="images/${car.thumbnails[0]}" alt="${car.model}">
                        <img src="images/arrow-right.gif" alt="fleche droite">
                    </figure>
                    <div>
                        <h3>${car.model}</h3>
                        <p>${car.description} </p>
                        <p>${car.price}€ - Agence de <span>${car.agence}</span></p>
                        <button>Reserver et payer</button>
                    </div>
                </article>
                <hr>
            `;           
            
            carsResults.insertAdjacentHTML('beforeend', article);
    }
}
export {loadDatasAll};