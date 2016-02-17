<?php
$a[1][] = "SMR";
$a[2][] = "DAM";
$a[2][] = "DAW";
$a[2][] = "ASIR";
$a[3][] = "SISTEMAS";
$a[3][] = "GESTIÓN";

$response = $_POST['titulo'];
$doc = json_decode($response, true);
$titulacion = $doc['titulacion'];

$objeto_json = new stdClass();
$objeto_json->especialidades=$a[$titulacion];
echo json_encode($objeto_json);