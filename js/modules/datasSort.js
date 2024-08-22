import { cars } from "../datas.js";
// copie du tableau pour affichage initial
const carsDefault = [...cars];

const datasSort = (cars, type) => {
    switch (type) {
        case 'price':
            // tri numerique
            cars.sort((a, b) => {
                return a.price - b.price
            })            
            break;
        case 'model':
            // tri alphabetique
            cars.sort((a, b) => {               
                return a.model > b.model
            })            
            break;
            default:
                cars = carsDefault;
    }    
    return cars;
}

export {datasSort};