//create 16x16 grid of divs
let parentDiv = document.querySelector('.container');
let divCount = 0;

for (let i = 1; i <= 16; i++) {
    //declare div and p elements
    let div = document.createElement('div');
    

    //name divs sequentially and assign class
    div.id = `div${i}`;
    div.className='grid-item';
    div.addEventListener('mouseenter', hoverStart);
    div.addEventListener('mouseleave', hoverEnd);

    //add div and p to DOM
    parentDiv.appendChild(div);
 
    
}

function hoverStart(e){
    let currentHover = e.currentTarget;
    currentHover.style.backgroundColor = 'red';

}


function hoverEnd(e){
    let currentHover = e.currentTarget;
    currentHover.style.backgroundColor = 'white';

}
