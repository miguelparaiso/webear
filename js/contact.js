/**
 * funcion que comprueba si todos los campos estan rellenados y su longitud no es nula
 * de ser asi habilita el campo de terminos y condiciones
 */
function habilitar() {
    var array = Array();
    array.push(document.getElementById("name").value.length);
    array.push(document.getElementById("surname1").value.length);
    array.push(document.getElementById("surname2").value.length);
    array.push(document.getElementById("email").value.length);
    array.push(document.getElementById("mobil").value.length);
    array.push(document.getElementById("texto").value.length);

    var camposRellenados = true;
    for (var i = 0; i < array.length; i++) {
        if (Number(array[i]) <= 0) {
            camposRellenados = false;
            break;
        }
    }
    if (camposRellenados) {
        document.getElementById("conditions").disabled = false;

    } else {
        document.getElementById("conditions").disabled = true;
        document.getElementById("conditions").checked = false;
        document.getElementById("submit").disabled = true;
    }

}
/**
 * funcion que habilita o deshabilita el boton de submit segun se pulse en el campo checkbox condiciones
 */
function habilitarchk() {
    document.getElementById("submit").disabled = (document.getElementById("conditions").checked) ? false : true;

}
/**
 * Funcion que comprueba si el parametro imput introducido cumple el parametro patron
 * @param regexp
 * @param input
 * @returns {boolean}
 */
function chk(regexp, input) {
    return (regexp.test(input));
}
function validar() {
    /************ CAMPOS A COMPROBAR ************/
    var nombre = document.getElementById("name").value;
    var apellido1 = document.getElementById("surname1").value;
    var apellido2 = document.getElementById("surname2").value;
    var email = document.getElementById("email").value;
    var telefonoMovil = document.getElementById("mobil").value;

    /* Opciones del select*/
    var auxCont = document.getElementById("options");
    var opcionSeleccionada = auxCont.selectedIndex;
    /* Opcione seleccionada*/
    var opcion = auxCont.options[opcionSeleccionada].text;

    /************ EXPRESIONES REGULARES ************/
    /************ expresion regular sting con espacio ************/
    var regexString = /^([a-z ]{1,30})/i;
    /************ expresion regular email ************/
    var regexEmail = /^\w+@\w+?\.*\w{2,3}$/;
    /************ expresion regular telefono movil ************/
    var regexTelefonoMovil = /^[6]\d{8}$/;
    switch (true) {
        case (!chk(regexString, nombre)):
            alert('Nombre erroneo');
            return false;
        case (!chk(regexString, apellido1)):
            alert('Primer apellido erroneo');
            return false;
        case (!chk(regexString, apellido2)):
            alert('Segundo apellido erroneo');
            return false;
        case (!chk(regexEmail, email)):
            alert('Email erroneo');
            return false;
        case (!chk(regexTelefonoMovil, telefonoMovil)):
            alert('Telefono movil erroneo');
            return false;
        case (opcion == 'Ninguna'):
            alert('Seleccione una opcion');
            return false;
    }
    return true
}
function seleccionaOpcion() {
    var auxCont = document.getElementById("options");
    var auxOpcion = document.getElementById("options2");
    auxOpcion.disabled = false;
    var opcionSeleccionada = auxCont.selectedIndex;
    var opcion = auxCont.options[opcionSeleccionada].text;

    var opciones = {};
    opciones['Sugerencia'] = ['Mejoras', 'Bugs', 'Otas'];
    opciones['Queja'] = ['Grave', 'Muy Grave', 'Extremadamente Grave'];
    opciones['Informacion'] = ['Facturacion', 'Personal', 'Otro'];


    while (auxOpcion.options.length) {
        auxOpcion.remove(0);
    }
    if (opcion == 'Ninguna') {
        auxOpcion.disabled = true;
    }
    var ciudad = opciones[opcion];


    for (var i = 0; i < ciudad.length; i++) {
        var aux = new Option(ciudad[i]);
        auxOpcion.options.add(aux);
    }


}