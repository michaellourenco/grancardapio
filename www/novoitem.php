<?php
		$data = file_get_contents("php://input");
		


$arquivo = "localcardapio.php";
$dataarquivo = file_get_contents("localcardapio.php");
$objArquivo = json_decode($dataarquivo);
$todoscardapios = $objArquivo;
$ponteiro = fopen($arquivo, "w");	
		fwrite($ponteiro,"");
		$texto='{ "cardapios":[';
		foreach ( $todoscardapios->cardapios as $e ) {
			$texto.='{"titulo":"'.$e->titulo.'","telefone":"'.$e->telefone.'","cidade":"'.$e->cidade.'","categoria":{"titulo":"'.$e->categoria->titulo.'","codigo":'.$e->categoria->codigo.',"preco": "'.$e->categoria->preco.'"}},';
		}
		$texto.=$data;
		$texto.=']}';

 fwrite($ponteiro, $texto);		

 /*include 'localcardapio.php'; */?>