/*
 Autor = Pablo Archanco Alonso
 Fecha = 2/12/15
 Licencia = gpl30
 Version 1.0
 Descripcion = js file where with the necessary functions to validate
 the form.

 */
/*
 Copyright (C) 2015 Pablo Archanco Alonso
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by 
 Free Software Fundation, either version 3 of the License, or 
 (at your option) any later version.

 This program is distributed in the hope that will be useful, 
 but WITHOUT ANY WARRANTY whithout even implied warranty of 
 MERCHANTIBILITY or FIINESS FOR A PARTICULAR PURPOSE. see the
 GNU General Public License for more details

 You should have recived a copy of the GNU General Public License
 along with this program. If not, see <http://www.gnu.org/license/>
 */
/**
 * verifica que el parametro es una cadena de caracteres
 * @param string
 * @returns {boolean}
 */
function validateString(string) {
    return (/^[a-z]+$/i.test(string))? true : false;
}
/**
 * verifica que el parametro que le pasa es un numero
 * @param number
 * @returns {boolean}
 */
function validateNumber(number) {
    return (/[0-9]{9}/.test(number)) ? true : false;
}
/**
 * verifica que el parametro es una cadena de caracteres de tipo email
 * @param string
 * @returns {boolean}
 */
function validateMail(string) {
    return (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(string)) ? true : false;
}
/**
 * funcion que comprueba si todos los campos estan rellenados y su longitud no es nula
 * de ser asi habilita el campo de terminos y condiciones
 * @param event
 */
function habilitar(event) {
    var array = new Array();
    array.push(document.getElementById("name").value.length);
    array.push(document.getElementById("surname1").value.length);
    array.push(document.getElementById("surname2").value.length);
    array.push(document.getElementById("email").value.length);
    array.push(document.getElementById("phone").value.length);
    array.push(document.getElementById("mobil").value.length);
    array.push(document.getElementById("textarea").value.length);
    var camposRellenados = true;
    for(var i = 0; i < array.length; i++)
        if (Number(array[i]) <= 0) {
            camposRellenados = false;
            break;
        }
    if (camposRellenados) {
        document.getElementById("conditions").disabled = false;
        document.getElementById("submit").disabled = false;
    } else {
        // En caso que haya un campo vacio volvemos a ponerlo disabled
        document.getElementById("conditions").disabled = true;
        document.getElementById("submit").disabled = true;
    }
}

function validar(){}