//get buttons/sliders
let gridCreateBtn = document.getElementById('createGridButton');
let gridDestroyBtn = document.getElementById('destroyGridButton');
let gridSlider = document.getElementById('gridSlider');
let eraseBtn = document.getElementById('eraseGridButton');
let parentDiv = document.querySelector('.container');
let gridSizeDisplayText = document.getElementById('gridSizeText');
let colorPicker = document.getElementById('colorPicker');


//get listeners
gridCreateBtn.addEventListener('click', createGrid);
eraseBtn.addEventListener('click', eraseGridColors);
gridSlider.addEventListener('change', updateGridSize);
colorPicker.addEventListener('change', colorChange);

//declare initial values
let divCount = 0;
gridSizeDisplayText.textContent = `The new grid will be ${gridSlider.value} x ${gridSlider.value}`;

//for loop to create grid
for (let i = 1; i <= 16; i++) {
    //declare div and p elements
    let div = document.createElement('div');


    //name divs sequentially and assign class
    div.id = `div${i}`;
    div.className = 'grid-item';
    div.addEventListener('mouseenter', hoverStart);


    //add div and p to DOM
    parentDiv.appendChild(div);


}

function hoverStart(e){
    let currentHover = e.currentTarget;
    currentHover.style.backgroundColor = colorPicker.value;
}



function eraseGridColors(){
    let grids = document.querySelectorAll('.grid-item');
    for (let index = 0; index < grids.length; index++) {
        grids[index].style.backgroundColor = 'transparent';
    }
}

function updateGridSize(){
    gridSizeDisplayText.textContent = `The new grid will be ${gridSlider.value} x ${gridSlider.value}`;
}

function destroyGrid(){
    let allGridDivs = document.querySelectorAll('.grid-item');
    allGridDivs.forEach(element => {
        element.remove();
    });
}

function createGrid(){
    destroyGrid();
    var gridsToMake = gridSlider.value * gridSlider.value;
    for (let i = 1; i <= gridsToMake; i++) {
        //declare div and p elements
        let div = document.createElement('div');
    
    
        //name divs sequentially and assign class
        div.id = `div${i}`;
        div.className = 'grid-item';
        div.addEventListener('mouseenter', hoverStart);
    
    
        //add div and p to DOM
        parentDiv.appendChild(div);
    
    
    }
    let mainContainer = document.querySelector('.container');
    
    mainContainer.style['grid-template-columns'] = `repeat(${gridSlider.value},${960/gridSlider.value}px)`;
    mainContainer.style['grid-template-rows'] = `repeat(${gridSlider.value},${960/gridSlider.value}px)`;
   
    
}

function colorChange(){
    console.log(colorPicker.value);
}