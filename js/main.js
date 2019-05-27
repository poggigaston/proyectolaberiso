/*

Vanilla JS:

var nombre = prompt('Ingrese su nombre');
console.log('Hola ' + nombre);
document.write('Hola ' + nombre);
document.write('<h2>Soy un document.write</h2>');

*/

// jQuery
// $('body').css('background', 'red');

/*
    Vanilla JS

    document.body.style.background = 'green';

    var h1 = document.querySelector('h1');
    h1.style.color = 'yellow';
*/

$(".fa-bars").click(function() {
	$("nav").css({ top: "0", left: "0" });
});

/*$(".fa-times").click(function() {
	$("nav").css({ top: "-100%", left: "-100%" });
});*/

if (screen.width <= 768) {
	$("nav ul li a").click(function() {
		$("nav").css({ top: "-100%", left: "-100%" });
	});
}

/*$("#uno button").click(function() {
	$(".modal").fadeIn(1000);
	$(".modal").css("display", "flex");
});

$(".modal .ventana button").click(function() {
	$(".modal").fadeOut(2000);
});

$(".galeria").slick({
	dots: true
});

/* 
    CONDICIONALES

    if(condicion) {
        hace esto
    }

    Operadores de comparación:

        == --> comparar iguauldad
        === --> comparar igualdad en valor y tipo de dato
        != --> comparar desigualdad
        !== --> compara desigualdad en valor y tipo de dato
        < --> menor que
        > --> mayor que
        <= --> menor o igual que
        >= --> mayor o igual que
*/

if (5 > 3) {
	console.log("5 es mayor a 3");
}
