// JAVASCRIPT CALCULATOR
// ---------------------

// TODO: Add operand buttons and calculation logic
// ( +, -, *, /, = )

let onScreenNumberString = "0", cumulativeNumber = "0"; currentEquation= "";
let buttonAreaDOM = 0; let decimalOnScreen = false;

function init()
{

}

function clear()
{
    onScreenNumberString = "0";
    cumulativeNumber = "0";
    currentEquation = "";
    decimalOnScreen = false;
    updateScreenBottom();
    updateScreenTop();
    console.log("Screen cleared!");
}

function updateScreenTop()
{
    let screenTopDOM = document.getElementById("screenTop");
    screenTopDOM.textContent = parseFloat(cumulativeNumber);
}

function updateScreenBottom()
{
    let screenBottomDOM = document.getElementById("screenBottom");
    screenBottomDOM.textContent = parseFloat(onScreenNumberString);

}

function appendScreenNumber(numberIn)
{
    if(onScreenNumberString.length < 15)
    {
        let appendNumberString = numberIn.toString();
        let newScreenNumberString = onScreenNumberString + appendNumberString;
        console.log(newScreenNumberString);
        onScreenNumberString = newScreenNumberString;
    }
    else console.log("Number limit reached!");
}


function populateOperandButtons()
{

}


function addDecimal()
{
    if(!decimalOnScreen)
    {   
        decimalOnScreen = true;
        onScreenNumberString += ".";

        console.log("Decimal added!");
    }
    else
    {
        console.log("Decimal already on-screen!");
    }

    updateScreenBottom();

}

function populateNumberButtons()
{
// FUNCTION creates 0-9 buttons, formats them into a CSS grid, and sets up
// callback functions for e.g. clicking to display the number on our screen

    // Fill the "buttonarea" DIV with our buttons
    let i = 1, currentRow = 1, currentColumn = 1;
    while(true)
    {
        
        // Create each new button from 1-9 and put them into a CSS grid
        let newButton = document.createElement("button");
        newButton.id = "button" + i;
        newButton.name = i;
        newButton.classList.add("calculatorButton")
        newButton.textContent = i;
        
        newButton.style.gridColumnStart = currentColumn;
        newButton.style.gridColumnEnd = currentColumn + 1;
        newButton.style.gridRowStart = currentRow;
        newButton.style.gridRowEnd = currentRow + 1;

        // Click adds/appends each number to the screen
        newButton.addEventListener ("click", function() { 
            console.log(this.name);
            // Catch the decimal case of 0.x
            if( (onScreenNumberString == 0) && (!decimalOnScreen) ) 
                onScreenNumberString = this.name;

            else appendScreenNumber(this.name);
            
            updateScreenBottom();
        } );

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
}

function populateButtons()
{
    
    buttonAreaDOM = document.getElementById("buttonarea");
    populateNumberButtons();


    // Clear button to the right of '0' button
    let clearButton = document.createElement("button");
    clearButton.id = "clearButton";
    clearButton.textContent = "C";
           
    clearButton.style.gridColumnStart = 3;
    clearButton.style.gridColumnEnd = 4;
    clearButton.style.gridRowStart = 4;
    clearButton.style.gridRowEnd = 5;
    clearButton.classList.add("calculatorButton")
    clearButton.addEventListener("click", function(){ clear(); } );

    buttonAreaDOM.appendChild(clearButton);

    // Decimal point '.' button to the left of '0' button
    let decimalButton = document.createElement("button");
    decimalButton.id = "decimalButton";
    decimalButton.textContent = ".";
           
    decimalButton.style.gridColumnStart = 1;
    decimalButton.style.gridColumnEnd = 2;
    decimalButton.style.gridRowStart = 4;
    decimalButton.style.gridRowEnd = 5;
    decimalButton.classList.add("calculatorButton")
    decimalButton.addEventListener("click", function(){ addDecimal(); } );

    buttonAreaDOM.appendChild(decimalButton);

    // Create & position operand buttons w/click event listener
    populateOperandButtons();
}