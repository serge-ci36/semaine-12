$affichage2 = document.getElementById("affichage2");
$score1 = document.getElementById("score1");
$score2 = document.getElementById("score2");

var tourjoueur = 0 ; var gagnant = 0 ;  var quiagagne = 0 ;
var numcase = 0 ; var random = 0 ; var caseRandom=0 ;
var x1y1 = 0 ; var x2y1 = 0 ; var x3y1 = 0 ;
var x1y2 = 0 ; var x2y2 = 0 ; var x3y2 = 0 ;
var x1y3 = 0 ; var x2y3 = 0 ; var x3y3 = 0 ;
var tour = 0 ; var score1 = 0 ; var score2 = 0 ;

//** Efface les champs affichables **//
function efface() {
	pil.src = "img/vide.png" ; leon.src = "img/vide.png" ; dede.src = "img/vide.png" ; rejouer.src = "img/vide.png" ; pir.src = "img/vide.png" ; 
	$affichage2.innerHTML = " " ;	}

//** Comme son nom l"indique RESET **//
function reset() { 

	if (gagnant == 1) { score1++ ;}
	if (gagnant == 2) { score2++ ;}


	pil.src = "img/vide.png" ; leon.src = "img/vide.png" ; dede.src = "img/vide.png" ; 	rejouer.src = "img/vide.png" ; 	pir.src = "img/vide.png" ; $affichage2.innerHTML = " " ;
	
	document.x1y1.src ="img/vide.png" ; document.x2y1.src ="img/vide.png" ; document.x3y1.src ="img/vide.png" ; 
	document.x1y2.src ="img/vide.png" ; document.x2y2.src ="img/vide.png" ; document.x3y2.src ="img/vide.png" ; 
	document.x1y3.src ="img/vide.png" ; document.x2y3.src ="img/vide.png" ; document.x3y3.src ="img/vide.png" ;
	
	document.x1y1.style.backgroundImage = "url('img/vide.png')"; 
	document.x2y1.style.backgroundImage = "url('img/vide.png')";
	document.x3y1.style.backgroundImage = "url('img/vide.png')";
	
	document.x1y2.style.backgroundImage = "url('img/vide.png')"; 
	document.x2y2.style.backgroundImage = "url('img/vide.png')";
	document.x3y2.style.backgroundImage = "url('img/vide.png')";
	
	document.x1y3.style.backgroundImage = "url('img/vide.png')"; 
	document.x2y3.style.backgroundImage = "url('img/vide.png')";
	document.x3y3.style.backgroundImage = "url('img/vide.png')";
	
	tourjoueur = 0 ; tour = 0 ; gagnant = 0 ; quiagagne = 0 ;
	
	x1y1 = 0 ; 	x2y1 = 0 ; 	x3y1 = 0 ; 	x1y2 = 0 ; 	x2y2 = 0 ; 	x3y2 = 0 ; 	x1y3 = 0 ; 	x2y3 = 0 ; 	x3y3 = 0 ;

	init() ;  }

//** Initialisation de la partie choix du premier joueur **//	
function init() { 
	tour=1 ;
	var random = Math.round(Math.random() * 1);
	if (random == 0) { tourjoueur = 1 ; } else { tourjoueur = 2 ;   } 
	
	if (tour==1 && tourjoueur == 1 && gagnant==0 ) {goIA() ;affiche() ;} else {affiche() ;}

	}

//** test choix cliquables du joueur **//	
function joue(numcase, codecase) {
	
if ( gagnant == 0)	{
	
	if ( tourjoueur == 2 && numcase == 1 && x1y1 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x1y1 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 2 && x2y1 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x2y1 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 3 && x3y1 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x3y1 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 4 && x1y2 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x1y2 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 5 && x2y2 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x2y2 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 6 && x3y2 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x3y2 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 7 && x1y3 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x1y3 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 8 && x2y3 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x2y3 = 2 ; tour++ ; }
	if ( tourjoueur == 2 && numcase == 9 && x3y3 == 0 && gagnant == 0) {  codecase.src = "img/case_rond.png" ; tourjoueur = 1 ; x3y3 = 2 ; tour++ ; } 
}
	 goIA() ; 
}
  
//** Le cerveau de l"IA **//	
function goIA() {
if ( gagnant == 0)	{
  // MODE AGRESSIF 
	if (x1y1 == 2 && x2y1 == 2 && x3y1 == 0 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y1 = 1  ; }
	if (x2y1 == 2 && x3y1 == 2 && x1y1 == 0 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y1 = 1  ; }
	if (x1y1 == 2 && x3y1 == 2 && x2y1 == 0 && tourjoueur == 1) { document.x2y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y1 = 1  ; }
	if (x1y1 == 2 && x2y2 == 2 && x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y3 = 1  ; }
	if (x2y2 == 2 && x3y3 == 2 && x1y1 == 0 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y1 = 1  ; }
	if (x1y1 == 2 && x3y3 == 2 && x2y2 == 0 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y2 = 1  ; }
	if (x1y1 == 2 && x1y2 == 2 && x1y3 == 0 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y3 = 1  ; }
	if (x1y2 == 2 && x1y3 == 2 && x1y1 == 0 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y1 = 1  ; }
	if (x1y1 == 2 && x1y3 == 2 && x1y2 == 0 && tourjoueur == 1) { document.x1y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y2 = 1  ; }
	if (x2y1 == 2 && x2y2 == 2 && x2y3 == 0 && tourjoueur == 1) { document.x2y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y3 = 1  ; }
	if (x2y2 == 2 && x2y3 == 2 && x2y1 == 0 && tourjoueur == 1) { document.x2y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y1 = 1  ; }
	if (x2y1 == 2 && x2y3 == 2 && x2y2 == 0 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y2 = 1  ; }
	if (x3y1 == 2 && x3y2 == 2 && x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y3 = 1  ; }
	if (x3y2 == 2 && x3y3 == 2 && x3y1 == 0 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y1 = 1  ; }
	if (x3y1 == 2 && x3y3 == 2 && x3y2 == 0 && tourjoueur == 1) { document.x3y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y2 = 1  ; }
	if (x1y3 == 2 && x2y3 == 2 && x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y3 = 1  ; }
	if (x2y3 == 2 && x3y3 == 2 && x1y3 == 0 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y3 = 1  ; }
	if (x1y3 == 2 && x3y3 == 2 && x2y3 == 0 && tourjoueur == 1) { document.x2y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y3 = 1  ; }
	if (x1y3 == 2 && x2y2 == 2 && x3y1 == 0 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y1 = 1  ; }
	if (x2y2 == 2 && x3y1 == 2 && x1y3 == 0 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y3 = 1  ; }
	if (x1y3 == 2 && x3y1 == 2 && x2y2 == 0 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y2 = 1  ; }
	if (x1y2 == 2 && x2y2 == 2 && x3y2 == 0 && tourjoueur == 1) { document.x3y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x3y2 = 1  ; }
	if (x2y2 == 2 && x3y2 == 2 && x1y2 == 0 && tourjoueur == 1) { document.x1y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x1y2 = 1  ; }
	if (x1y2 == 2 && x3y2 == 2 && x2y2 == 0 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png" ; tourjoueur =  2 ; tour++ ;  x2y2 = 1  ; }

  // MODE DEFENSIF
	if (x1y1 == 1 && x2y1 == 1 && x3y1 == 0 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y1 = 1 ; }
	if (x1y1 == 0 && x2y1 == 1 && x3y1 == 1 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y1 = 1 ; }
	if (x1y1 == 1 && x2y1 == 0 && x3y1 == 1 && tourjoueur == 1) { document.x2y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x2y1 = 1 ; }
	if (x1y2 == 1 && x2y2 == 1 && x3y2 == 0 && tourjoueur == 1) { document.x3y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y2 = 1 ; }
	if (x1y2 == 0 && x2y2 == 1 && x3y2 == 1 && tourjoueur == 1) { document.x1y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y2 = 1 ; }
	if (x1y2 == 1 && x2y2 == 0 && x3y2 == 1 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x2y2 = 1 ; }
	if (x1y3 == 1 && x2y3 == 1 && x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y3 = 1 ; }
	if (x1y3 == 0 && x2y3 == 1 && x3y3 == 1 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y3 = 1 ; }
	if (x1y1 == 1 && x1y2 == 1 && x1y3 == 0 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y3 = 1 ; }
	if (x1y1 == 0 && x1y2 == 1 && x1y3 == 1 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y1 = 1 ; }
	if (x1y1 == 1 && x1y2 == 0 && x1y3 == 1 && tourjoueur == 1) { document.x1y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y2 = 1 ; }
	if (x2y1 == 1 && x2y2 == 1 && x2y3 == 0 && tourjoueur == 1) { document.x2y3.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x2y3 = 1 ; }
	if (x2y1 == 0 && x2y2 == 1 && x2y3 == 1 && tourjoueur == 1) { document.x2y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x2y1 = 1 ; }
	if (x2y1 == 1 && x2y2 == 0 && x2y3 == 1 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x2y2 = 1 ; }
	if (x3y1 == 1 && x3y2 == 1 && x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y3 = 1 ; }
	if (x3y1 == 0 && x3y2 == 1 && x3y3 == 1 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y1 = 1 ; }
	if (x3y1 == 1 && x3y2 == 0 && x3y3 == 1 && tourjoueur == 1) { document.x3y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y2 = 1 ; }
	if (x1y1 == 1 && x2y2 == 1 && x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y3 = 1 ; }
	if (x1y1 == 0 && x2y2 == 1 && x3y3 == 1 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y1 = 1 ; }
	if (x1y1 == 1 && x2y2 == 0 && x3y3 == 1 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x2y2 = 1 ; }
	if (x1y3 == 1 && x2y2 == 1 && x3y1 == 0 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x3y1 = 1 ; }
	if (x1y3 == 0 && x2y2 == 1 && x3y1 == 1 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x1y3 = 1 ; }
	if (x1y3 == 1 && x2y2 == 0 && x3y1 == 1 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png"; tourjoueur =  2 ; tour++ ; x2y2 = 1 ; }	
  
	if ( tourjoueur == 1) { var caseRandom = Math.round(Math.random() * 9) ; }
	
	if (caseRandom == 1 && x1y1 == 0 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png"; x1y1 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 2 && x2y1 == 0 && tourjoueur == 1) { document.x2y1.src = "img/case_croix.png"; x2y1 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 3 && x3y1 == 0 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png"; x3y1 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 4 && x1y2 == 0 && tourjoueur == 1) { document.x1y2.src = "img/case_croix.png"; x1y2 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 5 && x2y2 == 0 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png"; x2y2 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 6 && x3y2 == 0 && tourjoueur == 1) { document.x3y2.src = "img/case_croix.png"; x3y2 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 7 && x1y3 == 0 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png"; x1y3 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 8 && x2y3 == 0 && tourjoueur == 1) { document.x2y3.src = "img/case_croix.png"; x2y3 = 1; tourjoueur =  2 ; tour++ ;  }
	if (caseRandom == 9 && x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png"; x3y3 = 1; tourjoueur =  2 ; tour++ ;  }	
	
	//** test bug pas de choix possibles **//

	if (x1y1 == 0 && tourjoueur == 1) { document.x1y1.src = "img/case_croix.png"; x1y1 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x2y1 == 0 && tourjoueur == 1) { document.x2y1.src = "img/case_croix.png"; x2y1 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x3y1 == 0 && tourjoueur == 1) { document.x3y1.src = "img/case_croix.png"; x3y1 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x1y2 == 0 && tourjoueur == 1) { document.x1y2.src = "img/case_croix.png"; x1y2 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x2y2 == 0 && tourjoueur == 1) { document.x2y2.src = "img/case_croix.png"; x2y2 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x3y2 == 0 && tourjoueur == 1) { document.x3y2.src = "img/case_croix.png"; x3y2 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x1y3 == 0 && tourjoueur == 1) { document.x1y3.src = "img/case_croix.png"; x1y3 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x2y3 == 0 && tourjoueur == 1) { document.x2y3.src = "img/case_croix.png"; x2y3 = 1; tourjoueur =  2 ; tour++ ;  }
	if (x3y3 == 0 && tourjoueur == 1) { document.x3y3.src = "img/case_croix.png"; x3y3 = 1; tourjoueur =  2 ; tour++ ;  }	
}	
	 verif() ;
}

//** Vérifie les choix déja joués **//
function verif() { 

	if (x1y1 == 1 && x2y1 == 1 && x3y1 == 1) { gagnant = 1 ; 
	document.x1y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y1.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y1.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y1 == 1 && x2y2 == 1 && x3y3 == 1) { gagnant = 1 ;  
	document.x1y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y1 == 1 && x1y2 == 1 && x1y3 == 1) { gagnant = 1 ;  
	document.x1y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x1y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x1y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y2 == 1 && x2y2 == 1 && x3y2 == 1) { gagnant = 1 ;  
	document.x1y2.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y2.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x2y1 == 1 && x2y2 == 1 && x2y3 == 1) { gagnant = 1 ;  
	document.x2y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x2y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x3y1 == 1 && x3y2 == 1 && x3y3 == 1) { gagnant = 1 ;  
	document.x3y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x3y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y3 == 1 && x2y3 == 1 && x3y3 == 1) { gagnant = 1 ;  
	document.x1y3.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y3.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x3y1 == 1 && x2y2 == 1 && x1y3 == 1) { gagnant = 1 ;  
	document.x3y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x1y3.style.backgroundImage = "url('img/transp_phones.png')";}

	if (x1y1 == 2 && x2y1 == 2 && x3y1 == 2) { gagnant = 2 ; 
	document.x1y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y1.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y1.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y1 == 2 && x2y2 == 2 && x3y3 == 2) { gagnant = 2 ;  
	document.x1y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y1 == 2 && x1y2 == 2 && x1y3 == 2) { gagnant = 2 ;  
	document.x1y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x1y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x1y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y2 == 2 && x2y2 == 2 && x3y2 == 2) { gagnant = 2 ;  
	document.x1y2.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y2.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x2y1 == 2 && x2y2 == 2 && x2y3 == 2) { gagnant = 2 ;  
	document.x2y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x2y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x3y1 == 2 && x3y2 == 2 && x3y3 == 2) { gagnant = 2 ;  
	document.x3y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x3y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x1y3 == 2 && x2y3 == 2 && x3y3 == 2) { gagnant = 2 ;  
	document.x1y3.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y3.style.backgroundImage = "url('img/transp_phones.png')";
	document.x3y3.style.backgroundImage = "url('img/transp_phones.png')";}
	if (x3y1 == 2 && x2y2 == 2 && x1y3 == 2) { gagnant = 2 ;  
	document.x3y1.style.backgroundImage = "url('img/transp_phones.png')"; 
	document.x2y2.style.backgroundImage = "url('img/transp_phones.png')";
	document.x1y3.style.backgroundImage = "url('img/transp_phones.png')";}
	
	affiche() ;
}

//** Affiche les champs et img **//	
function affiche() {
	
	if ( tourjoueur == 1 && gagnant == 0) 
	{	pil.src = "img/pe_l.png" ; leon.src = "img/leon_small.png" ; dede.src = "img/vide.png" ; pir.src = "img/pe_r.png" ; 
		$affichage2.innerHTML = "Léon réfléchit !" ; $score1.innerHTML = score1 ; $score2.innerHTML = score2 ; }

	if ( tourjoueur == 2 && gagnant == 0) 
	{	pil.src = "img/pi_l.png" ; leon.src = "img/vide.png" ;dede.src = "img/dede_small.png" ; pir.src = "img/pi_r.png" ; 
		$affichage2.innerHTML = "A Dédé de jouer !" ; $score1.innerHTML = score1 ; $score2.innerHTML = score2 ; } 

	//** test des différentes fin possibles **//
	if (tour <= 10 && gagnant == 1)  { efface() ; $affichage2.innerHTML = "Léon a gagné" ; rejouer.src = "img/rejouer.png"; quiagagne = 1 ;}
	if (tour <= 10 && gagnant == 2)  { efface() ; $affichage2.innerHTML = "Dédé a gagné" ; rejouer.src = "img/rejouer.png"; quiagagne = 2 ;}
	if (tour == 10 && gagnant == 0)  { efface() ; $affichage2.innerHTML = "Match nul"    ; rejouer.src = "img/rejouer.png"; }
	
	//** aide au developpememnt **//
	console.log("tour ",tour,"joueur ",tourjoueur,"Gagnant ",gagnant) ;
	console.log(x1y1,x2y1,x3y1) ; console.log(x1y2,x2y2,x3y2) ; console.log(x1y3,x2y3,x3y3) ; 	
 } 
 
 //** fonction principale **//
function depart() { init () ; }

//** Starter **//
depart() ;
affiche() ;
goIA() ;
verif() ;


