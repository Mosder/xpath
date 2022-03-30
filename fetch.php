<?php
$xml = simplexml_load_file('terc.xml');
$v = $_GET['v'];
if ($v == 0)
    $result = $xml->xpath("catalog/row[NAZWA_DOD='województwo']/NAZWA");
else
    $result = $xml->xpath("catalog/row[WOJ=$v and (RODZ=1 or RODZ=4)]/NAZWA");
echo json_encode($result);