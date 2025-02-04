let string="";
let btns=document.querySelectorAll(".button");
let input=document.querySelector('#display');
for(let btn of btns){
    btn.addEventListener('click',(e)=>{
        try{
            if(e.target.innerHTML.match(/[0-9]/)){
                let value=e.target.innerHTML;
                if (!(string === "0" && value === "0")) {  
                    if (string === "0") {
                        string = value; // Replace leading zero
                    } else {
                        string += value; // Append normally
                    }
                }
                input.value=string;
            }
            else if(e.target.innerHTML=='='){
                string=eval(string);
                input.value=string;
                if(string == "0"){
                    string="";
                }
            }
            else if(e.target.innerHTML=='CE'){
                if (string.length > 0) {
                    string = string.slice(0, -1); // Remove the last character
                    input.value=string;
                }     
            }
            else if(e.target.innerHTML=='C'){
                string="";
                input.value=string;
            }
            else{
                string+=e.target.innerHTML;
                input.value=string;
            }
        }
        catch(e){
            input.value="Error";
        }
    })
}

document.addEventListener("keydown", function (e) {
    let value=e.key;
    if (value === "Backspace" || value === "Delete") {
        string = string.slice(0, -1);
        input.value = string;
    }
    else if (/[0-9+\-*/]/.test(value)) {
        string += value;
        input.value = string;
    }
    else if(value === "Enter"){
        string=eval(string);
        input.value = string;
        if(string == "0"){
            string="";
        }
    }
    
});