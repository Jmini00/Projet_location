// Infinite scroll
import { loadDatas } from "./loadDatas";
import { cars } from "../datas";

let pageNumber = 1;
const infiniteScroll = () => {    
    window.addEventListener('scroll', () => {
        // decomposition
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

export {infiniteScroll, pageNumber} ;