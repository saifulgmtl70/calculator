var inputValue = "";

function calculator(value){
    inputValue += value;
    const display = document.getElementById("displayField");
    display.value = inputValue;

}


function calCulate(){

        try {
            inputValue = inputValue.replace('%', '*0.01');
            const calc = eval(inputValue);
            const showResult = document.getElementById("displayField");
            showResult.value = calc;
            
        } 
        catch (error) {
            alert("Invalid Calculation");
        }
}

function deleteBtn(){
    inputValue = inputValue.slice(0, -1);
    const displayDel = document.getElementById("displayField");
    displayDel.value = inputValue;
}


function clearValue(){
    inputValue = '';
    document.getElementById("displayField").value = inputValue;
}