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
 * Funcion que comprueba si el parametro imput introducido cumple el patron
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
        var telefonoFijo = document.getElementById("phone").value;
        var telefonoMovil = document.getElementById("mobil").value;

        /************ EXPRESIONES REGULARES ************/
        /************ expresion regular sting con espacio ************/
        var regexString = /^([a-z ]{1,30})/i;
        /************ expresion regular email ************/
        var regexEmail = /^\w+@\w+?\.*\w{2,3}$/;
        /************ expresion regular telefono fijo ************/
        var regexTelefonoFijo = /^[9]\d{8}$/;
        /************ expresion regular telefono movil ************/
        var regexTelefonoMovil = /^[6]\d{8}$/;

        /************ Pongo solo & para que compruebe todos los campos del if ************/
        if (!chk(regexString, nombre) &
            !chk(regexString, apellido1) &
            !chk(regexString, apellido2) &
            !chk(regexEmail, email) &
            !chk(regexTelefonoFijo, telefonoFijo) &&
            !chk(regexTelefonoMovil, telefonoMovil)) {
            return true;
        }
        else {
            alert('Error al enviar, el formulario compruebe los campos');
            return false;
        }
    }