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
 * funcion que comprueba si todos los campos estan rellenados y su longitud no es nula
 * de ser asi habilita el campo de terminos y condiciones
 */
function habilitar() {
    var array = new Array();
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
function habilitarchk() {
    document.getElementById("submit").disabled = (document.getElementById("conditions").checked) ? false : true;

}
