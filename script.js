/* Selecting colors */

let paintColor; // Stores the color that the user's "paintbrush" is set to.

const colorBtns = document.querySelectorAll(".color");

// When clicked each button will change the paint color to its respective color.
for (let i = 0; i < colorBtns.length; i++)
{
    colorBtns[i].addEventListener('click', () => paintColor = colorBtns[i].id);
}

/* Painting */

const pixels = document.querySelectorAll(".pixel");

function makePaintable(pixelLst)
{
    for (let i = 0; i < pixelLst.length; i++)
    {
        pixelLst[i].addEventListener('mouseover', () => 
        pixelLst[i].style.backgroundColor = paintColor);
    }
}

makePaintable(pixels);

/* Clearing */

const clearBtn = document.querySelector("#clear-btn");

function clearBoard()
{
    for (let i = 0; i < pixels.length; i++)
    {
        pixels[i].style.backgroundColor = 'white';
    }
}

clearBtn.addEventListener('click', clearBoard);

/* Dimension Changing */

let dim;  // Specifies the dimensions of the grid

const slider = document.querySelector("#dim-slider");
slider.addEventListener('mouseup', () => dim = slider.value);


