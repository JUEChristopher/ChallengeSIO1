// Canvas
document.onselectstart = (e) => { e.preventDefault() }
// Création du canvas

var monCanvas = document.getElementById('dessin');
if (monCanvas.getContext) {
    var ctx = monCanvas.getContext('2d');
    var i = 0;
} else {
    alert('canvas non supporté par ce navigateur')
}

// Définition de la taille du canvas (préférable de le faire en JS et non en HTML)

dessin.width = 500;
dessin.height = 400;

var tempsDébut = 0;
var tempsFinal = 0;



var ecranCourant = "accueil";





// Gestion des écrans

// Initialisation de la page d'accueil uniquement

afficheAccueil();
// Transitions entre écrans (via les boutons)

function afficheAccueil() {
    ecranCourant = "accueil";
    $('#accueil').show();
    $('#jeu').hide();
    $('#bilan').hide();
}



function afficheBilan() {
    ecranCourant = "Bilan";
    $('#accueil').hide();
    $('#jeu').hide();
    $('#bilan').show();
}

//Fonction qui réinitialise le jeu


afficheAccueil();

// Listes

// liste des niveaux

listeNiveau = new Array();
listeNiveau[0] = 1;
listeNiveau[1] = 2;
listeNiveau[2] = 3;


// liste couleurs

listeCouleurs = new Array();
listeCouleurs[0] = ["rouge", "#FF0000"];
listeCouleurs[1] = ["vert", "#008000"];
listeCouleurs[2] = ["bleue", "#0000FF"];

// liste taille

listeTailles = new Array();
listeTailles[0] = [0, 5, "petite"];
listeTailles[1] = [1, 10, "moyenne"];
listeTailles[2] = [2, 20, "grande"];


// gestionnaire

// Création de la balle

// ordre Niveau / couleurs / taille / x / vitesse / y

listeBalles = new Array();
listeBalles[0] = [listeNiveau[0], listeCouleurs[0][1], listeTailles[0][1], 400, 1, 0];
listeBalles[1] = [listeNiveau[0], listeCouleurs[1][1], listeTailles[1][1], 150, 2, 0];
listeBalles[2] = [listeNiveau[0], listeCouleurs[2][1], listeTailles[2][1], 200, 3, 0];

listeBalles[3] = [listeNiveau[0], listeCouleurs[0][1], listeTailles[0][1], 50, 3, 0];
listeBalles[4] = [listeNiveau[0], listeCouleurs[1][1], listeTailles[1][1], 70, 2, 0];
listeBalles[5] = [listeNiveau[0], listeCouleurs[2][1], listeTailles[2][1], 90, 1, 0];

listeBalles[6] = [listeNiveau[0], listeCouleurs[0][1], listeTailles[0][1], 220, 1, 0];
listeBalles[7] = [listeNiveau[0], listeCouleurs[1][1], listeTailles[1][1], 250, 3, 0];
listeBalles[8] = [listeNiveau[0], listeCouleurs[2][1], listeTailles[2][1], 270, 1, 0];



function afficheJeu() {

    for(let l = 0; l < listeBalles.length; l++){
        listeBalles[l][5] = 0;
    }
    ecranCourant = "jeu";
    $('#accueil').hide();
    $('#jeu').show();
    $('#bilan').hide();

    // Lancement de l'animation
    interval = setInterval(regle,1); // fonction regle() chaque 1ms
    TempsJeu = setInterval(timer,1000); // Incrémente le temps de jeu de 1s
}
function timer() {
    tempsDébut =+ 1
}

function regle(){
    if (ecranCourant == "Jeu"){
        Animer();
    }
    else{
        clearInterval(TempsJeu);
        clearInterval(interval);
    }
}

// vitesse des balles

var inter = setInterval(Animer, 60);



//

function Animer() {
    if (tempsFinal > tempsDébut) {
        afficheBilan;
    } else {
        i++;
        ctx.globalCompositeOperation = 'lighter';
        ctx.clearRect(0, 0, monCanvas.width, monCanvas.height);

        //Niveau 1

        dessineBalle(0);
        dessineBalle(1);
        dessineBalle(2);

        //Niveau 2

        dessineBalle(3);
        dessineBalle(4);
        dessineBalle(5);

        //Niveau 3

        dessineBalle(6);
        dessineBalle(7);
        dessineBalle(8);
    }
}

function dessineBalle(idBalle) {

    // Niveau 1

    // Si la balle est du niveau 1
    if (listeBalles[idBalle][0] = 1) {

        ctx.save();


        listeBalles[idBalle][5] = (listeBalles[idBalle][4] * i);
        ctx.translate(listeBalles[idBalle][3], (listeBalles[idBalle][4] * i));

        ctx.beginPath();

        ctx.arc(0, 0, listeBalles[idBalle][2], 0, 2 * Math.PI, false);

        ctx.restore();
        ctx.fillStyle = listeBalles[idBalle][1];

        ctx.stroke();

        ctx.fill();
    }
    // Niveau 2

    // Si la balle est du niveau 2

    if (listeBalles[idBalle][0] = 2) {

        ctx.save();


        listeBalles[idBalle][5] = (listeBalles[idBalle][4] * i);
        ctx.translate(listeBalles[idBalle][3], (listeBalles[idBalle][4] * i));

        ctx.beginPath();

        ctx.arc(0, 0, listeBalles[idBalle][2], 0, 2 * Math.PI, false);

        ctx.restore();
        ctx.fillStyle = listeBalles[idBalle][1];

        ctx.stroke();

        ctx.fill();
    }

    // Niveau 3

    // Si la balle est du niveau 2

    if (listeBalles[idBalle][0] = 3) {

        ctx.save();


        listeBalles[idBalle][5] = (listeBalles[idBalle][4] * i);

        // Création de la translation de la balle

        ctx.translate(listeBalles[idBalle][3], (listeBalles[idBalle][4] * i));

        // Initialisation

        ctx.beginPath();

        //  Initialisation de la balle

        ctx.arc(0, 0, listeBalles[idBalle][2], 0, 2 * Math.PI, false);

        // Couleur de la balle
        ctx.restore();
        ctx.fillStyle = listeBalles[idBalle][1];

        ctx.stroke();


        // Remplissage de la balle

        ctx.fill();
    }
}

Animer();