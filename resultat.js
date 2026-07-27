
// ================================
// Résultat - Mon Code Promo
// ================================

// Génère un numéro de série aléatoire
function genererNumeroSerie() {

    const prefixe = "CP";

    const annee = new Date().getFullYear();

    const numero = Math.floor(10000000 + Math.random() * 90000000);

    return `${prefixe}-${annee}-${numero}`;

}

// Affichage du numéro de série
const serial = document.getElementById("serial");

if(serial){

    serial.textContent = genererNumeroSerie();

}

// ================================
// Bouton Historique
// ================================

const historique = document.querySelectorAll("button")[0];

historique.addEventListener("click",function(){

    alert("Aucune opération disponible.");

});

// ================================
// Bouton Remboursement
// ================================

const remboursement = document.querySelectorAll("button")[1];

remboursement.addEventListener("click",function(){

    alert("Votre demande de remboursement est actuellement indisponible.");

});

// ================================
// Bouton Déconnexion
// ================================

const deconnexion = document.querySelectorAll("button")[2];

deconnexion.addEventListener("click",function(){

    if(confirm("Voulez-vous vraiment vous déconnecter ?")){

        window.location.href="verification.html";

    }

});
