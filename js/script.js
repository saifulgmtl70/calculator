var input = "";

function calcFunc(value){
    input += value;
    document.getElementById("displayField").value =  input;
}


function calculate(){

        const result = eval(input);
        document.getElementById("displayField").value = result;
        input = result.toString();

        if(input === "=" && input !== ""){
            input = eval(input.replace("%", "/100"));
        }
  
    
}


function deleteFunc(){

        input = input.slice(0, -1);
        document.getElementById("displayField").value = input
    
}

function clearFunc(){
    input = "";
    document.getElementById("displayField").value = input;
}