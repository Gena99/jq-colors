// good luck !
$('document').ready(function(){
	//$("[type='button']").css( "background-color", "red" );
	
	// Creer un objet qui stoke la liste de tous les boutons
	var boutons = $("[type='button']");
	
	// Parcourir la liste des boutons et attribuer à chacun sa couleur
	for (var i = boutons.length - 1; i >= 0; i--) {
		//boutons[i]
		//$(boutons[i]).css('background-color',$(boutons[i]).attr('data-color'));
		//Creer une variable qui contient mon bouton et une pour la couleur
		var monBouton = $(boutons[i]);
		var couleur = monBouton.attr('data-color');
		monBouton.css('background-color', couleur);
	}
	boutons.click(function(){
		var estCochee = $('#modify-texte').is(':checked')
		var couleur = $(this).attr('data-color');
		if(estCochee){
			$('body').css('color', couleur);
		}else{
			$('body').css('background-color', couleur);
		}
		

	});
});