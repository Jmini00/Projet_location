import { cars } from './datas.js';
import { loadDatas, infiniteScroll, pageNumber, itemsPerPage } from './modules/loadDatas.js';
import { slider } from './modules/slider.js';
import { mobileMenu } from './modules/mobileMenu.js';
import { formSearch } from './modules/formSearch.js';
import { loadDatasAll } from './modules/loadDatasAll.js';
import { datasSort } from './modules/datasSort.js';


mobileMenu();
slider(itemsPerPage, cars);
formSearch();
loadDatas(pageNumber, itemsPerPage, cars);
infiniteScroll(cars);


// bonus select  trier par: à finir (avec utilisation de loadDatas)
const typeOrder = document.getElementById('type-order');
typeOrder.addEventListener('input', (e)=> {   
    const carsSort = datasSort(cars, e.target.value);    
    const carsResults = document.getElementById('container-results');
    carsResults.innerHTML ="";
    loadDatasAll(carsSort);
})












