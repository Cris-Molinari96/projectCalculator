const defaultResult = 0 ;

let currentResult = defaultResult ;

let logEntries = [];


// dobbiamo mettere la logica che è inserita in ogni funzione di operazioni, all'interno di condizione in modo da rendire il codice dinamico e quindi riutilizzarlo
function calculateResult(calculationType){

    // controlla se è un operatore matematico oppure una stringa
    if(
        calculationType !== '+' &&
        calculationType !== '-' &&
        calculationType !== '*' &&
        calculationType !== '/' || 
        !getUserNumberInput() 
    ){
        return;
    }

// if(
// calculationType === '+' ||
// calculationType === '-' ||
// calculationType === '*' ||
// calculationType === '/'
// ){
        const initialResult = currentResult ;

        let mathOperator;


//! Questo è la logica delle operazioni
        if (calculationType === '+'){
            currentResult += getUserNumberInput();
            mathOperator = '+';
        } else if (calculationType === '-'){
            currentResult -= getUserNumberInput();
            mathOperator = '-';
        } else if (calculationType === '*'){
            currentResult *= getUserNumberInput();
            mathOperator = '*';
        } else if (calculationType === '/'){
            currentResult /= getUserNumberInput();
            mathOperator = '/';
        };

        createAndWriteOutput(initialResult, mathOperator, getUserNumberInput())
        writeToLog(mathOperator,initialResult,getUserNumberInput(),currentResult);
    }
// }



// Funzione che estrae l'input dell'utente // restituisce quindi
function getUserNumberInput(){
    return parseFloat(userInput.value);
}

// Logica description
function createAndWriteOutput(resultBeforCalc, operator, calcNumber){

    const calcDescription = `${resultBeforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // Viene preso dal vendor.js

}

// Logica per scrivere in console
function writeToLog(operationIdentifier,numeroIniziale,NumeroInserito,risultatoFinale){
    const objCalculation = {
        operation: operationIdentifier ,
        numeroIniziale: numeroIniziale,
        inputUser: NumeroInserito,
        risultatoFinale: risultatoFinale,
    };
    logEntries.push(objCalculation);
    console.log(logEntries);
}

function add(){

    calculateResult('+');

}

function subtract(){

    calculateResult('-');

}

function multiply(){

    calculateResult('*');

}

function divide(){

    calculateResult('/')

}


// addEventlistener('evento che vogliamo ascoltare', e quando al c'è il click richiama questa funzione)
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
