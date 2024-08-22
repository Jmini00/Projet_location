////////////////// form ////////////////////////////
const formSearch = () => {
    const formSearchResa = document.getElementById('search');   
    formSearchResa.addEventListener('submit', (e) => {
        e.preventDefault();
        // A faire: traitement des dates: la date d'arrivée ne doit pas être antérieurs à la de depart
        var formData = new FormData(e.target);
        alert(JSON.stringify(Object.fromEntries(formData)));
        sessionStorage.setItem('searchCar', JSON.stringify(Object.fromEntries(formData)));
    })
}

export {formSearch};