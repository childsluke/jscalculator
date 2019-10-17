function init()
{

}

function reset()
{

}

function populateButtons()
{
// FUNCTION creates 0-9 buttons, formats them into a CSS grid, and sets up
// callback functions for e.g. clicking to display the number on our screen

    // Get the button area from DOM and fill it with our buttons
    let buttonAreaDOM = document.getElementById("buttonarea");
    let i = 1, currentRow = 1, currentColumn = 1;
    while(true)
    {
        
        // Create each new button from 1-9 and put them into a CSS grid
        let newButton = document.createElement("button");
        newButton.id = "button" + i;
        newButton.classList.add("calculatorButton")
        newButton.textContent = i;
        
        newButton.style.gridColumnStart = currentColumn;
        newButton.style.gridColumnEnd = currentColumn + 1;
        newButton.style.gridRowStart = currentRow;
        newButton.style.gridRowEnd = currentRow + 1;

        currentColumn++;
        if(currentColumn == 4)
        {
            currentRow++;
            currentColumn = 1;
        }

        buttonAreaDOM.appendChild(newButton);
        
        if(i == 0) break;
        else if(i != 9) i++; 
        else i = 0;
    }

    // The '0' button should be centered on the bottom row of buttons
    let buttonZeroDOM = document.getElementById("button0");
    buttonZeroDOM.style.gridColumnStart = 2;
    buttonZeroDOM.style.gridColumnEnd = 3;


    // TODO: Create operand and clear buttons
}