//////////////// Slider //////////////////////////
const intervalMsec = 3000;

const slider = (itemsPerPage, cars, index=0) => {
    const slider = document.getElementById('home-slider');
    const imgSlider = document.createElement('img');    
    slider.prepend(imgSlider);
    const imgFolder = 'images/slider/';  
    imgSlider.src = imgFolder + cars[index].image; 
    
    const interval = setInterval(()=> {
        index++;        
        if(index >= itemsPerPage) {
            index = 0;
        }       
        imgSlider.src = imgFolder + cars[index].image;       
    }, intervalMsec)
}

export {slider};