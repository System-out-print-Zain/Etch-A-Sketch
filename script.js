const BOARD_LEN = 450;
const PIX_BORDER_WEIGHT = 0.5;
/* Selecting colors */

let paintColor; // Stores the color that the user's "paintbrush" is set to.

const colorBtns = document.querySelectorAll(".color");

// When clicked each button will change the paint color to its respective color.
for (let i = 0; i < colorBtns.length; i++)
{
    colorBtns[i].addEventListener('click', () => paintColor = colorBtns[i].id);
}

/* Painting */

let pixels = document.querySelectorAll(".pixel");

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

const slider = document.querySelector("#dim-slider");

const board = document.querySelector("#board");

function updateDim()
{
    const dim = slider.value; // Specifies the dimensions of the grid
    // Delete existing divs
    for (let i = 0; i < pixels.length; i ++)
    {
        pixels[i].remove();
    }

    let pix;

    for (let i = 0; i < dim * dim; i ++)
    {
        pix = document.createElement("div");
        pix.classList.add("pixel");
        pix.style.width = ((BOARD_LEN - PIX_BORDER_WEIGHT * 2 * dim)/dim) + "px";
        pix.style.height = ((BOARD_LEN - PIX_BORDER_WEIGHT * 2 * dim)/dim) + "px";
        board.appendChild(pix);
    }

    pixels = document.querySelectorAll(".pixel");  // Update nodeList

    makePaintable(pixels);
}

slider.addEventListener('mouseup', updateDim);
