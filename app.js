const d = document;

const btnReset = d.querySelector('#reset');
const inputRange = d.querySelector('#range');
const btnFilter = d.querySelector('#filter');
const btnRotateRight = d.querySelector('.rotate-right');
const btnRotateLeft = d.querySelector('.rotate-left');
const btnChoose = d.querySelector('.choose-img-btn');
const btnSave = d.querySelector('.save-img-btn');
let image = d.querySelector('#image');


d.addEventListener('click', (e) => {
    console.log(e.target.classList[2]);
    let fil = e.target.classList[2];

    switch (fil) {
        case 'brightness':
            image.classList.add('brightness');        
            inputRange.addEventListener('input', (e) => {
                image.style.filter = `brightness(${e.target.value}%)`;
            } );
            break;
        case 'contrast':
            image.classList.add('contrast');
            inputRange.addEventListener('input', (e) => {
                image.style.filter = `contrast(${e.target.value}%)`;
            } );
            break;
        case 'grayscale':
            image.classList.add('grayscale');
            inputRange.addEventListener('input', (e) => {
                image.style.filter = `grayscale(${e.target.value}%)`;
            } );
            break;
        case 'sepia':
            image.classList.add('sepia');
            inputRange.addEventListener('input', (e) => {
                image.style.filter = `sepia(${e.target.value}%)`;
            });
            break;
            
    }

});



btnReset.addEventListener('click', resetFilter);
btnSave.addEventListener('click', saveImage);


function resetFilter (){
    image.style.filter = '';
    image.classList.remove('brightness');
    image.classList.remove('contrast');
    image.classList.remove('grayscale');
    image.classList.remove('sepia');
}

function saveImage (){
    console.log('save');  
}