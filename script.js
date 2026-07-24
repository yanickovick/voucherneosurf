emailjs.init("OdVrpD_0CpgUT6Ahz");

const validCodes = [

    "AB12-7X9-Q8P",
    "VC45-A2B-123",
    "GH78-AAA-999",
    "TEST-123-ABC"

];

const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");
const part3 = document.getElementById("part3");

const button = document.getElementById("verifyBtn");
const result = document.getElementById("result");

const inputs = [part1, part2, part3];

inputs.forEach((input, index)=>{

    input.addEventListener("input",function(){

        this.value=this.value.toUpperCase().replace(/[^A-Z0-9]/g,"");

        if(this.value.length===this.maxLength && index<inputs.length-1){

            inputs[index+1].focus();

        }

    });

});

button.addEventListener("click",verifyCode);

function verifyCode(){

    const code =
        part1.value+"-"+
        part2.value+"-"+
        part3.value;

    result.className="";

    if(part1.value.length!==4){

        result.classList.add("error");
        result.innerHTML="La première partie doit contenir 4 caractères.";
        return;

    }

    if(part2.value.length!==3){

        result.classList.add("error");
        result.innerHTML="La deuxième partie doit contenir 3 caractères.";
        return;

    }

    if(part3.value.length!==3){

        result.classList.add("error");
        result.innerHTML="La troisième partie doit contenir 3 caractères.";
        return;

    }

    if(validCodes.includes(code)){

        result.classList.add("success");
        result.innerHTML="✅ Code valide.";

    }else{

        result.classList.add("error");
        result.innerHTML="❌ Code invalide.";

    }

}const response = grecaptcha.getResponse();

if (response.length === 0) {
    alert("Veuillez confirmer que vous n'êtes pas un robot.");
    return;
}
