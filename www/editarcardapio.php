<?php
		$data = file_get_contents("php://input");
		$item = json_decode($data);
		$namespace = $item->namespace;

		$arquivo = "cardapios/".$namespace.".phtml";


$dataarquivo = file_get_contents("cardapios/".$namespace.".phtml");


$ponteiro = fopen($arquivo, "w");	
		fwrite($ponteiro,"");
		$texto='';
		$texto.=$data;
		$texto.='';

 fwrite($ponteiro, $texto);		

?>